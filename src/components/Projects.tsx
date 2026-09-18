import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FilterValue = "all" | ProjectCategory;

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterValue>("all");

  const filters: FilterValue[] = useMemo(
    () => ["all", ...new Set(projects.flatMap((p) => p.categories))],
    []
  );

  const visibleProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  function filterLabel(value: FilterValue) {
    return value === "all" ? t.projects.filterAll : t.projects.category[value];
  }

  return (
    <section id="projetos" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </div>

        {filters.length > 2 && (
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t.projects.filterAriaLabel}>
              {filters.map((item) => {
                const isActive = filter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-(--color-accent) bg-(--color-accent) text-(--color-accent-ink)"
                        : "border-(--color-border-strong) text-(--color-text-secondary) hover:border-(--color-accent) hover:text-(--color-accent)"
                    }`}
                  >
                    {filterLabel(item)}
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-10 text-center text-(--color-text-secondary)">{t.projects.noResults}</p>
        )}
      </div>
    </section>
  );
}
