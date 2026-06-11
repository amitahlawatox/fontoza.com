/**
 * Client-side transform utilities for React components.
 *
 * Mirrors src/lib/unicode/transform.ts and src/lib/unicode/decorators.ts
 * but with decorators resolved by string name so they can be serialized
 * from Astro → React as plain strings.
 */

type CharMap = Record<string, string>;

// ── Core transform ────────────────────────────────────────────────────────────

function transformText(text: string, map: CharMap): string {
  return [...text].map(char => map[char] ?? char).join('');
}

// ── Decorator implementations ────────────────────────────────────────────────

const DECORATORS: Record<string, (text: string) => string> = {
  strikethrough: (text) =>
    [...text].map(c => (c === ' ' ? c : c + '̶')).join(''),

  underline: (text) =>
    [...text].map(c => (c === ' ' ? c : c + '̲')).join(''),

  doubleUnderline: (text) =>
    [...text].map(c => (c === ' ' ? c : c + '̳')).join(''),

  vaporwaveSpace: (text) => [...text].join('　'),

  hearts: (text) => `♥ ${text} ♥`,
  stars: (text) => `★ ${text} ★`,
  sparkles: (text) => `✨ ${text} ✨`,
  flowers: (text) => `✿ ${text} ✿`,
  crown: (text) => `♛ ${text} ♛`,
  fire: (text) => `🔥 ${text} 🔥`,
  moon: (text) => `🌙 ${text} 🌙`,
  music: (text) => `🎵 ${text} 🎵`,
  butterfly: (text) => `🦋 ${text} 🦋`,
  lightning: (text) => `⚡ ${text} ⚡`,
  rainbow: (text) => `🌈 ${text} 🌈`,
  diamond: (text) => `💎 ${text} 💎`,
  rose: (text) => `🌹 ${text} 🌹`,

  wavy: (text) =>
    [...text].map(c => (c === ' ' ? c : c + '̃')).join(''),

  upsideDownDecorator: (text) => [...text].reverse().join(''),
  mirroredDecorator: (text) => [...text].reverse().join(''),

  aestheticSpace: (text) => [...text].join(' '),

  // Pass-through (for circled-bold, monospace-bold, etc.)
  passthrough: (text) => text,

  // Small caps uppercase helper (used by small-caps-bold)
  uppercaseDecorator: (text) => text.toUpperCase(),

  // Zalgo — deterministic light version (uses fixed seed for SSR consistency)
  zalgoLight: (text) => applyZalgo(text, 2, 'light'),
  zalgoMedium: (text) => applyZalgo(text, 4, 'medium'),
  zalgoHeavy: (text) => applyZalgo(text, 8, 'heavy'),
};

// Simplified deterministic zalgo (uses character code as seed)
const ZALGO_UP_LIGHT = ['̍', '̎', '̄', '̅'];
const ZALGO_UP_MEDIUM = [...ZALGO_UP_LIGHT, '̿', '̑', '̆', '̐', '͒', '͗'];
const ZALGO_UP_HEAVY = [...ZALGO_UP_MEDIUM, '͑', '̇', '̈', '̊', '͂', '̓', '̈́', '͊', '͋', '͌', '̃', '̂', '̌', '͐'];

const ZALGO_DOWN_LIGHT = ['̖', '̗', '̘', '̙'];
const ZALGO_DOWN_MEDIUM = [...ZALGO_DOWN_LIGHT, '̜', '̝', '̞', '̟', '̠', '̤'];
const ZALGO_DOWN_HEAVY = [...ZALGO_DOWN_MEDIUM, '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳'];

const ZALGO_MID_LIGHT = ['̕', '̛'];
const ZALGO_MID_MEDIUM = [...ZALGO_MID_LIGHT, '̀', '́', 'น'];
const ZALGO_MID_HEAVY = [...ZALGO_MID_MEDIUM, '͡', '͢', 'ͧ', 'ͨ', 'ʹ', '͵', 'Ͷ', 'ͷ', '͸'];

function pickDet<T>(arr: T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

function applyZalgo(text: string, intensity: number, level: 'light' | 'medium' | 'heavy'): string {
  const upArr = level === 'heavy' ? ZALGO_UP_HEAVY : level === 'medium' ? ZALGO_UP_MEDIUM : ZALGO_UP_LIGHT;
  const downArr = level === 'heavy' ? ZALGO_DOWN_HEAVY : level === 'medium' ? ZALGO_DOWN_MEDIUM : ZALGO_DOWN_LIGHT;
  const midArr = level === 'heavy' ? ZALGO_MID_HEAVY : level === 'medium' ? ZALGO_MID_MEDIUM : ZALGO_MID_LIGHT;

  return [...text].map((char, i) => {
    if (char === ' ') return char;
    let result = char;
    for (let j = 0; j < intensity; j++) result += pickDet(upArr, i * 7 + j);
    for (let j = 0; j < intensity; j++) result += pickDet(downArr, i * 11 + j);
    for (let j = 0; j < Math.ceil(intensity / 2); j++) result += pickDet(midArr, i * 13 + j);
    return result;
  }).join('');
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Apply a style map + optional named decorator to input text.
 * Used by React components that receive serialized style data from Astro.
 */
export function applyStyle(
  text: string,
  map: CharMap,
  decoratorName?: string,
): string {
  if (!text) return '';
  const mapped = transformText(text, map);
  if (!decoratorName) return mapped;
  const fn = DECORATORS[decoratorName];
  return fn ? fn(mapped) : mapped;
}

/**
 * Map a DecoratorFn reference name from the registry to the string key
 * used by applyStyle. Astro pages serialize this when building style props.
 */
export function decoratorNameFromFn(fnName: string): string {
  // These match the exported names from src/lib/unicode/decorators.ts
  const map: Record<string, string> = {
    strikethrough: 'strikethrough',
    underline: 'underline',
    doubleUnderline: 'doubleUnderline',
    vaporwaveSpace: 'vaporwaveSpace',
    hearts: 'hearts',
    stars: 'stars',
    sparkles: 'sparkles',
    flowers: 'flowers',
    crown: 'crown',
    wavy: 'wavy',
    zalgoLight: 'zalgoLight',
    zalgoMedium: 'zalgoMedium',
    zalgoHeavy: 'zalgoHeavy',
    upsideDownDecorator: 'upsideDownDecorator',
    mirroredDecorator: 'mirroredDecorator',
    aestheticSpace: 'aestheticSpace',
    uppercaseDecorator: 'uppercaseDecorator',
    passthrough: 'passthrough',
  };
  return map[fnName] ?? 'passthrough';
}
