import CopyButton from './CopyButton';

interface Props {
  styleId: string;
  styleName: string;
  preview: string;
  previewFontSize?: number;
  showLink?: boolean;
  href?: string;
}

export default function StyleCard({
  styleId,
  styleName,
  preview,
  previewFontSize = 20,
  showLink = false,
  href,
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
        <span className="pointer-events-auto">
          <CopyButton text={preview} variant="icon" label={`Copy ${styleName}`} />
        </span>
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
