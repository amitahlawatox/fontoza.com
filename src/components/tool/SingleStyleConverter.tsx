import { useState, useEffect, useMemo } from 'react';
import TextInput from './TextInput';
import CopyButton from './CopyButton';
import { applyStyle } from './utils/transform';

interface Props {
  styleName: string;
  map: Record<string, string>;
  decorator?: string;
  example: string;
}

const STORAGE_KEY = 'fontoza_input';

export default function SingleStyleConverter({ styleName, map, decorator, example }: Props) {
  const [inputText, setInputText] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(STORAGE_KEY) || example;
      } catch {
        return example;
      }
    }
    return example;
  });

  // Hydration sync
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved !== inputText) {
        setInputText(saved);
      }
    } catch {
      // ignore
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const outputText = useMemo(
    () => applyStyle(inputText, map, decorator),
    [inputText, map, decorator],
  );

  const outputCharCount = [...outputText].length;

  return (
    <div className="w-full space-y-6">
      {/* Input */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
          Your text
        </label>
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder={`Type your text to convert to ${styleName}…`}
        />
      </div>

      {/* Output preview card */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
            {styleName}
          </h2>
          <span className="text-xs tabular-nums text-[var(--color-text-muted)]">
            {outputCharCount} chars
          </span>
        </div>

        {/* Large preview */}
        <div
          aria-label={`${styleName} output: ${outputText}`}
          aria-live="polite"
          className="unicode-preview mb-6 min-h-[60px] text-2xl leading-relaxed text-[var(--color-text)] sm:text-3xl"
          style={{ wordBreak: 'break-all', overflowWrap: 'anywhere' }}
        >
          {outputText || (
            <span className="text-base text-[var(--color-text-muted)] italic">
              Start typing above to see your {styleName} preview…
            </span>
          )}
        </div>

        {/* Full copy button */}
        <CopyButton
          text={outputText}
          variant="full"
          label={`Copy ${styleName}`}
        />
      </div>
    </div>
  );
}
