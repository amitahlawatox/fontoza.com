import { useState, useMemo } from 'react';

const LIMITS: Record<string, number> = {
  'Instagram bio': 150,
  'Twitter / X': 280,
  'TikTok bio': 80,
  'YouTube title': 100,
  'Facebook post': 63206,
  'WhatsApp': 65536,
};

export default function CharacterCounter() {
  const [text, setText] = useState('');
  const [selectedLimit, setSelectedLimit] = useState('Twitter / X');

  const stats = useMemo(() => {
    const total = text.length;
    const noSpaces = text.replace(/\s/g, '').length;
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const digits = (text.match(/\d/g) || []).length;
    const spaces = (text.match(/\s/g) || []).length;
    const special = total - letters - digits - spaces;
    const limit = LIMITS[selectedLimit];
    const remaining = limit - total;
    return { total, noSpaces, letters, digits, spaces, special, limit, remaining };
  }, [text, selectedLimit]);

  const percentage = Math.min(100, (stats.total / stats.limit) * 100);
  const barColor =
    percentage >= 100
      ? 'bg-red-500'
      : percentage >= 85
      ? 'bg-orange-400'
      : 'bg-indigo-500';

  return (
    <div className="w-full space-y-6">
      {/* Platform limit selector */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
          Character limit preset
        </label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(LIMITS).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedLimit(key)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedLimit === key
                  ? 'bg-indigo-600 text-white'
                  : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-indigo-400'
              }`}
            >
              {key} ({LIMITS[key].toLocaleString()})
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="mb-1 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span>{stats.total.toLocaleString()} characters</span>
          <span className={stats.remaining < 0 ? 'font-bold text-red-500' : ''}>
            {stats.remaining >= 0 ? `${stats.remaining} remaining` : `${Math.abs(stats.remaining)} over limit`}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
          <div
            className={`h-full rounded-full transition-all duration-200 ${barColor}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {[
          { label: 'Total', value: stats.total },
          { label: 'No Spaces', value: stats.noSpaces },
          { label: 'Letters', value: stats.letters },
          { label: 'Digits', value: stats.digits },
          { label: 'Special', value: stats.special },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center"
          >
            <div className="text-2xl font-bold tabular-nums text-[var(--color-text)]">{item.value}</div>
            <div className="mt-1 text-xs text-[var(--color-text-muted)]">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Textarea */}
      <div>
        <label
          htmlFor="char-counter-input"
          className="mb-2 block text-sm font-semibold text-[var(--color-text)]"
        >
          Your text
        </label>
        <textarea
          id="char-counter-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here…"
          rows={8}
          className="w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
        />
      </div>

      {text && (
        <button
          onClick={() => setText('')}
          className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:border-red-400 hover:text-red-500"
        >
          Clear
        </button>
      )}
    </div>
  );
}
