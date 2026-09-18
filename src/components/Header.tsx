import { useEffect, useState } from "react";
import { profile } from "../content/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";
import { CloseIcon, MenuIcon } from "./icons";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#habilidades", label: t.nav.skills },
    { href: "#projetos", label: t.nav.projects },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-(--color-bg)/85 backdrop-blur-md border-b border-(--color-border)"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#topo"
          className="font-display text-lg font-semibold tracking-tight text-(--color-text) hover:text-(--color-accent) transition-colors"
        >
          {profile.name !== "[SEU NOME]" ? profile.name : "seu.nome"}
          <span className="text-(--color-accent)">.</span>
        </a>

        <nav className="hidden md:block" aria-label={t.nav.desktopNavAriaLabel}>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-(--color-accent) px-5 py-2 text-sm font-semibold text-(--color-accent-ink) transition-all duration-200 hover:bg-(--color-accent-hover) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--color-accent)]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            aria-label={isMenuOpen ? t.nav.closeMenuAriaLabel : t.nav.openMenuAriaLabel}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="md:hidden border-t border-(--color-border) bg-(--color-bg)"
          aria-label={t.nav.mobileNavAriaLabel}
        >
          <ul className="flex flex-col px-5 py-4 animate-menu-in">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3.5 text-base font-medium text-(--color-text) hover:bg-(--color-surface) hover:text-(--color-accent) transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contato"
                onClick={closeMenu}
                className="block rounded-full bg-(--color-accent) px-5 py-3 text-center text-base font-semibold text-(--color-accent-ink)"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
