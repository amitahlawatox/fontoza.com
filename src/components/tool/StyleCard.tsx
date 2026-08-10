import { Heart } from 'lucide-react';
import CopyButton from './CopyButton';

interface Props {
  styleId: string;
  styleName: string;
  preview: string;
  previewFontSize?: number;
  showLink?: boolean;
  href?: string;
  isFavourite?: boolean;
  onToggleFavourite?: () => void;
  onCopied?: () => void;
}

export default function StyleCard({
  styleId,
  styleName,
  preview,
  previewFontSize = 20,
  showLink = false,
  href,
  isFavourite = false,
  onToggleFavourite,
  onCopied,
}: Props) {
  return (
    <article
      data-style-id={styleId}
      className="card-hover group relative flex min-h-[132px] flex-col gap-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-all"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {showLink && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
          aria-label={`Open ${styleName} generator in a new tab`}
        />
      )}

      <div className="pointer-events-none relative z-20 flex items-center justify-between gap-2">
        <h3 className="min-w-0 flex-1 truncate text-sm font-semibold leading-tight text-[var(--color-text)]">
          {styleName}
        </h3>
        <div className="pointer-events-auto flex items-center gap-2">
          {onToggleFavourite && (
            <button
              type="button"
              onClick={onToggleFavourite}
              aria-label={isFavourite ? `Remove ${styleName} from favourites` : `Add ${styleName} to favourites`}
              aria-pressed={isFavourite}
              title={isFavourite ? 'Remove from favourites' : 'Save to favourites'}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${
                isFavourite
                  ? 'border-pink-300 bg-pink-50 text-pink-600 dark:border-pink-800 dark:bg-pink-950/40 dark:text-pink-400'
                  : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/30'
              }`}
            >
              <Heart size={15} fill={isFavourite ? 'currentColor' : 'none'} aria-hidden="true" />
            </button>
          )}
          <CopyButton
            text={preview}
            variant="icon"
            label={`Copy ${styleName}`}
            onCopied={onCopied}
          />
        </div>
      </div>

      <div
        aria-label={`Preview: ${preview}`}
        className="unicode-preview relative line-clamp-2 flex-1 leading-relaxed text-[var(--color-text)] transition-colors duration-200 group-hover:text-indigo-500/90 sm:line-clamp-none"
        style={{
          wordBreak: 'break-all',
          overflowWrap: 'anywhere',
          fontSize: `${previewFontSize}px`,
        }}
      >
        {preview || (
          <span className="text-sm italic text-[var(--color-text-muted)]">
            Start typing to see preview...
          </span>
        )}
      </div>

      {showLink && href && (
        <div className="relative mt-auto text-xs font-bold text-indigo-500">
          Tap to customise this font <span aria-hidden="true">↗</span>
        </div>
      )}
    </article>
  );
}
