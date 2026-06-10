import { useState } from 'react';

type CaseType = 'upper' | 'lower' | 'title' | 'sentence' | 'alternating' | 'camel' | 'snake';

function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

function toSentenceCase(str: string): string {
  return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
}

function toAlternatingCase(str: string): string {
  return [...str]
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join('');
}

function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

function toSnakeCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

const CASES: { id: CaseType; label: string; example: string }[] = [
  { id: 'upper', label: 'UPPERCASE', example: 'HELLO WORLD' },
  { id: 'lower', label: 'lowercase', example: 'hello world' },
  { id: 'title', label: 'Title Case', example: 'Hello World' },
  { id: 'sentence', label: 'Sentence case', example: 'Hello world' },
  { id: 'alternating', label: 'aLtErNaTiNg', example: 'hElLo wOrLd' },
  { id: 'camel', label: 'camelCase', example: 'helloWorld' },
  { id: 'snake', label: 'snake_case', example: 'hello_world' },
];

function applyCase(text: string, type: CaseType): string {
  switch (type) {
    case 'upper': return text.toUpperCase();
    case 'lower': return text.toLowerCase();
    case 'title': return toTitleCase(text);
    case 'sentence': return toSentenceCase(text);
    case 'alternating': return toAlternatingCase(text);
    case 'camel': return toCamelCase(text);
    case 'snake': return toSnakeCase(text);
    default: return text;
  }
}

export default function TextCaseConverter() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState<CaseType | null>(null);

  async function handleCopy(type: CaseType) {
    const result = applyCase(input, type);
    try {
      await navigator.clipboard.writeText(result);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="w-full space-y-6">
      <div>
        <label
          htmlFor="case-input"
          className="mb-2 block text-sm font-semibold text-[var(--color-text)]"
        >
          Your text
        </label>
        <textarea
          id="case-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here…"
          rows={5}
          className="w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {CASES.map((c) => {
          const result = input ? applyCase(input, c.id) : c.example;
          const isExample = !input;
          return (
            <div
              key={c.id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {c.label}
                </span>
                <button
                  onClick={() => handleCopy(c.id)}
                  disabled={!input}
                  className="rounded-lg bg-indigo-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copied === c.id ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div
                className={`min-h-[2rem] text-sm leading-relaxed ${
                  isExample ? 'italic text-[var(--color-text-muted)]' : 'text-[var(--color-text)]'
                }`}
                style={{ wordBreak: 'break-all' }}
              >
                {result}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
