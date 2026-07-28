import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import StyleCard from './StyleCard';
import { applyStyle } from './utils/transform';

interface StyleDef {
  id: string;
  name: string;
  map: Record<string, string>;
  decorator?: string;
  category?: string;
  description?: string;
  tags?: string[];
  platforms?: string[];
}

interface Props {
  styles: StyleDef[];
  inputText: string;
  previewFontSize?: number;
  showLinks?: boolean;
  basePath?: string;
}

type SmartFilter =
  | 'all'
  | 'favourites'
  | 'recent'
  | 'instagram'
  | 'tiktok'
  | 'gaming'
  | 'cute'
  | 'dark'
  | 'minimal';

const FAVOURITES_KEY = 'fontoza_favourite_styles';
const RECENT_KEY = 'fontoza_recent_styles';
const INITIAL_VISIBLE = 24;
const LOAD_MORE_COUNT = 24;

const SMART_FILTERS: Array<{ id: SmartFilter; label: string; icon: string }> = [
  { id: 'all', label: 'All', icon: '✦' },
  { id: 'favourites', label: 'Favourites', icon: '♥' },
  { id: 'recent', label: 'Recent', icon: '↺' },
  { id: 'instagram', label: 'Instagram', icon: '◎' },
  { id: 'tiktok', label: 'TikTok', icon: '♪' },
  { id: 'gaming', label: 'Gaming', icon: '🎮' },
  { id: 'cute', label: 'Cute', icon: '♡' },
  { id: 'dark', label: 'Dark', icon: '☾' },
  { id: 'minimal', label: 'Minimal', icon: '—' },
];

function readStoredList(key: string): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function storeList(key: string, value: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be disabled; the current session still works.
  }
}

function styleSearchText(style: StyleDef): string {
  return [
    style.name,
    style.id,
    style.category,
    style.description,
    ...(style.tags || []),
    ...(style.platforms || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function matchesSmartFilter(
  style: StyleDef,
  filter: SmartFilter,
  favourites: string[],
  recent: string[],
): boolean {
  if (filter === 'all') return true;
  if (filter === 'favourites') return favourites.includes(style.id);
  if (filter === 'recent') return recent.includes(style.id);
  if (filter === 'instagram' || filter === 'tiktok') {
    return style.platforms?.includes(filter) ?? false;
  }

  const terms = styleSearchText(style);
  if (filter === 'gaming') {
    return /(gothic|bold|crown|fire|lightning|monospace|circled|squared|discord|zalgo)/.test(terms);
  }
  if (filter === 'cute') {
    return /(cute|heart|sparkle|flower|butterfly|cursive|circle|aesthetic)/.test(terms);
  }
  if (filter === 'dark') {
    return /(dark|gothic|fraktur|black|zalgo|glitch|strikethrough)/.test(terms);
  }
  return /(clean|minimal|sans|monospace|small caps|italic|professional)/.test(terms);
}

export default function StyleGrid({
  styles,
  inputText,
  previewFontSize = 20,
  showLinks = false,
  basePath = '/fonts',
}: Props) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<SmartFilter>('all');
  const [favourites, setFavourites] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setFavourites(readStoredList(FAVOURITES_KEY));
    setRecent(readStoredList(RECENT_KEY));
  }, []);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [search, activeFilter]);

  const filteredStyles = useMemo(() => {
    const query = search.trim().toLowerCase();
    const matching = styles.filter((style) => {
      const matchesSearch = !query || styleSearchText(style).includes(query);
      return matchesSearch && matchesSmartFilter(style, activeFilter, favourites, recent);
    });

    if (activeFilter === 'recent') {
      return [...matching].sort((a, b) => recent.indexOf(a.id) - recent.indexOf(b.id));
    }
    if (activeFilter === 'favourites') {
      return [...matching].sort((a, b) => favourites.indexOf(a.id) - favourites.indexOf(b.id));
    }
    return matching;
  }, [styles, search, activeFilter, favourites, recent]);

  const visibleStyles = filteredStyles.slice(0, visibleCount);
  const remainingCount = Math.max(0, filteredStyles.length - visibleStyles.length);

  const toggleFavourite = (styleId: string) => {
    setFavourites((current) => {
      const next = current.includes(styleId)
        ? current.filter((id) => id !== styleId)
        : [styleId, ...current];
      storeList(FAVOURITES_KEY, next);
      return next;
    });
  };

  const recordRecent = (styleId: string) => {
    setRecent((current) => {
      const next = [styleId, ...current.filter((id) => id !== styleId)].slice(0, 12);
      storeList(RECENT_KEY, next);
      return next;
    });
  };

  const clearFilters = () => {
    setSearch('');
    setActiveFilter('all');
  };

  const emptyMessage =
    activeFilter === 'favourites'
      ? 'Tap the heart on any font to save it here.'
      : activeFilter === 'recent'
        ? 'Copied fonts will appear here for quick reuse.'
        : `No styles match “${search || SMART_FILTERS.find((filter) => filter.id === activeFilter)?.label}”.`;

  return (
    <section className="w-full space-y-4" aria-labelledby="font-browser-heading">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">Font finder</p>
          <h2 id="font-browser-heading" className="mt-1 text-lg font-black text-[var(--color-text)]">
            Find your style
          </h2>
        </div>
        <span className="text-xs font-semibold tabular-nums text-[var(--color-text-muted)]" aria-live="polite">
          {filteredStyles.length} {filteredStyles.length === 1 ? 'match' : 'matches'}
        </span>
      </div>

      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
          aria-hidden="true"
        />
        <input
          id="font-style-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search cursive, cute, gaming, bold..."
          aria-label="Search font styles"
          className="min-h-12 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-11 pr-4 text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          style={{ fontSize: '16px' }}
        />
      </div>

      <div
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Smart font filters"
      >
        {SMART_FILTERS.map((filter) => {
          const active = filter.id === activeFilter;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={active}
              className={`inline-flex min-h-11 flex-none items-center gap-2 rounded-full border px-4 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                active
                  ? 'border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              <span aria-hidden="true">{filter.icon}</span>
              {filter.label}
            </button>
          );
        })}
      </div>

      {visibleStyles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleStyles.map((style) => {
              const preview = applyStyle(inputText, style.map, style.decorator);
              return (
                <StyleCard
                  key={style.id}
                  styleId={style.id}
                  styleName={style.name}
                  preview={preview}
                  previewFontSize={previewFontSize}
                  showLink={showLinks}
                  href={showLinks ? `${basePath}/${style.id}/` : undefined}
                  isFavourite={favourites.includes(style.id)}
                  onToggleFavourite={() => toggleFavourite(style.id)}
                  onCopied={() => recordRecent(style.id)}
                />
              );
            })}
          </div>

          {remainingCount > 0 && (
            <div className="flex flex-col items-center gap-2 pt-2">
              <p className="text-xs text-[var(--color-text-muted)]">
                Showing {visibleStyles.length} of {filteredStyles.length}
              </p>
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-5 text-sm font-bold text-indigo-700 transition-all hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
              >
                Show more fonts ({remainingCount} left)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-10 text-center">
          <Search size={30} className="text-[var(--color-text-muted)] opacity-40" aria-hidden="true" />
          <p className="max-w-sm text-sm font-semibold text-[var(--color-text-muted)]">{emptyMessage}</p>
          <button
            type="button"
            onClick={clearFilters}
            className="min-h-11 rounded-xl px-4 text-sm font-bold text-indigo-500 underline underline-offset-4 hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Show all fonts
          </button>
        </div>
      )}
    </section>
  );
}
