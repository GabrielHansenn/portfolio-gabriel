import { technologies } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { techIconMap } from "./techIcons";

/** Tempo de uma volta completa. Quanto maior, mais lento o deslizar. */
const LOOP_DURATION = "48s";

function TechList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {technologies.map((tech) => {
        const Icon = techIconMap[tech.icon];
        return (
          <li
            key={tech.name}
            className="group flex shrink-0 items-center gap-3 pr-10 sm:pr-14"
          >
            <Icon className="h-6 w-6 shrink-0 text-(--color-text-secondary) transition-colors duration-200 group-hover:text-(--color-accent)" />
            <span className="whitespace-nowrap text-sm font-medium text-(--color-text-secondary) transition-colors duration-200 group-hover:text-(--color-accent) sm:text-base">
              {tech.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function TechMarquee() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.tech.ariaLabel}
      className="border-y border-(--color-border) bg-(--color-surface)/30 py-8"
    >
      <div
        className="marquee overflow-hidden"
        style={{ "--marquee-duration": LOOP_DURATION } as React.CSSProperties}
      >
        <div className="marquee-track flex w-max items-center">
          <TechList />
          {/* Cópia idêntica: é ela que faz o loop emendar sem corte. */}
          <TechList hidden />
        </div>
      </div>
    </section>
  );
}
