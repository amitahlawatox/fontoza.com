import { useState, useEffect, useMemo } from 'react';
import TextInput from './TextInput';
import CopyButton from './CopyButton';
import TextControls from './TextControls';
import { applyStyle } from './utils/transform';

interface Props {
  styleId: string;
  styleName: string;
  map: Record<string, string>;
  decorator?: string;
  example: string;
}

const STORAGE_KEY = 'fontoza_input';
const RECENT_KEY = 'fontoza_recent_styles';

export default function SingleStyleConverter({ styleId, styleName, map, decorator, example }: Props) {
  const [fontSize, setFontSize] = useState(30);
  const [inputText, setInputText] = useState(example);

  // Restore saved text after hydration so the server and first client render match.
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

  const updateInputText = (text: string) => {
    setInputText(text);
    try {
      localStorage.setItem(STORAGE_KEY, text);
    } catch {
      // localStorage unavailable
    }
  };

  const outputText = useMemo(
    () => applyStyle(inputText, map, decorator),
    [inputText, map, decorator],
  );

  const outputCharCount = [...outputText].length;

  const recordRecentStyle = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      const current = Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [];
      const next = [styleId, ...current.filter((item) => item !== styleId)].slice(0, 12);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      // Storage may be disabled.
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Input */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
          Your text
        </label>
        <TextInput
          value={inputText}
          onChange={updateInputText}
          placeholder={`Type your text to convert to ${styleName}…`}
        />
      </div>

      <TextControls
        text={inputText}
        onTextChange={updateInputText}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        minSize={18}
        maxSize={48}
      />

      {/* Output preview card */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-6">
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
          className="unicode-preview mb-6 min-h-[60px] leading-relaxed text-[var(--color-text)]"
          style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', fontSize: `${fontSize}px` }}
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
          onCopied={recordRecentStyle}
        />
      </div>
    </div>
  );
}
