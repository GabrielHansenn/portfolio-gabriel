import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Localized, type Locale } from "./translations";

const STORAGE_KEY = "portfolio-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Strings de interface no idioma atual. */
  t: (typeof translations)["pt"];
  /** Seleciona o valor certo de um conteúdo bilíngue (ex: pick(project.title)). */
  pick: <T,>(localized: Localized<T>) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") return stored;
  } catch {
    // localStorage indisponível (modo privado, cookies bloqueados etc.) — segue para detecção do navegador.
  }

  const browserLanguages = window.navigator.languages ?? [window.navigator.language];
  const prefersPortuguese = browserLanguages.some((lang) => lang?.toLowerCase().startsWith("pt"));
  return prefersPortuguese ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useLayoutEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.title = translations[locale].meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", translations[locale].meta.description);
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sem localStorage disponível — a preferência só vale para esta sessão.
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "pt" ? "en" : "pt");
  }, [locale, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
      pick: (localized) => localized[locale],
    }),
    [locale, setLocale, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage precisa ser usado dentro de um LanguageProvider");
  }
  return context;
}
