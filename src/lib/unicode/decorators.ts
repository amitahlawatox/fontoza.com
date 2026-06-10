import type { DecoratorFn } from './transform';

// Combining diacritics for strikethrough (U+0336)
export const strikethrough: DecoratorFn = (text: string): string => {
  return [...text].map(char => (char === ' ' ? char : char + '̶')).join('');
};

// Combining diacritics for underline (U+0332)
export const underline: DecoratorFn = (text: string): string => {
  return [...text].map(char => (char === ' ' ? char : char + '̲')).join('');
};

// Double underline (U+0333)
export const doubleUnderline: DecoratorFn = (text: string): string => {
  return [...text].map(char => (char === ' ' ? char : char + '̳')).join('');
};

// Zalgo combining diacritics arrays
const ZALGO_UP_LIGHT = ['̍', '̎', '̄', '̅'];
const ZALGO_UP_MEDIUM = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗'];
const ZALGO_UP_HEAVY = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈́', '͊', '͋', '͌', '̃', '̂', '̌', '͐'];

const ZALGO_DOWN_LIGHT = ['̖', '̗', '̘', '̙'];
const ZALGO_DOWN_MEDIUM = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤'];
const ZALGO_DOWN_HEAVY = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳'];

const ZALGO_MID_LIGHT = ['̕', '̛'];
const ZALGO_MID_MEDIUM = ['̕', '̛', '̀', '́', '͘'];
const ZALGO_MID_HEAVY = ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '̷', '̸'];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function zalgoChar(char: string, upArr: string[], downArr: string[], midArr: string[], intensity: number): string {
  if (char === ' ') return char;
  let result = char;
  for (let i = 0; i < intensity; i++) result += rand(upArr);
  for (let i = 0; i < intensity; i++) result += rand(downArr);
  for (let i = 0; i < Math.ceil(intensity / 2); i++) result += rand(midArr);
  return result;
}

export const zalgoLight: DecoratorFn = (text: string): string =>
  [...text].map(c => zalgoChar(c, ZALGO_UP_LIGHT, ZALGO_DOWN_LIGHT, ZALGO_MID_LIGHT, 2)).join('');

export const zalgoMedium: DecoratorFn = (text: string): string =>
  [...text].map(c => zalgoChar(c, ZALGO_UP_MEDIUM, ZALGO_DOWN_MEDIUM, ZALGO_MID_MEDIUM, 4)).join('');

export const zalgoHeavy: DecoratorFn = (text: string): string =>
  [...text].map(c => zalgoChar(c, ZALGO_UP_HEAVY, ZALGO_DOWN_HEAVY, ZALGO_MID_HEAVY, 8)).join('');

// Vaporwave: full-width space between characters
export const vaporwaveSpace: DecoratorFn = (text: string): string => {
  return [...text].join('　');
};

// Hearts decorator
export const hearts: DecoratorFn = (text: string): string => `♥ ${text} ♥`;

// Stars decorator
export const stars: DecoratorFn = (text: string): string => `★ ${text} ★`;

// Sparkles decorator
export const sparkles: DecoratorFn = (text: string): string => `✨ ${text} ✨`;

// Flower decorator
export const flowers: DecoratorFn = (text: string): string => `✿ ${text} ✿`;

// Crown decorator
export const crown: DecoratorFn = (text: string): string => `♛ ${text} ♛`;

// Bubble wrap: each char surrounded by dots
export const bubbles: DecoratorFn = (text: string): string =>
  [...text].map(c => (c === ' ' ? '  ' : `·${c}·`)).join('');

// Wave text: alternate chars with combining tilde above
export const wavy: DecoratorFn = (text: string): string =>
  [...text].map(c => (c === ' ' ? c : c + '̃')).join('');
