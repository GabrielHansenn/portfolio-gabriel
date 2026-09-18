/**
 * Conteúdo central do portfólio.
 * Edite este arquivo para atualizar nome, biografia, habilidades,
 * redes sociais, projetos e experiências exibidos no site.
 */

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  /** Cada item da lista vira um parágrafo separado na seção "Sobre mim". */
  bio: string[];
  location: string;
  email: string;
  resumeUrl: string;
  /** Foto de perfil exibida na Hero. Caminho em public/, ex: "/avatar.jpg". Vazio = mostra a inicial do nome. */
  avatar: string;
}

export const profile: Profile = {
  name: "Gabriel Hansen",
  role: "Desenvolvedor Wordpress",
  tagline: "Transformo ideias em produtos digitais",
  bio: [
    "Sou Gabriel Hansen e vou te acompanhar em todo o processo, do início ao fim.",
    "Atualmente trabalho como WordPress e PHP Developer, e o meu papel é tirar a sua ideia do papel e colocá-la no ar. Acredito em projetos que fogem do comum. Um bom site não é só bonito. Ele funciona, converte e representa quem você é.",
    "Meu trabalho fala por si. Reserve um momento para conferir alguns dos projetos que já realizei.",
  ],
  location: "Guarapuava, Paraná, Brasil",
  email: "gabriel.hansen2005@gmail.com",
  resumeUrl: "#",
  avatar: "/avatar.jpg",
};

export type SocialIcon = "github" | "linkedin" | "whatsapp" | "email" | "dribbble" | "twitter";

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/GabrielHansenn/", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-hansen-661494397",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/5542999616917?text=Oi%2C%20Gabriel!%20Encontrei%20seu%20portf%C3%B3lio%20e%20me%20interessei%20pelo%20seu%20trabalho.%20Podemos%20conversar%20sobre%20um%20projeto%3F",
    icon: "whatsapp",
  },
  { label: "E-mail", url: "mailto:gabriel.hansen2005@gmail.com", icon: "email" },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Front-end",
    items: ["HTML5 & CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Back-end",
    items: ["PHP", "Node.js", "Express", "Supabase"],
  },
  {
    category: "Ferramentas & Design",
    items: ["WordPress", "Elementor", "Git & GitHub", "Figma"],
  },
];

export type ProjectCategory = "Web" | "Mobile" | "Design" | "Dados";

export interface Project {
  id: string;
  title: string;
  description: string;
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
    title: "ProdScore",
    description:
      "TCC: plataforma gamificada de gestão de tarefas. Os usuários ganham pontos ao concluir tarefas, mantêm sequências de produtividade, sobem de nível, desbloqueiam conquistas e competem em rankings individuais e em grupo.",
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
    categories: ["Web", "Mobile"],
    tags: ["React", "TypeScript", "Node.js", "Supabase", "React Native"],
    repoUrl: "https://github.com/GabrielHansenn/prodscore",
    featured: true,
  },
  {
    id: "viceroy-home-health",
    title: "Viceroy Home Health",
    description:
      "Site institucional para uma empresa de home care na Flórida central, apresentando os serviços de cuidados pessoais, companhia e transporte oferecidos aos clientes.",
    images: ["/projects/viceroy-home-health.webp"],
    categories: ["Web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://staging.creativesprings.com/viceroy/",
  },
  {
    id: "cedar-creek-psychology",
    title: "Cedar Creek Psychology",
    description:
      "Site para uma clínica de telepsicologia, com apresentação da prática, das abordagens terapêuticas (EMDR, TCC) e captação de novos pacientes.",
    images: ["/projects/cedar-creek-psychology.webp"],
    categories: ["Web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://cedarcreekpsychology.com/",
  },
  {
    id: "commercial-sewer-cleaning",
    title: "Commercial Sewer Cleaning Co",
    description:
      "Site institucional para uma empresa de desentupimento e serviços de encanamento em Indianápolis, ativa desde 1965, com foco em geração de contato 24h.",
    images: ["/projects/commercial-sewer-cleaning.webp"],
    categories: ["Web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://comsewerdev.wpengine.com/",
  },
  {
    id: "independent-glass",
    title: "Independent Glass Company",
    description:
      "Site para uma vidraçaria de Chattanooga especializada em box de vidro, espelhos sob medida e vidros arquitetônicos, ativa desde 1925.",
    images: ["/projects/independent-glass.webp"],
    categories: ["Web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://devindepglass.wpengine.com/",
  },
  {
    id: "crabbe-service-company",
    title: "Crabbe Service Company",
    description:
      "Site para uma empresa de climatização e elétrica em Burlington (NC), apresentando os serviços residenciais e comerciais de HVAC, elétrica e geotermia.",
    images: ["/projects/crabbe-service-company.webp"],
    categories: ["Web"],
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "http://devcrabbeserv.wpengine.com/",
  },
];

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "experiencia-01",
    role: "Wordpress | PHP Developer",
    organization: "WorkHero",
    period: "[02/2026] — [Atual]",
    description: "Atuo no desenvolvimento e suporte de sites em WordPress, cuidando de cada demanda de ponta a ponta: entendo o que é preciso, construo as páginas e acompanho tudo até a entrega final. Trabalho com os principais construtores da plataforma, como Elementor, Divi e Beaver Builder.",
    highlights: ["Criação e manutenção de páginas em WordPress com Elementor, Divi e Beaver Builder", "Suporte contínuo e melhorias em sites já publicados"],
  },

];

