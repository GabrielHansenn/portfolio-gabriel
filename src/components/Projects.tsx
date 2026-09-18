import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "../content/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FilterValue = "Todos" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("Todos");

  const filters: FilterValue[] = useMemo(
    () => ["Todos", ...new Set(projects.flatMap((p) => p.categories))],
    []
  );

  const visibleProjects = useMemo(
    () =>
      filter === "Todos" ? projects : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  return (
    <section id="projetos" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projetos"
            title="Trabalhos selecionados"
            description="Uma seleção de sites desenvolvidos em WordPress com Elementor e código customizado."
          />
        </div>

        {filters.length > 2 && (
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
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
                    {item}
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
          <p className="mt-10 text-center text-(--color-text-secondary)">
            Nenhum projeto nesta categoria ainda.
          </p>
        )}
      </div>
    </section>
  );
}
