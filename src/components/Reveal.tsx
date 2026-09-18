import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
