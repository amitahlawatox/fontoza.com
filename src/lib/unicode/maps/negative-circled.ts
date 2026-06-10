import type { CharMap } from '../transform';

// Negative Circled (filled black circle) — 🅐-🅩 (U+1F150-U+1F169) uppercase only
// Lowercase and digits pass through unchanged
export const NEGATIVE_CIRCLED_MAP: CharMap = {
  'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗',
  'I': '🅘', 'J': '🅙', 'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟',
  'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧',
  'Y': '🅨', 'Z': '🅩',
};
