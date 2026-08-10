import { useEffect, useMemo, useState } from 'react';
import { Search, Trash2, Undo2 } from 'lucide-react';
import CopyButton from './CopyButton';
import { applyStyle } from './utils/transform';

interface StyleDef {
  id: string;
  name: string;
  map: Record<string, string>;
  decorator?: string;
  category?: string;
  tags?: string[];
}

interface Props {
  styles: StyleDef[];
  inputText: string;
  onTextChange: (text: string) => void;
}

type StudioTab = 'preview' | 'symbols';
type SymbolCategory = 'all' | 'emoji' | 'symbols' | 'faces';

interface ProfilePlatform {
  id: string;
  label: string;
  field: string;
  limit: number;
  icon: string;
  accent: string;
  surface: string;
}

interface SymbolItem {
  value: string;
  label: string;
  category: Exclude<SymbolCategory, 'all'>;
  keywords: string;
}

const STYLE_KEY = 'fontoza_profile_style';
const PLATFORM_KEY = 'fontoza_profile_platform';

const PROFILE_PLATFORMS: ProfilePlatform[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    field: 'Bio',
    limit: 150,
    icon: '◎',
    accent: '#e1306c',
    surface: 'linear-gradient(135deg, rgba(245,133,41,.12), rgba(193,53,132,.12), rgba(64,93,230,.12))',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    field: 'Bio',
    limit: 80,
    icon: '♪',
    accent: '#ff3158',
    surface: 'linear-gradient(135deg, rgba(37,244,238,.12), rgba(254,44,85,.12))',
  },
  {
    id: 'discord',
    label: 'Discord',
    field: 'About Me',
    limit: 190,
    icon: '◉',
    accent: '#5865f2',
    surface: 'linear-gradient(135deg, rgba(88,101,242,.15), rgba(87,60,202,.08))',
  },
  {
    id: 'roblox',
    label: 'Roblox',
    field: 'Display name',
    limit: 20,
    icon: '◇',
    accent: '#e2231a',
    surface: 'linear-gradient(135deg, rgba(226,35,26,.12), rgba(15,23,42,.08))',
  },
];

