import { useLanguage } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/translations";
import { BrazilFlag, UsaFlag } from "./flags";

interface LanguageSwitcherProps {
  className?: string;
}

const OPTIONS: Locale[] = ["pt", "en"];

const FLAGS: Record<Locale, typeof BrazilFlag> = {
  pt: BrazilFlag,
  en: UsaFlag,
};

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.selectorAriaLabel}
      className={`relative inline-flex items-center rounded-full border border-(--color-border-strong) bg-(--color-surface) p-1 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 w-16 rounded-full bg-(--color-accent) transition-transform duration-200 ease-out motion-reduce:transition-none"
        style={{ transform: locale === "pt" ? "translateX(0)" : "translateX(4rem)" }}
      />
      {OPTIONS.map((option) => {
        const isActive = locale === option;
        const targetLabel = option === "pt" ? t.language.ptFull : t.language.enFull;
        const Flag = FLAGS[option];
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={isActive}
            aria-label={t.language.switchAriaLabel(targetLabel)}
            className={`relative z-10 flex h-10 w-16 items-center justify-center gap-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
              isActive ? "text-(--color-accent-ink)" : "text-(--color-text-secondary) hover:text-(--color-text)"
            }`}
          >
            <Flag className="rounded-[2px] shadow-sm" />
            {t.language[option]}
          </button>
        );
      })}
    </div>
  );
}
