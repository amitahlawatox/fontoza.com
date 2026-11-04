import { useMemo, useState } from 'react';
import CopyButton from '../tool/CopyButton';
import type { SymbolItem } from '../../lib/symbols';

interface Props {
  items: SymbolItem[];
  searchPlaceholder?: string;
}

export default function SymbolExplorer({
  items,
  searchPlaceholder = 'Search by name, colour, or style',
}: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(items.map(item => item.category))], [items]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return items.filter(item => {
      const matchesCategory = category === 'All' || item.category === category;
      const searchable = [item.symbol, item.name, item.category, ...item.keywords].join(' ').toLocaleLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, items, query]);

  return (
    <section aria-labelledby="symbol-explorer-title" className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-xl shadow-indigo-500/5 sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="symbol-explorer-title" className="text-xl font-black text-[var(--color-text)] sm:text-2xl">
            Find and copy a symbol
          </h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">Tap any copy button to save the symbol to your clipboard.</p>
        </div>
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'symbol' : 'symbols'}
        </p>
      </div>

      <label className="block">
        <span className="sr-only">Search symbols</span>
        <div className="relative">
          <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="min-h-12 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3 pl-11 pr-4 text-base text-[var(--color-text)] outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </label>

      <div className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-2" aria-label="Filter symbols by category">
        {categories.map(value => (
          <button
            type="button"
            key={value}
            onClick={() => setCategory(value)}
            aria-pressed={category === value}
            className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              category === value
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-indigo-400 hover:text-indigo-600'
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4" role="list">
          {filtered.map((item, index) => (
            <article key={`${item.symbol}-${item.name}-${index}`} className="group flex min-h-36 flex-col items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-center transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10" role="listitem">
              <div>
                <div className="flex min-h-14 items-center justify-center text-4xl leading-none" aria-hidden="true">{item.symbol}</div>
                <h3 className="mt-2 line-clamp-2 text-xs font-semibold leading-snug text-[var(--color-text-muted)]">{item.name}</h3>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <CopyButton text={item.symbol} label={`Copy ${item.name}`} />
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Copy</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-10 text-center">
          <p className="font-bold text-[var(--color-text)]">No matching symbols</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">Try a broader search or choose All.</p>
          <button type="button" onClick={() => { setQuery(''); setCategory('All'); }} className="mt-4 min-h-11 rounded-xl bg-indigo-600 px-5 py-2 text-sm font-bold text-white">
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
