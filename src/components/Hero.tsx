import { profile } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowDownIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="topo"
      className="relative flex min-h-dvh items-center overflow-hidden pt-24 pb-16"
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

        <Reveal delay={200}>
          <div className="relative mx-auto aspect-square w-full max-w-xs lg:max-w-sm">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-(--color-border-strong) bg-(--color-surface)">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={t.hero.avatarAlt(profile.name)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-display text-8xl font-bold text-(--color-accent)/25">
                    {profile.name !== "[SEU NOME]" ? profile.name.charAt(0) : "?"}
                  </span>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-6 rounded-[1.5rem] border border-dashed border-(--color-accent)/40" />
          </div>
        </Reveal>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-(--color-text-muted) transition-colors hover:text-(--color-accent) sm:flex"
        aria-label={t.hero.scrollAriaLabel}
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scrollLabel}</span>
        <ArrowDownIcon className="animate-bounce" />
      </a>
    </section>
  );
}
