import { profile, resolveLocalizedUrl, socialLinks } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { socialIconMap } from "./icons";

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border) py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-(--color-text-muted)">
          © {year} {profile.name !== "[SEU NOME]" ? profile.name : "[SEU NOME]"}. {t.footer.rights}
        </p>

        <ul className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.icon];
            const label = t.social[social.icon];
            return (
              <li key={social.icon}>
                <a
                  href={resolveLocalizedUrl(social.url, locale)}
                  target={social.icon === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
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
