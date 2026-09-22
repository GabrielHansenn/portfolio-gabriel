import type { SVGProps } from "react";
import {
  siCss,
  siElementor,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siPhp,
  siReact,
  siTypescript,
  siWordpress,
} from "simple-icons";

type IconProps = SVGProps<SVGSVGElement>;

/** Desenha um logo oficial do simple-icons (paths CC0) usando a cor herdada. */
function brandIcon(path: string, title: string) {
  return function BrandIcon(props: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true" {...props}>
        <title>{title}</title>
        <path d={path} />
      </svg>
    );
  };
}

/** Ícone genérico de banco de dados — SQL é a linguagem, não uma marca. */
function SqlIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </svg>
  );
}

/**
 * Selo com iniciais para marcas sem logo disponível em bibliotecas abertas.
 * Melhor um monograma honesto do que um logo desenhado "de memória".
 */
function monogramIcon(initials: string, title: string) {
  return function MonogramIcon(props: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" {...props}>
        <title>{title}</title>
        <rect
          x="1.5"
          y="1.5"
          width="21"
          height="21"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <text
          x="12"
          y="12.5"
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          fontSize={initials.length > 1 ? 9 : 12}
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {initials}
        </text>
      </svg>
    );
  };
}

export const techIconMap = {
  html: brandIcon(siHtml5.path, siHtml5.title),
  css: brandIcon(siCss.path, siCss.title),
  javascript: brandIcon(siJavascript.path, siJavascript.title),
  typescript: brandIcon(siTypescript.path, siTypescript.title),
  php: brandIcon(siPhp.path, siPhp.title),
  react: brandIcon(siReact.path, siReact.title),
  node: brandIcon(siNodedotjs.path, siNodedotjs.title),
  wordpress: brandIcon(siWordpress.path, siWordpress.title),
  sql: SqlIcon,
  git: brandIcon(siGit.path, siGit.title),
  github: brandIcon(siGithub.path, siGithub.title),
  elementor: brandIcon(siElementor.path, siElementor.title),
  divi: monogramIcon("D", "Divi"),
  beaver: monogramIcon("BB", "Beaver Builder"),
};

export type TechIcon = keyof typeof techIconMap;
