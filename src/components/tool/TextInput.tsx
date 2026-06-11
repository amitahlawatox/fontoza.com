import { useEffect, useRef, useState, useCallback } from 'react';

interface Props {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

const MAX_CHARS = 500;
const DEBOUNCE_MS = 50;
const STORAGE_KEY = 'fontoza_input';

export default function TextInput({
  value,
  onChange,
  placeholder = 'Type or paste your text here…',
}: Props) {
  const [localValue, setLocalValue] = useState(value);
  const [focused, setFocused] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved !== value) {
        setLocalValue(saved);
        onChange(saved);
      }
    } catch {
      // localStorage unavailable
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (value !== localValue) setLocalValue(value);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value.slice(0, MAX_CHARS);
      setLocalValue(text);
      try { localStorage.setItem(STORAGE_KEY, text); } catch { /* ignore */ }
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => onChange(text), DEBOUNCE_MS);
    },
    [onChange],
  );

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  const charCount = localValue.length;
  const nearLimit = charCount >= MAX_CHARS * 0.9;
  const pct = charCount / MAX_CHARS;

  return (
    <div className="relative w-full">
      {/* Glow border effect when focused */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
          focused ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ boxShadow: '0 0 0 3px rgba(99,102,241,0.2), 0 0 20px rgba(99,102,241,0.1)' }}
        aria-hidden="true"
      />

      <textarea
        value={localValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        rows={3}
        maxLength={MAX_CHARS}
        aria-label="Input text to transform"
        style={{ fontSize: '16px', minHeight: '80px', maxHeight: '200px', resize: 'vertical' }}
        className="relative w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3.5 text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-indigo-500"
      />

      {/* Character count with animated progress bar */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2" aria-live="polite">
        {/* Mini progress ring */}
        <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0" aria-hidden="true">
          <circle cx="8" cy="8" r="6" fill="none" stroke="var(--color-border)" strokeWidth="2" />
          <circle
            cx="8" cy="8" r="6"
            fill="none"
            stroke={nearLimit ? '#f97316' : '#6366f1'}
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 6}`}
            strokeDashoffset={`${2 * Math.PI * 6 * (1 - pct)}`}
            strokeLinecap="round"
            transform="rotate(-90 8 8)"
            style={{ transition: 'stroke-dashoffset 0.2s ease, stroke 0.2s ease' }}
          />
        </svg>
        <span
          aria-label={`${charCount} of ${MAX_CHARS} characters used`}
          className={`select-none text-xs tabular-nums transition-colors ${
            nearLimit ? 'text-orange-500 font-semibold' : 'text-[var(--color-text-muted)]'
          }`}
        >
          {charCount}/{MAX_CHARS}
        </span>
      </div>
    </div>
  );
}
