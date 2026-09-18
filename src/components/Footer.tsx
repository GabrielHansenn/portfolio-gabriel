import { profile, socialLinks } from "../content/portfolioData";
import { socialIconMap } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border) py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-(--color-text-muted)">
          © {year} {profile.name !== "[SEU NOME]" ? profile.name : "[SEU NOME]"}. Todos os direitos reservados.
        </p>

        <ul className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <li key={social.label}>
                <a
                  href={social.url}
                  target={social.icon === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
                >
                  <Icon width={18} height={18} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
