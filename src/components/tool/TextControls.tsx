import { CaseLower, CaseUpper, Minus, Plus } from 'lucide-react';

interface Props {
  text: string;
  onTextChange: (text: string) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  minSize?: number;
  maxSize?: number;
}

const buttonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 text-sm font-bold text-[var(--color-text)] transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-indigo-900/30';

export default function TextControls({
  text,
  onTextChange,
  fontSize,
  onFontSizeChange,
  minSize = 16,
  maxSize = 40,
}: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <div className="grid grid-cols-2 gap-2" aria-label="Change text case">
        <button type="button" onClick={() => onTextChange(text.toUpperCase())} className={buttonClass}>
          <CaseUpper size={18} aria-hidden="true" />
          UPPERCASE
        </button>
        <button type="button" onClick={() => onTextChange(text.toLowerCase())} className={buttonClass}>
          <CaseLower size={18} aria-hidden="true" />
          lowercase
        </button>
      </div>

      <div
        className="grid grid-cols-[44px_minmax(88px,1fr)_44px] items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        aria-label="Preview font size"
      >
        <button
          type="button"
          onClick={() => onFontSizeChange(Math.max(minSize, fontSize - 2))}
          disabled={fontSize <= minSize}
          className="flex min-h-11 items-center justify-center rounded-l-xl text-[var(--color-text)] transition-colors hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-40 dark:hover:bg-indigo-900/30"
          aria-label="Make font preview smaller"
        >
          <Minus size={20} aria-hidden="true" />
        </button>
        <span className="text-center text-sm font-bold tabular-nums text-[var(--color-text)]">
          {fontSize}px
        </span>
        <button
          type="button"
          onClick={() => onFontSizeChange(Math.min(maxSize, fontSize + 2))}
          disabled={fontSize >= maxSize}
          className="flex min-h-11 items-center justify-center rounded-r-xl text-[var(--color-text)] transition-colors hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-40 dark:hover:bg-indigo-900/30"
          aria-label="Make font preview bigger"
        >
          <Plus size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
