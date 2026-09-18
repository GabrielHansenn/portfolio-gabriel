import { profile } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t, pick } = useLanguage();

  const facts = [
    { label: t.about.factName, value: profile.name },
    { label: t.about.factRole, value: pick(profile.role) },
    { label: t.about.factLocation, value: pick(profile.location) },
  ];

  return (
    <section id="sobre" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="space-y-5">
              {pick(profile.bio).map((paragraph, index) => (
                <p
                  key={index}
                  className="text-balance text-lg leading-relaxed text-(--color-text-secondary) sm:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-5 py-4 transition-colors hover:border-(--color-accent)/50"
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-(--color-text-muted)">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-display text-base font-semibold text-(--color-text)">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
