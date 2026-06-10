import { useState, useCallback, useRef } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  text: string;
  variant?: 'icon' | 'full';
  label?: string;
}

const FEEDBACK_DURATION = 1500;

async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    await navigator.clipboard.writeText(text);
    return;
  }
  // execCommand fallback for older browsers / iOS
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
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] transition-all hover:border-indigo-400 hover:text-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        {copied ? (
          <Check size={14} className="text-green-500" aria-hidden="true" />
        ) : (
          <Copy size={14} aria-hidden="true" />
        )}
      </button>
    );
  }

  // full variant
  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard!' : `${label} — ${text.slice(0, 30)}${text.length > 30 ? '…' : ''}`}
      disabled={!text}
      className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
      }`}
    >
      {copied ? (
        <Check size={16} aria-hidden="true" />
      ) : (
        <Copy size={16} aria-hidden="true" />
      )}
      <span>{copied ? 'Copied!' : label}</span>
    </button>
  );
}
