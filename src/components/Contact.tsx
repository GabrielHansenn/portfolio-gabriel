import { profile, socialLinks } from "../content/portfolioData";
import { socialIconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos construir algo juntos?"
          description="Me chame diretamente por um dos canais abaixo."
          align="center"
        />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];
              const isEmail = social.icon === "email";
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target={isEmail ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 transition-all duration-200 hover:-translate-y-1 hover:border-(--color-accent)/60 hover:shadow-[0_16px_40px_-20px_var(--color-accent)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-accent-soft) text-(--color-accent) transition-transform duration-200 group-hover:scale-110">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-(--color-text-muted)">
                      {social.label}
                    </p>
                    <p className="truncate font-medium text-(--color-text)">
                      {isEmail ? profile.email : social.label}
                    </p>
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
