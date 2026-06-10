import { ArrowRight } from 'lucide-react';
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
      className="card-hover group flex min-h-[100px] flex-col gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-all"
    >
      {/* Header: style name + optional link */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-[var(--color-text)] leading-tight">
          {showLink && href ? (
            <a
              href={href}
              className="inline-flex items-center gap-1 transition-colors hover:text-indigo-500"
            >
              {styleName}
              <ArrowRight
                size={12}
                className="opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          ) : (
            styleName
          )}
        </h3>

        <CopyButton text={preview} variant="icon" label={`Copy ${styleName}`} />
      </div>

      {/* Preview text */}
      <div
        aria-label={`Preview: ${preview}`}
        className="unicode-preview line-clamp-2 flex-1 text-base leading-relaxed text-[var(--color-text)] sm:line-clamp-none"
        style={{ wordBreak: 'break-all', overflowWrap: 'anywhere' }}
      >
        {preview || <span className="text-[var(--color-text-muted)] italic text-sm">Start typing to see preview…</span>}
      </div>
    </article>
  );
}
