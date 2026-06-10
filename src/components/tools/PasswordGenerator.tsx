import { useState, useCallback } from 'react';

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword(
  length: number,
  useUpper: boolean,
  useLower: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string {
  let charset = '';
  const required: string[] = [];

  if (useUpper) { charset += UPPERCASE; required.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)]); }
  if (useLower) { charset += LOWERCASE; required.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)]); }
  if (useNumbers) { charset += NUMBERS; required.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]); }
  if (useSymbols) { charset += SYMBOLS; required.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]); }

  if (!charset) return '';

  const array = new Uint32Array(length);
  crypto.getRandomValues(array);

  const passwordChars = Array.from(array).map((n) => charset[n % charset.length]);

  // Inject required characters at random positions
  required.forEach((char, i) => {
    const pos = i % length;
    passwordChars[pos] = char;
  });

  // Shuffle
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join('');
}

function getStrength(password: string): { label: string; color: string; width: string } {
  if (!password) return { label: '', color: '', width: '0%' };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: 'Weak', color: 'bg-red-500', width: '25%' };
  if (score <= 4) return { label: 'Fair', color: 'bg-orange-400', width: '50%' };
  if (score <= 5) return { label: 'Good', color: 'bg-yellow-400', width: '70%' };
  return { label: 'Strong', color: 'bg-green-500', width: '100%' };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(1);
  const [passwords, setPasswords] = useState<string[]>([]);

  const generate = useCallback(() => {
    const generated = Array.from({ length: count }, () =>
      generatePassword(length, useUpper, useLower, useNumbers, useSymbols)
    );
    setPasswords(generated);
    setPassword(generated[0] ?? '');
    setCopied(false);
  }, [length, useUpper, useLower, useNumbers, useSymbols, count]);

  async function copyPassword(pw: string) {
    try {
      await navigator.clipboard.writeText(pw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }

  const strength = getStrength(password);
  const anySelected = useUpper || useLower || useNumbers || useSymbols;

  return (
    <div className="w-full space-y-6">
      {/* Options */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-5">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm font-semibold text-[var(--color-text)]">
            <span>Password length: {length}</span>
          </div>
          <input
            type="range"
            min={8}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
            <span>8</span>
            <span>64</span>
          </div>
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between text-sm font-semibold text-[var(--color-text)]">
            <span>Generate {count} password{count > 1 ? 's' : ''}</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Uppercase (A–Z)', value: useUpper, set: setUseUpper },
            { label: 'Lowercase (a–z)', value: useLower, set: setUseLower },
            { label: 'Numbers (0–9)', value: useNumbers, set: setUseNumbers },
            { label: 'Symbols (!@#…)', value: useSymbols, set: setUseSymbols },
          ].map((opt) => (
            <label
              key={opt.label}
              className="flex cursor-pointer items-center gap-2 text-sm text-[var(--color-text)]"
            >
              <input
                type="checkbox"
                checked={opt.value}
                onChange={(e) => opt.set(e.target.checked)}
                className="h-4 w-4 rounded accent-indigo-600"
              />
              {opt.label}
            </label>
          ))}
        </div>

        <button
          onClick={generate}
          disabled={!anySelected}
          className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Generate Password{count > 1 ? 's' : ''}
        </button>
      </div>

      {/* Results */}
      {passwords.length > 0 && (
        <div className="space-y-3">
          {passwords.map((pw, i) => {
            const s = getStrength(pw);
            return (
              <div
                key={i}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <div className="mb-2 flex items-center gap-3">
                  <code
                    className="flex-1 overflow-x-auto rounded-lg bg-[var(--color-bg)] px-3 py-2 font-mono text-sm tracking-wide text-[var(--color-text)]"
                    style={{ wordBreak: 'break-all' }}
                  >
                    {pw}
                  </code>
                  <button
                    onClick={() => copyPassword(pw)}
                    className="flex-shrink-0 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700"
                  >
                    {copied && passwords[0] === pw ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-border)]">
                    <div className={`h-full rounded-full transition-all ${s.color}`} style={{ width: s.width }} />
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!passwords.length && (
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-8 text-center text-sm text-[var(--color-text-muted)]">
          Configure your options above and click Generate to create secure passwords.
        </div>
      )}
    </div>
  );
}
