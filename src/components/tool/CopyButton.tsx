import { useState, useCallback, useRef } from 'react';

interface Props {
  text: string;
  variant?: 'icon' | 'full';
  label?: string;
}

const FEEDBACK_DURATION = 1600;

async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    await navigator.clipboard.writeText(text);
    return;
  }
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.focus();
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export default function CopyButton({ text, variant = 'icon', label = 'Copy' }: Props) {
  const [copied, setCopied] = useState(false);
  const cooldownRef = useRef(false);

  const handleCopy = useCallback(async () => {
    if (cooldownRef.current || !text) return;
    cooldownRef.current = true;
    try {
      await copyToClipboard(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        cooldownRef.current = false;
      }, FEEDBACK_DURATION);
    } catch {
      cooldownRef.current = false;
    }
  }, [text]);

  if (variant === 'icon') {
    return (
      <button
        onClick={handleCopy}
        aria-label={copied ? 'Copied!' : label}
        title={copied ? 'Copied!' : label}
        disabled={!text}
        data-copy-btn
        className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed ${
          copied
            ? 'border-green-400 bg-green-50 text-green-600 scale-95 dark:bg-green-900/30 dark:text-green-400'
            : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 hover:scale-105 dark:hover:bg-indigo-900/20 active:scale-95'
        }`}
      >
        {copied ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard!' : `${label} — ${text.slice(0, 30)}${text.length > 30 ? '…' : ''}`}
      disabled={!text}
      data-copy-btn
      className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden ${
        copied
          ? 'bg-green-500 text-white scale-95'
          : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95'
      }`}
    >
      {/* Shimmer effect on hover */}
      {!copied && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
      )}
      {copied ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span>{copied ? 'Copied! ✨' : label}</span>
    </button>
  );
}
