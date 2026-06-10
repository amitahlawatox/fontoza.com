import { useState } from 'react';

const TEMPLATES = [
  (name: string, keywords: string[], platform: string) =>
    `✨ ${name} | ${keywords.slice(0, 2).join(' & ')} enthusiast\n📍 Creating content you'll love\n👇 New post every week`,

  (name: string, keywords: string[], platform: string) =>
    `${name} 🌟\n${keywords.slice(0, 3).map((k) => `#${k.replace(/\s+/g, '')}`).join(' ')}\n💌 ${platform === 'Instagram' ? 'DM for collabs' : 'Follow for more'}`,

  (name: string, keywords: string[], _platform: string) =>
    `Hi, I'm ${name} 👋\nPassionate about ${keywords.slice(0, 2).join(', ')}\n🔗 Link below for more`,

  (name: string, keywords: string[], platform: string) =>
    `${name} • ${keywords[0] ?? 'Creator'}\n${platform} content creator\n✉️ Business: contact@example.com`,

  (name: string, keywords: string[], _platform: string) =>
    `🎯 ${keywords[0] ?? 'Content'} | ${keywords[1] ?? 'Creator'}\n👤 ${name}\n📲 New content every week`,

  (name: string, keywords: string[], _platform: string) =>
    `${name} ✦\n${keywords.map((k) => `✦ ${k}`).slice(0, 3).join('\n')}`,

  (name: string, keywords: string[], platform: string) =>
    `Not just another ${platform} account.\n${name} — ${keywords.slice(0, 2).join(', ')} content.\n📌 Save this profile.`,

  (name: string, keywords: string[], _platform: string) =>
    `💡 ${keywords[0] ?? 'Ideas'} that inspire\n🖊️ By ${name}\n↓ See latest work`,
];

export default function BioGenerator() {
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [bios, setBios] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  function generate() {
    if (!name.trim()) return;
    const kws = keywords
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean)
      .slice(0, 5);
    const generated = TEMPLATES.map((t) => t(name.trim(), kws.length ? kws : ['content', 'creator', 'lifestyle'], platform));
    setBios(generated);
  }

  async function copy(text: string, idx: number) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 2000);
    } catch { /* ignore */ }
  }

  return (
    <div className="w-full space-y-6">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
              Your name or brand *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Johnson"
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
              Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
            >
              {['Instagram', 'TikTok', 'Twitter / X', 'YouTube', 'LinkedIn'].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
            Keywords / niche (comma-separated)
          </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. fitness, travel, photography, food"
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
          />
        </div>

        <button
          onClick={generate}
          disabled={!name.trim()}
          className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Generate Bio Ideas
        </button>
      </div>

      {bios.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {bios.map((bio, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <pre className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text)] font-sans mb-3">
                {bio}
              </pre>
              <button
                onClick={() => copy(bio, i)}
                className="self-end rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                {copied === i ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}

      {!bios.length && (
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-8 text-center text-sm text-[var(--color-text-muted)]">
          Enter your name and keywords above to generate 8 bio ideas.
        </div>
      )}
    </div>
  );
}