const SYMBOLS: SymbolItem[] = [
  { value: '✨', label: 'Sparkles', category: 'emoji', keywords: 'shine aesthetic magic glow' },
  { value: '❤️', label: 'Red heart', category: 'emoji', keywords: 'love cute romance' },
  { value: '🩷', label: 'Pink heart', category: 'emoji', keywords: 'love cute pastel' },
  { value: '🔥', label: 'Fire', category: 'emoji', keywords: 'hot gaming energy' },
  { value: '🌙', label: 'Moon', category: 'emoji', keywords: 'night dark aesthetic' },
  { value: '🦋', label: 'Butterfly', category: 'emoji', keywords: 'cute nature aesthetic' },
  { value: '👑', label: 'Crown', category: 'emoji', keywords: 'king queen royal gaming' },
  { value: '⚡', label: 'Lightning', category: 'emoji', keywords: 'power gaming energy' },
  { value: '🌸', label: 'Blossom', category: 'emoji', keywords: 'flower cute pink' },
  { value: '💎', label: 'Diamond', category: 'emoji', keywords: 'luxury gem shine' },
  { value: '🌈', label: 'Rainbow', category: 'emoji', keywords: 'colour pride happy' },
  { value: '🎮', label: 'Game controller', category: 'emoji', keywords: 'gaming gamer play' },
  { value: '🎵', label: 'Music note', category: 'emoji', keywords: 'song audio tiktok' },
  { value: '🖤', label: 'Black heart', category: 'emoji', keywords: 'dark gothic love' },
  { value: '★', label: 'Filled star', category: 'symbols', keywords: 'star favourite shine' },
  { value: '☆', label: 'Open star', category: 'symbols', keywords: 'star outline aesthetic' },
  { value: '✦', label: 'Four point star', category: 'symbols', keywords: 'sparkle star shine' },
  { value: '✧', label: 'Open sparkle', category: 'symbols', keywords: 'sparkle aesthetic' },
  { value: '♡', label: 'Open heart', category: 'symbols', keywords: 'love cute heart' },
  { value: '♥', label: 'Filled heart', category: 'symbols', keywords: 'love heart' },
  { value: '☾', label: 'Crescent moon', category: 'symbols', keywords: 'moon dark night' },
  { value: '☀', label: 'Sun', category: 'symbols', keywords: 'sun bright happy' },
  { value: '⚔', label: 'Crossed swords', category: 'symbols', keywords: 'gaming battle warrior' },
  { value: '亗', label: 'Gamer mark', category: 'symbols', keywords: 'gaming name free fire bgmi' },
  { value: '乂', label: 'Gamer cross', category: 'symbols', keywords: 'gaming name clan' },
  { value: '꧁', label: 'Left ornate frame', category: 'symbols', keywords: 'gaming decoration bracket' },
  { value: '꧂', label: 'Right ornate frame', category: 'symbols', keywords: 'gaming decoration bracket' },
  { value: '『', label: 'Left corner bracket', category: 'symbols', keywords: 'frame japanese gaming' },
  { value: '』', label: 'Right corner bracket', category: 'symbols', keywords: 'frame japanese gaming' },
  { value: '•', label: 'Bullet', category: 'symbols', keywords: 'dot bio list minimal' },
  { value: '→', label: 'Right arrow', category: 'symbols', keywords: 'arrow direction bio' },
  { value: '✓', label: 'Check mark', category: 'symbols', keywords: 'check tick success' },
  { value: '∞', label: 'Infinity', category: 'symbols', keywords: 'forever math love' },
  { value: 'ツ', label: 'Katakana smile', category: 'faces', keywords: 'smile happy japanese' },
  { value: '㋡', label: 'Circle smile', category: 'faces', keywords: 'smile happy cute' },
  { value: 'シ', label: 'Simple smile', category: 'faces', keywords: 'smile japanese minimal' },
  { value: '¯\\_(ツ)_/¯', label: 'Shrug', category: 'faces', keywords: 'shrug unsure meme' },
  { value: '(｡♥‿♥｡)', label: 'In love', category: 'faces', keywords: 'love cute happy' },
  { value: '(づ｡◕‿‿◕｡)づ', label: 'Hug', category: 'faces', keywords: 'hug cute happy' },
  { value: '(¬‿¬)', label: 'Smirk', category: 'faces', keywords: 'smirk cheeky' },
  { value: '(ง’̀-’́)ง', label: 'Fight', category: 'faces', keywords: 'fight gaming strong' },
  { value: 'ʕ•ᴥ•ʔ', label: 'Bear', category: 'faces', keywords: 'bear cute animal' },
  { value: '(╥﹏╥)', label: 'Crying', category: 'faces', keywords: 'cry sad face' },
  { value: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', label: 'Celebration', category: 'faces', keywords: 'party sparkle happy' },
];

const SYMBOL_CATEGORIES: Array<{ id: SymbolCategory; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'emoji', label: 'Emoji' },
  { id: 'symbols', label: 'Symbols' },
  { id: 'faces', label: 'Faces' },
];

