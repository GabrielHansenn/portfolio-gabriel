import { skillGroups } from "../content/portfolioData";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24 bg-(--color-surface)/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Habilidades"
          title="Ferramentas e tecnologias que domino"
          description="Um panorama das áreas em que atuo com mais frequência — edite livremente para refletir seu próprio stack."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 100}>
              <div className="h-full rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent)/50 hover:shadow-[0_16px_40px_-20px_var(--color-accent)]">
                <h3 className="font-display text-lg font-semibold text-(--color-text)">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-(--color-border-strong) bg-(--color-surface-2) px-3.5 py-1.5 text-sm font-medium text-(--color-text-secondary)"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
