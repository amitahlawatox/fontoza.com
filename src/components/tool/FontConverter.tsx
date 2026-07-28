import { useState, useEffect } from 'react';
import TextInput from './TextInput';
import StyleGrid from './StyleGrid';
import TextControls from './TextControls';
import CreatorStudio from './CreatorStudio';

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

      {showCreatorStudio && (
        <CreatorStudio
          styles={styles}
          inputText={inputText}
          onTextChange={updateInputText}
        />
      )}

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