function readStoredValue(key: string, fallback: string): string {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export default function CreatorStudio({ styles, inputText, onTextChange }: Props) {
  const [activeTab, setActiveTab] = useState<StudioTab>('preview');
  const [selectedStyleId, setSelectedStyleId] = useState('bold-text');
  const [selectedPlatformId, setSelectedPlatformId] = useState('instagram');
  const [symbolCategory, setSymbolCategory] = useState<SymbolCategory>('all');
  const [symbolSearch, setSymbolSearch] = useState('');
  const [tray, setTray] = useState<string[]>([]);

  useEffect(() => {
    const storedStyle = readStoredValue(STYLE_KEY, 'bold-text');
    const storedPlatform = readStoredValue(PLATFORM_KEY, 'instagram');
    if (styles.some((style) => style.id === storedStyle)) setSelectedStyleId(storedStyle);
    if (PROFILE_PLATFORMS.some((platform) => platform.id === storedPlatform)) {
      setSelectedPlatformId(storedPlatform);
    }
  }, [styles]);

  const selectedStyle = styles.find((style) => style.id === selectedStyleId) || styles[0];
  const selectedPlatform =
    PROFILE_PLATFORMS.find((platform) => platform.id === selectedPlatformId) || PROFILE_PLATFORMS[0];

  const styledText = selectedStyle
    ? applyStyle(inputText, selectedStyle.map, selectedStyle.decorator)
    : inputText;
  const characterCount = [...styledText].length;
  const remaining = selectedPlatform.limit - characterCount;
  const percentUsed = Math.min(100, (characterCount / selectedPlatform.limit) * 100);
  const compatibilityRisk = /(zalgo|strikethrough|underline|wavy|upside-down|mirrored)/.test(
    selectedStyle?.id || '',
  );

  const filteredSymbols = useMemo(() => {
    const query = symbolSearch.trim().toLowerCase();
    return SYMBOLS.filter((item) => {
      const matchesCategory = symbolCategory === 'all' || item.category === symbolCategory;
      const matchesSearch =
        !query || `${item.label} ${item.keywords} ${item.value}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [symbolCategory, symbolSearch]);

  const trayText = tray.join(' ');

  const updateSelectedStyle = (styleId: string) => {
    setSelectedStyleId(styleId);
    try {
      localStorage.setItem(STYLE_KEY, styleId);
    } catch {
      // Storage may be disabled.
    }
  };

  const updateSelectedPlatform = (platformId: string) => {
    setSelectedPlatformId(platformId);
    try {
      localStorage.setItem(PLATFORM_KEY, platformId);
    } catch {
      // Storage may be disabled.
    }
  };

  const addTrayToText = () => {
    if (!trayText) return;
    onTextChange(`${inputText}${inputText ? ' ' : ''}${trayText}`.slice(0, 500));
  };

  const frameText = () => {
    if (!trayText) return;
    const closing = [...tray].reverse().join(' ');
    onTextChange(`${trayText} ${inputText} ${closing}`.trim().slice(0, 500));
  };

  return (
    <section
      className="overflow-hidden rounded-3xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/70 via-[var(--color-bg)] to-pink-50/60 shadow-sm dark:border-indigo-900/60 dark:from-indigo-950/30 dark:to-pink-950/20"
      aria-labelledby="creator-studio-heading"
    >
      <div className="border-b border-[var(--color-border)] p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-500">New</p>
            <h2 id="creator-studio-heading" className="mt-1 text-xl font-black text-[var(--color-text)]">
              Creator Studio
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Preview a profile or build a complete font-and-symbol look.
            </p>
          </div>

          <div
            className="grid grid-cols-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-1"
            role="tablist"
            aria-label="Creator Studio tools"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'preview'}
              aria-controls="profile-preview-panel"
              onClick={() => setActiveTab('preview')}
              className={`min-h-11 rounded-xl px-4 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeTab === 'preview'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-[var(--color-text-muted)] hover:text-indigo-600'
              }`}
            >
              Profile preview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'symbols'}
              aria-controls="symbol-composer-panel"
              onClick={() => setActiveTab('symbols')}
              className={`min-h-11 rounded-xl px-4 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeTab === 'symbols'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-[var(--color-text-muted)] hover:text-indigo-600'
              }`}
            >
              Symbols & faces
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'preview' ? (
        <div
          id="profile-preview-panel"
          role="tabpanel"
          className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="profile-font-style" className="mb-2 block text-sm font-bold text-[var(--color-text)]">
                Preview font
              </label>
              <select
                id="profile-font-style"
                value={selectedStyle?.id}
                onChange={(event) => updateSelectedStyle(event.target.value)}
                className="min-h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 text-[var(--color-text)] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                style={{ fontSize: '16px' }}
              >
                {styles.map((style) => (
                  <option key={style.id} value={style.id}>
                    {style.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="mb-2 block text-sm font-bold text-[var(--color-text)]">Platform</span>
              <div className="grid grid-cols-2 gap-2">
                {PROFILE_PLATFORMS.map((platform) => {
                  const active = platform.id === selectedPlatform.id;
                  return (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => updateSelectedPlatform(platform.id)}
                      aria-pressed={active}
                      className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                        active
                          ? 'border-indigo-500 bg-indigo-600 text-white'
                          : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:border-indigo-300 hover:text-indigo-600'
                      }`}
                    >
                      <span aria-hidden="true">{platform.icon}</span>
                      {platform.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`rounded-xl border p-3 text-sm ${
                compatibilityRisk
                  ? 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200'
                  : 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200'
              }`}
            >
              <strong>{compatibilityRisk ? 'Test before saving.' : 'Good readability choice.'}</strong>{' '}
              {compatibilityRisk
                ? 'Some apps may filter combining marks or unusual characters.'
                : 'Simple Unicode styles usually have the broadest support.'}
            </div>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg"
            aria-live="polite"
          >
            <div className="h-16" style={{ background: selectedPlatform.surface }} />
            <div className="-mt-8 px-4 pb-4 sm:px-5">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[var(--color-bg)] text-xl font-black text-white shadow-md"
                style={{ backgroundColor: selectedPlatform.accent }}
                aria-hidden="true"
              >
                F
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-black text-[var(--color-text)]">Your profile</p>
                  <p className="text-xs text-[var(--color-text-muted)]">@yourname · {selectedPlatform.label}</p>
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-xs font-black text-white"
                  style={{ backgroundColor: selectedPlatform.accent }}
                >
                  {selectedPlatform.field}
                </span>
              </div>

              <div
                className="unicode-preview mt-4 min-h-16 whitespace-pre-wrap break-words rounded-xl bg-[var(--color-surface)] p-3 text-lg leading-relaxed text-[var(--color-text)]"
                aria-label={`${selectedPlatform.label} ${selectedPlatform.field} preview: ${styledText}`}
              >
                {styledText || <span className="text-sm italic text-[var(--color-text-muted)]">Type above to preview your profile.</span>}
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold">
                  <span className={remaining < 0 ? 'text-red-600 dark:text-red-400' : 'text-[var(--color-text-muted)]'}>
                    {remaining < 0 ? `Shorten by ${Math.abs(remaining)}` : `${remaining} characters left`}
                  </span>
                  <span className="tabular-nums text-[var(--color-text-muted)]">
                    {characterCount}/{selectedPlatform.limit}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--color-border)]">
                  <div
                    className={`h-full rounded-full transition-all ${remaining < 0 ? 'bg-red-500' : 'bg-indigo-500'}`}
                    style={{ width: `${percentUsed}%` }}
                  />
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                Preview guidance only. Apps can change limits or filter Unicode, so check the final result before saving.
              </p>

              <div className="mt-4">
                <CopyButton text={styledText} variant="full" label={`Copy for ${selectedPlatform.label}`} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="symbol-composer-panel"
          role="tabpanel"
          className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]"
        >
          <div className="space-y-3">
            <div className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={symbolSearch}
                onChange={(event) => setSymbolSearch(event.target.value)}
                placeholder="Search hearts, gaming, cute, dark..."
                aria-label="Search symbols, emoji, and faces"
                className="min-h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-11 pr-4 text-[var(--color-text)] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {SYMBOL_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSymbolCategory(category.id)}
                  aria-pressed={symbolCategory === category.id}
                  className={`min-h-11 flex-none rounded-full border px-4 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    symbolCategory === category.id
                      ? 'border-indigo-500 bg-indigo-600 text-white'
                      : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid max-h-80 grid-cols-4 gap-2 overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3 sm:grid-cols-6">
              {filteredSymbols.map((item) => (
                <button
                  key={`${item.category}-${item.label}`}
                  type="button"
                  onClick={() => setTray((current) => [...current, item.value].slice(-20))}
                  aria-label={`Add ${item.label}`}
                  title={item.label}
                  className="flex min-h-12 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-2 text-xl transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-indigo-950/30"
                >
                  <span className="max-w-full truncate">{item.value}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              Tap up to 20 items. Your symbol tray stays on this page only.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-indigo-500">Composition tray</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{tray.length}/20 items</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTray((current) => current.slice(0, -1))}
                  disabled={tray.length === 0}
                  aria-label="Undo last symbol"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-indigo-300 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-30"
                >
                  <Undo2 size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setTray([])}
                  disabled={tray.length === 0}
                  aria-label="Clear symbol tray"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-red-300 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-30"
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className="mt-4 min-h-28 flex-1 whitespace-pre-wrap break-words rounded-xl bg-[var(--color-surface)] p-4 text-xl leading-loose text-[var(--color-text)]"
              aria-live="polite"
              aria-label={`Symbol tray: ${trayText || 'empty'}`}
            >
              {trayText || (
                <span className="text-sm italic text-[var(--color-text-muted)]">
                  Choose symbols, emoji, or faces to build your look.
                </span>
              )}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button
                type="button"
                onClick={addTrayToText}
                disabled={!trayText}
                className="min-h-11 rounded-xl border border-indigo-200 bg-indigo-50 px-3 text-sm font-bold text-indigo-700 transition-all hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-40 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300"
              >
                Add after text
              </button>
              <button
                type="button"
                onClick={frameText}
                disabled={!trayText}
                className="min-h-11 rounded-xl border border-pink-200 bg-pink-50 px-3 text-sm font-bold text-pink-700 transition-all hover:bg-pink-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:opacity-40 dark:border-pink-800 dark:bg-pink-950/30 dark:text-pink-300"
              >
                Frame my text
              </button>
            </div>

            <div className="mt-3">
              <CopyButton text={trayText} variant="full" label="Copy symbol tray" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
