import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import StyleCard from './StyleCard';
import { applyStyle } from './utils/transform';

interface StyleDef {
  id: string;
  name: string;
  map: Record<string, string>;
  decorator?: string;
  category?: string;
}

interface Props {
  styles: StyleDef[];
  inputText: string;
  showLinks?: boolean;
  basePath?: string;
}

export default function StyleGrid({
  styles,
  inputText,
  showLinks = false,
  basePath = '/fonts',
}: Props) {
  const [search, setSearch] = useState('');

  const filteredStyles = useMemo(() => {
    if (!search.trim()) return styles;
    const q = search.toLowerCase();
    return styles.filter(s => s.name.toLowerCase().includes(q));
  }, [styles, search]);

  return (
    <div className="w-full space-y-4">
      {/* Search filter */}
      <div className="relative">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
          aria-hidden="true"
        />
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Filter styles…"
          aria-label="Filter font styles"
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          style={{ fontSize: '16px' }}
        />
      </div>

      {/* Grid */}
      {filteredStyles.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStyles.map(style => {
            const preview = applyStyle(inputText, style.map, style.decorator);
            return (
              <StyleCard
                key={style.id}
                styleId={style.id}
                styleName={style.name}
                preview={preview}
                showLink={showLinks}
                href={showLinks ? `${basePath}/${style.id}` : undefined}
              />
            );
          })}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-12 text-center">
          <Search size={32} className="text-[var(--color-text-muted)] opacity-40" aria-hidden="true" />
          <p className="text-sm font-medium text-[var(--color-text-muted)]">
            No styles match &ldquo;{search}&rdquo;
          </p>
          <button
            onClick={() => setSearch('')}
            className="text-xs text-indigo-500 underline underline-offset-2 hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}
