import { profile } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, pick } = useLanguage();

  // A altura mínima desconta o header fixo (5rem): sem isso o espaço dele
  // entra duas vezes na conta e sobra um vão grande antes da próxima seção.
  return (
    <section
      id="topo"
      className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden pt-24 pb-24 lg:pb-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-(--color-accent)/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[320px] w-[320px] rounded-full bg-(--color-accent)/8 blur-[100px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-(--color-text) sm:text-5xl lg:text-6xl">
              {t.hero.greetingPrefix}{" "}
              <span className="text-(--color-accent)">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-4 text-xl font-medium text-(--color-text-secondary) sm:text-2xl">
              {pick(profile.role)}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-(--color-text-secondary) sm:text-lg">
              {pick(profile.tagline)}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-7 py-3.5 text-sm font-semibold text-(--color-accent-ink) transition-all duration-200 hover:bg-(--color-accent-hover) hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--color-accent)] active:translate-y-0"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-(--color-border-strong) px-7 py-3.5 text-sm font-semibold text-(--color-text) transition-all duration-200 hover:border-(--color-accent) hover:text-(--color-accent) hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:-mb-8 lg:self-end lg:justify-end">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={t.hero.avatarAlt(profile.name)}
              /* A máscara dissolve a base da foto no fundo, para o recorte
                 não terminar num corte reto. */
              className="hero-photo w-full max-w-[18rem] object-contain object-bottom sm:max-w-sm lg:max-h-[68vh] lg:w-auto lg:max-w-none"
            />
          ) : (
            <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-[2rem] border border-(--color-border-strong) bg-(--color-surface) lg:max-w-sm">
              <span className="font-display text-8xl font-bold text-(--color-accent)/25">
                {profile.name !== "[SEU NOME]" ? profile.name.charAt(0) : "?"}
              </span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
