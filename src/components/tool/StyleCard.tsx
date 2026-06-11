import CopyButton from './CopyButton';

interface Props {
  styleId: string;
  styleName: string;
  preview: string;
  showLink?: boolean;
  href?: string;
}

export default function StyleCard({
  styleId,
  styleName,
  preview,
  showLink = false,
  href,
}: Props) {
  return (
    <article
      data-style-id={styleId}
      className="card-hover group relative flex min-h-[110px] flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-all overflow-hidden"
    >
      {/* Glow overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Header: style name + copy button */}
      <div className="relative flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-[var(--color-text)] leading-tight flex-1 min-w-0">
          {showLink && href ? (
            <a
              href={href}
              className="inline-flex items-center gap-1.5 transition-all hover:text-indigo-500 group/link"
            >
              <span className="truncate">{styleName}</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 opacity-0 transition-all duration-200 group-hover/link:opacity-100 translate-x-0 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ) : (
            <span className="truncate block">{styleName}</span>
          )}
        </h3>

        <CopyButton text={preview} variant="icon" label={`Copy ${styleName}`} />
      </div>

      {/* Preview text */}
      <div
        aria-label={`Preview: ${preview}`}
        className="unicode-preview relative line-clamp-2 flex-1 text-base leading-relaxed text-[var(--color-text)] sm:line-clamp-none transition-all duration-200 group-hover:text-indigo-500/90"
        style={{ wordBreak: 'break-all', overflowWrap: 'anywhere' }}
      >
        {preview || (
          <span className="text-[var(--color-text-muted)] italic text-sm">
            Start typing to see preview…
          </span>
        )}
      </div>
    </article>
  );
}
