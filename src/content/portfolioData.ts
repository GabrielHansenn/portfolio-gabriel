import type { Localized } from "../i18n/translations";

/**
 * Conteúdo central do portfólio.
 * Edite este arquivo para atualizar nome, biografia, habilidades,
 * redes sociais, projetos e experiências exibidos no site.
 *
 * Campos que aparecem nos dois idiomas usam o formato { pt: "...", en: "..." }.
 * Campos como nome, e-mail e nomes de empresas ficam como texto simples,
 * pois normalmente não mudam entre idiomas.
 */

export interface Profile {
  name: string;
  role: Localized<string>;
  tagline: Localized<string>;
  /** Cada item da lista vira um parágrafo separado na seção "Sobre mim". */
  bio: Localized<string[]>;
  location: Localized<string>;
  email: string;
  resumeUrl: string;
  /** Foto de perfil exibida na Hero. Caminho em public/, ex: "/avatar.jpg". Vazio = mostra a inicial do nome. */
  avatar: string;
}

export const profile: Profile = {
  name: "Gabriel Hansen",
  role: {
    pt: "Desenvolvedor Wordpress",
    en: "WordPress Developer",
  },
  tagline: {
    pt: "Transformo ideias em produtos digitais",
    en: "I turn ideas into digital products",
  },
  bio: {
    pt: [
      "Sou Gabriel Hansen e vou te acompanhar em todo o processo, do início ao fim.",
      "Atualmente trabalho como WordPress e PHP Developer, e o meu papel é tirar a sua ideia do papel e colocá-la no ar. Acredito em projetos que fogem do comum. Um bom site não é só bonito. Ele funciona, converte e representa quem você é.",
      "Meu trabalho fala por si. Reserve um momento para conferir alguns dos projetos que já realizei.",
    ],
    en: [
      "I'm Gabriel Hansen, and I'll be with you through the whole process, from start to finish.",
      "I currently work as a WordPress and PHP Developer, and my role is to take your idea off paper and put it online. I believe in projects that stand out from the ordinary. A good website isn't just pretty — it works, converts, and represents who you are.",
      "My work speaks for itself. Take a moment to check out some of the projects I've already delivered.",
    ],
  },
  location: {
    pt: "Guarapuava, Paraná, Brasil",
    en: "Guarapuava, Paraná, Brazil",
  },
  email: "gabriel.hansen2005@gmail.com",
  resumeUrl: "#",
  avatar: "/avatar.jpg",
};

export type SocialIcon = "github" | "linkedin" | "whatsapp" | "email" | "dribbble" | "twitter";

export interface SocialLink {
  url: string;
  icon: SocialIcon;
}

export const socialLinks: SocialLink[] = [
  { url: "https://github.com/GabrielHansenn/", icon: "github" },
  { url: "https://www.linkedin.com/in/gabriel-hansen-661494397", icon: "linkedin" },
  {
    url: "https://wa.me/5542999616917?text=Oi%2C%20Gabriel!%20Encontrei%20seu%20portf%C3%B3lio%20e%20me%20interessei%20pelo%20seu%20trabalho.%20Podemos%20conversar%20sobre%20um%20projeto%3F",
    icon: "whatsapp",
  },
  { url: "mailto:gabriel.hansen2005@gmail.com", icon: "email" },
];

export interface SkillGroup {
  category: Localized<string>;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { pt: "Front-end", en: "Front-end" },
    items: ["HTML5 & CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: { pt: "Back-end", en: "Back-end" },
    items: ["PHP", "Node.js", "Express", "Supabase"],
  },
  {
    category: { pt: "Ferramentas & Design", en: "Tools & Design" },
    items: ["WordPress", "Elementor", "Git & GitHub", "Figma"],
  },
];

export type ProjectCategory = "web" | "mobile" | "design" | "data";

