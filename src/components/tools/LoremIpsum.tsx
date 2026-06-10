import { useState, useMemo } from 'react';

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
  'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
  'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
  'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
  'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'perspiciatis', 'unde',
  'omnis', 'iste', 'natus', 'error', 'voluptatem', 'accusantium', 'doloremque',
  'laudantium', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo',
  'inventore', 'veritatis', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta',
  'explicabo', 'nemo', 'ipsam', 'quia', 'voluptas', 'aspernatur', 'aut', 'odit',
  'fugit', 'consequuntur', 'magni', 'dolores', 'eos', 'ratione', 'sequi', 'nesciunt',
  'neque', 'porro', 'quisquam', 'dolorem', 'adipisci', 'velit', 'numquam',
  'eius', 'modi', 'tempora', 'incidunt', 'magnam', 'quaerat',
];

const LOREM_START = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function randomWord(seed: number): string {
  return LOREM_WORDS[seed % LOREM_WORDS.length];
}

function generateSentence(wordCount: number, index: number): string {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(randomWord((index * 13 + i * 7) % LOREM_WORDS.length));
  }
  const sentence = words.join(' ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

function generateParagraph(wordsPerPara: number, paraIndex: number, startWithLorem: boolean): string {
  if (paraIndex === 0 && startWithLorem) {
    return LOREM_START;
  }
  const sentences = Math.floor(wordsPerPara / 12) + 2;
  const wordsPerSentence = Math.floor(wordsPerPara / sentences);
  const parts: string[] = [];
  for (let s = 0; s < sentences; s++) {
    parts.push(generateSentence(wordsPerSentence, paraIndex * 100 + s));
  }
  return parts.join(' ');
}

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3);
  const [wordsPerPara, setWordsPerPara] = useState(50);
  const [startLorem, setStartLorem] = useState(true);
  const [format, setFormat] = useState<'text' | 'html' | 'markdown'>('text');
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    const paras = Array.from({ length: paragraphs }, (_, i) =>
      generateParagraph(wordsPerPara, i, startLorem)
    );
    switch (format) {
      case 'html':
        return paras.map((p) => `<p>${p}</p>`).join('\n\n');
      case 'markdown':
        return paras.join('\n\n');
      default:
        return paras.join('\n\n');
    }
  }, [paragraphs, wordsPerPara, startLorem, format]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }

  const wordCount = output.split(/\s+/).filter(Boolean).length;
  const charCount = output.length;

  return (
    <div className="w-full space-y-6">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
              Paragraphs: {paragraphs}
            </label>
            <input
              type="range"
              min={1}
              max={10}
              value={paragraphs}
              onChange={(e) => setParagraphs(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
              <span>1</span><span>10</span>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
              Words per paragraph: {wordsPerPara}
            </label>
            <input
              type="range"
              min={20}
              max={200}
              step={10}
              value={wordsPerPara}
              onChange={(e) => setWordsPerPara(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
              <span>20</span><span>200</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer">
            <input
              type="checkbox"
              checked={startLorem}
              onChange={(e) => setStartLorem(e.target.checked)}
              className="h-4 w-4 rounded accent-indigo-600"
            />
            Start with "Lorem ipsum…"
          </label>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[var(--color-text)]">Format:</span>
            {(['text', 'html', 'markdown'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  format === f
                    ? 'bg-indigo-600 text-white'
                    : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-indigo-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex gap-4 text-xs text-[var(--color-text-muted)]">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
          </div>
          <button
            onClick={copy}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            {copied ? 'Copied!' : 'Copy all'}
          </button>
        </div>
        <textarea
          readOnly
          value={output}
          rows={12}
          className="w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm leading-relaxed text-[var(--color-text)] focus:outline-none"
        />
      </div>
    </div>
  );
}
