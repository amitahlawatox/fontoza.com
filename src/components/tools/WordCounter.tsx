import { useState, useMemo } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const sentences = text.trim() === '' ? 0 : (text.match(/[^.!?]*[.!?]+/g) || []).length || (text.trim() ? 1 : 0);
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || (text.trim() ? 1 : 0);
    const readingTime = Math.max(1, Math.ceil(words / 200));
    return { chars, charsNoSpaces, words, sentences, paragraphs, readingTime };
  }, [text]);

  const statItems = [
    { label: 'Words', value: stats.words, color: 'text-indigo-600 dark:text-indigo-400' },
    { label: 'Characters', value: stats.chars, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'No Spaces', value: stats.charsNoSpaces, color: 'text-pink-600 dark:text-pink-400' },
    { label: 'Sentences', value: stats.sentences, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Paragraphs', value: stats.paragraphs, color: 'text-green-600 dark:text-green-400' },
    { label: 'Read Time', value: `${stats.readingTime} min`, color: 'text-orange-600 dark:text-orange-400' },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {statItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center"
          >
            <div className={`text-2xl font-bold tabular-nums ${item.color}`}>{item.value}</div>
            <div className="mt-1 text-xs text-[var(--color-text-muted)]">{item.label}</div>
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="word-counter-input"
          className="mb-2 block text-sm font-semibold text-[var(--color-text)]"
        >
          Your text
        </label>
        <textarea
          id="word-counter-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here to count words, characters, sentences, and more…"
          rows={10}
          className="w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
        />
      </div>

      {text && (
        <button
          onClick={() => setText('')}
          className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:border-red-400 hover:text-red-500"
        >
          Clear text
        </button>
      )}
    </div>
  );
}