export interface Project {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  /**
   * Screenshots do projeto. Com mais de uma imagem, o card alterna entre
   * elas automaticamente e o clique abre uma galeria em tela cheia.
   */
  images: string[];
  /** Um projeto pode pertencer a mais de uma categoria (ex: Web + Mobile). */
  categories: ProjectCategory[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

/**
 * Projetos reais. Sites WordPress (Elementor + PHP customizado) sem
 * repositório público — por isso não têm `repoUrl`. Adicione screenshots
 * em `images` (arquivos em public/projects/) quando tiver as capturas.
 */
export const projects: Project[] = [
  {
    id: "prodscore",
    title: { pt: "ProdScore", en: "ProdScore" },
    description: {
      pt: "TCC: plataforma gamificada de gestão de tarefas. Os usuários ganham pontos ao concluir tarefas, mantêm sequências de produtividade, sobem de nível, desbloqueiam conquistas e competem em rankings individuais e em grupo.",
      en: "Capstone project: a gamified task management platform. Users earn points for completing tasks, keep productivity streaks, level up, unlock achievements, and compete in individual and group rankings.",
    },
    images: [
      "/projects/prodscore/01-landing.png",
      "/projects/prodscore/02-login.png",
      "/projects/prodscore/03-dashboard.png",
      "/projects/prodscore/04-tarefas.png",
      "/projects/prodscore/05-ranking.png",
      "/projects/prodscore/06-grupos.png",
      "/projects/prodscore/07-amigos.png",
      "/projects/prodscore/08-conquistas.png",
      "/projects/prodscore/09-estatisticas.png",
      "/projects/prodscore/10-perfil.png",
      "/projects/prodscore/11-seguranca.png",
    ],
    categories: ["web", "mobile"],
    tags: ["React", "TypeScript", "Node.js", "Supabase", "React Native"],
    repoUrl: "https://github.com/GabrielHansenn/prodscore",
    featured: true,
  },
  {
    id: "viceroy-home-health",
    title: { pt: "Viceroy Home Health", en: "Viceroy Home Health" },
    description: {
      pt: "Site institucional para uma empresa de home care na Flórida central, apresentando os serviços de cuidados pessoais, companhia e transporte oferecidos aos clientes.",
      en: "Institutional website for a home care company in central Florida, showcasing the personal care, companionship and transportation services offered to clients.",
    },
    images: ["/projects/viceroy-home-health.webp"],
    categories: ["web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://staging.creativesprings.com/viceroy/",
  },
  {
    id: "cedar-creek-psychology",
    title: { pt: "Cedar Creek Psychology", en: "Cedar Creek Psychology" },
    description: {
      pt: "Site para uma clínica de telepsicologia, com apresentação da prática, das abordagens terapêuticas (EMDR, TCC) e captação de novos pacientes.",
      en: "Website for a telepsychology practice, presenting the practice, its therapeutic approaches (EMDR, CBT) and capturing new patients.",
    },
    images: ["/projects/cedar-creek-psychology.webp"],
    categories: ["web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://cedarcreekpsychology.com/",
  },
  {
    id: "commercial-sewer-cleaning",
    title: { pt: "Commercial Sewer Cleaning Co", en: "Commercial Sewer Cleaning Co" },
    description: {
      pt: "Site institucional para uma empresa de desentupimento e serviços de encanamento em Indianápolis, ativa desde 1965, com foco em geração de contato 24h.",
      en: "Institutional website for a drain cleaning and plumbing services company in Indianapolis, operating since 1965, focused on 24/7 lead generation.",
    },
    images: ["/projects/commercial-sewer-cleaning.webp"],
    categories: ["web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://comsewerdev.wpengine.com/",
  },
  {
    id: "independent-glass",
    title: { pt: "Independent Glass Company", en: "Independent Glass Company" },
    description: {
      pt: "Site para uma vidraçaria de Chattanooga especializada em box de vidro, espelhos sob medida e vidros arquitetônicos, ativa desde 1925.",
      en: "Website for a Chattanooga glass company specializing in shower glass doors, custom mirrors and architectural glass, operating since 1925.",
    },
    images: ["/projects/independent-glass.webp"],
    categories: ["web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://devindepglass.wpengine.com/",
  },
  {
    id: "crabbe-service-company",
    title: { pt: "Crabbe Service Company", en: "Crabbe Service Company" },
    description: {
      pt: "Site para uma empresa de climatização e elétrica em Burlington (NC), apresentando os serviços residenciais e comerciais de HVAC, elétrica e geotermia.",
      en: "Website for an HVAC and electrical company in Burlington, NC, showcasing residential and commercial HVAC, electrical and geothermal services.",
    },
    images: ["/projects/crabbe-service-company.webp"],
    categories: ["web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "http://devcrabbeserv.wpengine.com/",
  },
];

export interface Experience {
  id: string;
  role: Localized<string>;
  organization: string;
  period: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
}

export const experiences: Experience[] = [
  {
    id: "experiencia-01",
    role: { pt: "Wordpress | PHP Developer", en: "WordPress | PHP Developer" },
    organization: "WorkHero",
    period: { pt: "02/2026 — Atual", en: "02/2026 — Present" },
    description: {
      pt: "Atuo no desenvolvimento e suporte de sites em WordPress, cuidando de cada demanda de ponta a ponta: entendo o que é preciso, construo as páginas e acompanho tudo até a entrega final. Trabalho com os principais construtores da plataforma, como Elementor, Divi e Beaver Builder.",
      en: "I develop and support WordPress websites, handling every request end to end: I understand what's needed, build the pages, and follow through to final delivery. I work with the platform's main page builders, such as Elementor, Divi and Beaver Builder.",
    },
    highlights: {
      pt: [
        "Criação e manutenção de páginas em WordPress com Elementor, Divi e Beaver Builder",
        "Suporte contínuo e melhorias em sites já publicados",
      ],
      en: [
        "Building and maintaining WordPress pages with Elementor, Divi and Beaver Builder",
        "Ongoing support and improvements on already published sites",
      ],
    },
  },
];
