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
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initializedRef = useRef(false);

  // On mount: restore from localStorage
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

  // Sync external value changes (e.g. parent reset)
  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value.slice(0, MAX_CHARS);
      setLocalValue(text);

      // Persist to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, text);
      } catch {
        // ignore
      }

      // Debounced propagation
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onChange(text);
      }, DEBOUNCE_MS);
    },
    [onChange],
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const charCount = localValue.length;
  const nearLimit = charCount >= MAX_CHARS * 0.9;

  return (
    <div className="relative w-full">
      <textarea
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        rows={3}
        maxLength={MAX_CHARS}
        aria-label="Input text to transform"
        style={{ fontSize: '16px', minHeight: '80px', maxHeight: '200px', resize: 'vertical' }}
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />
      <span
        aria-live="polite"
        aria-label={`${charCount} of ${MAX_CHARS} characters used`}
        className={`absolute bottom-2.5 right-3 select-none text-xs tabular-nums transition-colors ${
          nearLimit ? 'text-orange-500' : 'text-[var(--color-text-muted)]'
        }`}
      >
        {charCount} / {MAX_CHARS}
      </span>
    </div>
  );
}
