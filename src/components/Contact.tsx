import { resolveLocalizedUrl, socialLinks } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { socialIconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contato" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
          align="center"
        />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];
              const isEmail = social.icon === "email";
              const label = t.social[social.icon];
              return (
                <a
                  key={social.icon}
                  href={resolveLocalizedUrl(social.url, locale)}
                  target={isEmail ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 transition-all duration-200 hover:-translate-y-1 hover:border-(--color-accent)/60 hover:shadow-[0_16px_40px_-20px_var(--color-accent)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-accent-soft) text-(--color-accent) transition-transform duration-200 group-hover:scale-110">
                    <Icon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wide text-(--color-text-muted)">{label}</p>
                    <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <p className="w-max whitespace-nowrap text-sm font-medium leading-snug text-(--color-text)">
                        {social.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
