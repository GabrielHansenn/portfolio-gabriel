import type { SVGProps } from "react";

type FlagProps = SVGProps<SVGSVGElement>;

/** Bandeira do Brasil, simplificada para uso em tamanho pequeno (seletor de idioma). */
export function BrazilFlag(props: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" width={20} height={14} role="img" aria-hidden="true" {...props}>
      <rect width="20" height="14" rx="2" fill="#009C3B" />
      <path d="M10 2.2 18 7 10 11.8 2 7Z" fill="#FFDF00" />
      <circle cx="10" cy="7" r="2.6" fill="#002776" />
      <path
        d="M7.6 6.1a4.4 4.4 0 0 1 5 1.1"
        fill="none"
        stroke="#fff"
        strokeWidth="0.5"
      />
    </svg>
  );
}

/** Bandeira dos Estados Unidos, simplificada para uso em tamanho pequeno (seletor de idioma). */
export function UsaFlag(props: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" width={20} height={14} role="img" aria-hidden="true" {...props}>
      <rect width="20" height="14" rx="2" fill="#B22234" />
      <g fill="#fff">
        <rect y="1.08" width="20" height="1.08" />
        <rect y="3.23" width="20" height="1.08" />
        <rect y="5.38" width="20" height="1.08" />
        <rect y="7.54" width="20" height="1.08" />
        <rect y="9.69" width="20" height="1.08" />
        <rect y="11.85" width="20" height="1.08" />
      </g>
      <rect width="9" height="7.54" rx="1" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="1.8" cy="1.4" r="0.45" />
        <circle cx="4" cy="1.4" r="0.45" />
        <circle cx="6.2" cy="1.4" r="0.45" />
        <circle cx="2.9" cy="2.6" r="0.45" />
        <circle cx="5.1" cy="2.6" r="0.45" />
        <circle cx="1.8" cy="3.8" r="0.45" />
        <circle cx="4" cy="3.8" r="0.45" />
        <circle cx="6.2" cy="3.8" r="0.45" />
        <circle cx="2.9" cy="5" r="0.45" />
        <circle cx="5.1" cy="5" r="0.45" />
        <circle cx="1.8" cy="6.2" r="0.45" />
        <circle cx="4" cy="6.2" r="0.45" />
        <circle cx="6.2" cy="6.2" r="0.45" />
      </g>
    </svg>
  );
}
