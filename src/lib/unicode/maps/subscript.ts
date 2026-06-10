import type { CharMap } from '../transform';

// Subscript characters — partial Unicode support
// ₐ(U+2090) ₑ(U+2091) ₒ(U+2092) ₓ(U+2093) ₔ(U+2094) ₕ(U+2095) ₖ(U+2096)
// ₗ(U+2097) ₘ(U+2098) ₙ(U+2099) ₚ(U+209A) ₛ(U+209B) ₜ(U+209C)
// Digits: ₀-₉ (U+2080-U+2089)
// Missing letters pass through
export const SUBSCRIPT_MAP: CharMap = {
  'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'x': 'ₓ', 'h': 'ₕ', 'k': 'ₖ', 'l': 'ₗ',
  'm': 'ₘ', 'n': 'ₙ', 'p': 'ₚ', 's': 'ₛ', 't': 'ₜ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
};
