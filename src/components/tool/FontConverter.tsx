import { lazy, Suspense, useEffect, useState } from 'react';
import TextInput from './TextInput';
import StyleGrid from './StyleGrid';
import TextControls from './TextControls';

const CreatorStudio = lazy(() => import('./CreatorStudio'));

interface StyleDef {
  id: string;
  name: string;
  map: Record<string, string>;
  decorator?: string;
  category: string;
  description?: string;
  tags?: string[];
  platforms?: string[];
}

interface Props {
  styles: StyleDef[];
  showCreatorStudio?: boolean;
}

const STORAGE_KEY = 'fontoza_input';
const DEFAULT_TEXT = 'Hello World';

export default function FontConverter({ styles, showCreatorStudio = false }: Props) {
  const [fontSize, setFontSize] = useState(20);
  const [inputText, setInputText] = useState(DEFAULT_TEXT);
  const [studioOpen, setStudioOpen] = useState(false);

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
          onChange={updateInputText}
          placeholder="Type or paste text to see all font styles…"
        />
      </div>

      {/* Style grid — updates live as inputText changes */}
      <TextControls
        text={inputText}
        onTextChange={updateInputText}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
      />

      {showCreatorStudio && (studioOpen ? (
        <Suspense fallback={<div className="min-h-32 animate-pulse rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]" aria-label="Loading Creator Studio" />}>
          <CreatorStudio
            styles={styles}
            inputText={inputText}
            onTextChange={updateInputText}
          />
        </Suspense>
      ) : (
        <section className="rounded-3xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/70 via-[var(--color-bg)] to-pink-50/60 p-5 dark:border-indigo-900/60 dark:from-indigo-950/30 dark:to-pink-950/20" aria-labelledby="creator-studio-preview-heading">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-500">Optional creative workspace</p>
          <h2 id="creator-studio-preview-heading" className="mt-1 text-xl font-black text-[var(--color-text)]">Creator Studio</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">Build a profile preview or combine fonts with symbols when you need the extra controls.</p>
          <button
            type="button"
            onClick={() => setStudioOpen(true)}
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Open Creator Studio
          </button>
        </section>
      ))}

      <StyleGrid
        styles={styles}
        inputText={inputText}
        previewFontSize={fontSize}
        showLinks={true}
        basePath="/fonts"
      />
    </div>
  );
}
