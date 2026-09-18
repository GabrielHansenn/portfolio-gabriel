import { experiences } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t, pick } = useLanguage();

  return (
    <section id="experiencia" className="scroll-mt-24 bg-(--color-surface)/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <ol className="relative mt-14 border-l border-(--color-border) pl-8 sm:pl-10">
          {experiences.map((exp, index) => {
            const highlights = pick(exp.highlights);
            return (
              <Reveal as="li" key={exp.id} delay={index * 100} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-(--color-accent) ring-4 ring-(--color-bg) sm:-left-[calc(2.5rem+5px)]" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-semibold text-(--color-text)">
                    {pick(exp.role)} · <span className="text-(--color-accent)">{exp.organization}</span>
                  </h3>
                  <span className="text-sm font-medium text-(--color-text-muted)">{pick(exp.period)}</span>
                </div>

                <p className="mt-3 text-base leading-relaxed text-(--color-text-secondary)">
                  {pick(exp.description)}
                </p>

                {highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-(--color-text-secondary)"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-(--color-accent)" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
