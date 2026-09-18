import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <Reveal className={isCentered ? "text-center" : "text-left"}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-(--color-text) sm:text-4xl ${
          isCentered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-balance text-base leading-relaxed text-(--color-text-secondary) sm:text-lg ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
