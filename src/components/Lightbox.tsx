import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { CloseIcon } from "./icons";

interface LightboxProps {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function Lightbox({ images, index, title, onClose, onNavigate }: LightboxProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight" && hasMultiple) {
        onNavigate((index + 1) % images.length);
      } else if (event.key === "ArrowLeft" && hasMultiple) {
        onNavigate((index - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasMultiple, images.length, index, onClose, onNavigate]);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.lightbox.galleryAriaLabel(title)}
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-(--color-bg)/95 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.lightbox.closeAriaLabel}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent) sm:right-6 sm:top-6"
      >
        <CloseIcon />
      </button>

      <div className="relative flex w-full max-w-5xl flex-1 items-center justify-center">
        {hasMultiple && (
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            aria-label={t.lightbox.prevAriaLabel}
            className="absolute left-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--color-border-strong) bg-(--color-bg)/80 text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent) sm:-left-4"
          >
            <span aria-hidden="true">‹</span>
          </button>
        )}

        <img
          src={images[index]}
          alt={t.lightbox.imageAlt(title, index + 1, images.length)}
          className="max-h-[75vh] w-auto max-w-full rounded-xl border border-(--color-border) object-contain"
        />

        {hasMultiple && (
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % images.length)}
            aria-label={t.lightbox.nextAriaLabel}
            className="absolute right-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--color-border-strong) bg-(--color-bg)/80 text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent) sm:-right-4"
          >
            <span aria-hidden="true">›</span>
          </button>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-sm text-(--color-text-muted)">
            {index + 1} / {images.length}
          </p>
          <div
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label={t.lightbox.selectImageAriaLabel}
          >
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={() => onNavigate(i)}
                aria-label={t.lightbox.goToImageAriaLabel(i + 1)}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  i === index ? "w-6 bg-(--color-accent)" : "bg-(--color-border-strong) hover:bg-(--color-text-muted)"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
