import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-dvh bg-(--color-bg) text-(--color-text)">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-(--color-accent) focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-(--color-accent-ink)"
      >
        {t.skipLink}
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
