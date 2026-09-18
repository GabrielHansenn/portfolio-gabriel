import { useEffect, useRef, useState } from "react";
import type { Project } from "../content/portfolioData";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ExternalLinkIcon, GithubIcon } from "./icons";
import { Lightbox } from "./Lightbox";

const AUTOPLAY_INTERVAL_MS = 3500;

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const images = project.images;
  const hasMultiple = images.length > 1;
  const prefersReducedMotion = usePrefersReducedMotion();

  const [previewIndex, setPreviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!hasMultiple || isPaused || prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      setPreviewIndex((current) => (current + 1) % images.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultiple, isPaused, prefersReducedMotion, images.length]);

  return (
    <>
      <article
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) transition-all duration-300 hover:-translate-y-1.5 hover:border-(--color-accent)/60 hover:shadow-[0_20px_50px_-24px_var(--color-accent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-(--color-surface-2)">
          {images.length > 0 ? (
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label={`Ampliar imagens do projeto ${project.title}`}
              className="block h-full w-full cursor-zoom-in"
            >
              <img
                src={images[previewIndex]}
                alt={`Prévia do projeto ${project.title}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--color-surface-2),var(--color-surface))]"
            >
              <span className="font-display text-4xl font-bold text-(--color-accent)/20">
                {project.title.replace(/[[\]]/g, "").charAt(0)}
              </span>
            </div>
          )}

          <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-(--color-bg)/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-(--color-accent) backdrop-blur"
              >
                {category}
              </span>
            ))}
          </div>

          {hasMultiple && (
            <div
              className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5"
              role="group"
              aria-label="Selecionar prévia"
            >
              {images.map((image, i) => (
                <button
                  key={image}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setPreviewIndex(i);
                  }}
                  aria-label={`Mostrar prévia ${i + 1}`}
                  aria-current={i === previewIndex}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === previewIndex
                      ? "w-5 bg-(--color-accent)"
                      : "w-1.5 bg-(--color-bg)/70 hover:bg-(--color-accent)/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-(--color-text)">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-(--color-text-secondary)">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-(--color-surface-2) px-3 py-1 text-xs font-medium text-(--color-text-secondary)"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-4 border-t border-(--color-border) pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-text) transition-colors hover:text-(--color-accent)"
              >
                <ExternalLinkIcon width={16} height={16} />
                Ver projeto
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
              >
                <GithubIcon width={16} height={16} />
                Repositório
              </a>
            )}
          </div>
        </div>
      </article>

      {isLightboxOpen && images.length > 0 && (
        <Lightbox
          images={images}
          index={previewIndex}
          title={project.title}
          onClose={() => setIsLightboxOpen(false)}
          onNavigate={setPreviewIndex}
        />
      )}
    </>
  );
}
