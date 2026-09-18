export type Locale = "pt" | "en";

/** Um valor de conteúdo disponível nos dois idiomas suportados. */
export type Localized<T> = Record<Locale, T>;

export const locales: Locale[] = ["pt", "en"];

interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  language: {
    /** Rótulo curto exibido no seletor (PT / EN). */
    pt: string;
    en: string;
    /** Nome completo do idioma, usado em aria-labels. */
    ptFull: string;
    enFull: string;
    switchAriaLabel: (targetLanguage: string) => string;
    selectorAriaLabel: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    cta: string;
    desktopNavAriaLabel: string;
    mobileNavAriaLabel: string;
    openMenuAriaLabel: string;
    closeMenuAriaLabel: string;
  };
  hero: {
    greetingPrefix: string;
    ctaProjects: string;
    ctaContact: string;
    scrollLabel: string;
    scrollAriaLabel: string;
    avatarAlt: (name: string) => string;
  };
  about: {
    eyebrow: string;
    title: string;
    factName: string;
    factRole: string;
    factLocation: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    filterAll: string;
    filterAriaLabel: string;
    viewProject: string;
    repo: string;
    noResults: string;
    galleryAriaLabel: (title: string) => string;
    previewAlt: (title: string) => string;
    selectPreviewAriaLabel: string;
    showPreviewAriaLabel: (index: number) => string;
    category: Record<"web" | "mobile" | "design" | "data", string>;
  };
  lightbox: {
    closeAriaLabel: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
    galleryAriaLabel: (title: string) => string;
    imageAlt: (title: string, index: number, total: number) => string;
    goToImageAriaLabel: (index: number) => string;
    selectImageAriaLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    rights: string;
  };
  social: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    dribbble: string;
    twitter: string;
  };
}

export const translations: Localized<Dictionary> = {
  pt: {
    meta: {
      title: "Gabriel Hansen | Portfolio",
      description: "Portfólio profissional — projetos, habilidades e trajetória.",
    },
    skipLink: "Pular para o conteúdo",
    language: {
      pt: "PT",
      en: "EN",
      ptFull: "Português",
      enFull: "Inglês",
      switchAriaLabel: (targetLanguage) => `Mudar idioma para ${targetLanguage}`,
      selectorAriaLabel: "Selecionar idioma",
    },
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      cta: "Vamos conversar",
      desktopNavAriaLabel: "Navegação principal",
      mobileNavAriaLabel: "Navegação móvel",
      openMenuAriaLabel: "Abrir menu",
      closeMenuAriaLabel: "Fechar menu",
    },
    hero: {
      greetingPrefix: "Olá, eu sou",
      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
      scrollLabel: "Rolar",
      scrollAriaLabel: "Rolar para a próxima seção",
      avatarAlt: (name) => `Foto de ${name}`,
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Quem está por trás do trabalho",
      factName: "Nome",
      factRole: "Cargo",
      factLocation: "Localização",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Ferramentas e tecnologias que domino",
      description:
        "Um panorama das áreas em que atuo com mais frequência — edite livremente para refletir seu próprio stack.",
    },
    projects: {
      eyebrow: "Projetos",
      title: "Trabalhos selecionados",
      description: "Uma seleção de sites desenvolvidos em WordPress com Elementor e código customizado.",
      filterAll: "Todos",
      filterAriaLabel: "Filtrar projetos por categoria",
      viewProject: "Ver projeto",
      repo: "Repositório",
      noResults: "Nenhum projeto nesta categoria ainda.",
      galleryAriaLabel: (title) => `Ampliar imagens do projeto ${title}`,
      previewAlt: (title) => `Prévia do projeto ${title}`,
      selectPreviewAriaLabel: "Selecionar prévia",
      showPreviewAriaLabel: (index) => `Mostrar prévia ${index}`,
      category: {
        web: "Web",
        mobile: "Mobile",
        design: "Design",
        data: "Dados",
      },
    },
    lightbox: {
      closeAriaLabel: "Fechar galeria",
      prevAriaLabel: "Imagem anterior",
      nextAriaLabel: "Próxima imagem",
      galleryAriaLabel: (title) => `Galeria de imagens — ${title}`,
      imageAlt: (title, index, total) => `${title} — captura ${index} de ${total}`,
      goToImageAriaLabel: (index) => `Ir para imagem ${index}`,
      selectImageAriaLabel: "Selecionar imagem",
    },
    experience: {
      eyebrow: "Trajetória",
      title: "Experiência profissional",
      description: "Um resumo da minha jornada. Atualize com seus cargos, empresas e conquistas.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo juntos?",
      description: "Me chame diretamente por um dos canais abaixo.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      email: "E-mail",
      dribbble: "Dribbble",
      twitter: "Twitter",
    },
  },
  en: {
    meta: {
      title: "Gabriel Hansen | Portfolio",
      description: "Professional portfolio — projects, skills and career journey.",
    },
    skipLink: "Skip to content",
    language: {
      pt: "PT",
      en: "EN",
      ptFull: "Portuguese",
      enFull: "English",
      switchAriaLabel: (targetLanguage) => `Switch language to ${targetLanguage}`,
      selectorAriaLabel: "Select language",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      cta: "Let's talk",
      desktopNavAriaLabel: "Main navigation",
      mobileNavAriaLabel: "Mobile navigation",
      openMenuAriaLabel: "Open menu",
      closeMenuAriaLabel: "Close menu",
    },
    hero: {
      greetingPrefix: "Hi, I'm",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      scrollLabel: "Scroll",
      scrollAriaLabel: "Scroll to next section",
      avatarAlt: (name) => `Photo of ${name}`,
    },
    about: {
      eyebrow: "About me",
      title: "The person behind the work",
      factName: "Name",
      factRole: "Role",
      factLocation: "Location",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and technologies I use",
      description:
        "An overview of the areas I work in most often — edit freely to reflect your own stack.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      description: "A selection of websites built with WordPress, Elementor and custom code.",
      filterAll: "All",
      filterAriaLabel: "Filter projects by category",
      viewProject: "View project",
      repo: "Repository",
      noResults: "No projects in this category yet.",
      galleryAriaLabel: (title) => `Expand images for the ${title} project`,
      previewAlt: (title) => `Preview of the ${title} project`,
      selectPreviewAriaLabel: "Select preview",
      showPreviewAriaLabel: (index) => `Show preview ${index}`,
      category: {
        web: "Web",
        mobile: "Mobile",
        design: "Design",
        data: "Data",
      },
    },
    lightbox: {
      closeAriaLabel: "Close gallery",
      prevAriaLabel: "Previous image",
      nextAriaLabel: "Next image",
      galleryAriaLabel: (title) => `Image gallery — ${title}`,
      imageAlt: (title, index, total) => `${title} — screenshot ${index} of ${total}`,
      goToImageAriaLabel: (index) => `Go to image ${index}`,
      selectImageAriaLabel: "Select image",
    },
    experience: {
      eyebrow: "Journey",
      title: "Professional experience",
      description: "A summary of my career so far. Update it with your own roles, companies and wins.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something together?",
      description: "Reach out directly through one of the channels below.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      email: "Email",
      dribbble: "Dribbble",
      twitter: "Twitter",
    },
  },
};
