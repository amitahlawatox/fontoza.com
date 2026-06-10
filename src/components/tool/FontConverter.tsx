import { useState, useEffect } from 'react';
import TextInput from './TextInput';
import StyleGrid from './StyleGrid';

interface StyleDef {
  id: string;
  name: string;
  map: Record<string, string>;
  decorator?: string;
  category: string;
}

interface Props {
  styles: StyleDef[];
}

const STORAGE_KEY = 'fontoza_input';
const DEFAULT_TEXT = 'Hello World';

export default function FontConverter({ styles }: Props) {
  const [inputText, setInputText] = useState<string>(() => {
    // Try to read persisted value synchronously on first render
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_TEXT;
      } catch {
        return DEFAULT_TEXT;
      }
    }
    return DEFAULT_TEXT;
  });

  // Ensure localStorage is read after hydration if SSR didn't run the initializer
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

  return (
    <div className="w-full space-y-6">
      {/* Input area */}
      <div>
        <label
          htmlFor="fontoza-input"
          className="mb-2 block text-sm font-semibold text-[var(--color-text)]"
        >
          Your text
        </label>
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder="Type or paste text to see all font styles…"
        />
      </div>

      {/* Style grid — updates live as inputText changes */}
      <StyleGrid
        styles={styles}
        inputText={inputText}
        showLinks={true}
        basePath="/fonts"
      />
    </div>
  );
}
