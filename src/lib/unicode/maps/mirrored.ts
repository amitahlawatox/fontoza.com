import type { CharMap } from '../transform';

// Mirrored characters — Unicode mirror equivalents where they exist
// The string is reversed to appear as a mirror reflection
export const MIRRORED_MAP: CharMap = {
  'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'ꟻ', 'g': 'ϱ', 'h': 'ʜ',
  'i': 'i', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'п', 'o': 'o', 'p': 'q',
  'q': 'p', 'r': 'ɿ', 's': 'ƨ', 't': 'ƚ', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x',
  'y': 'y', 'z': 'ƹ',
  'A': 'A', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ꟻ', 'G': 'ᘜ', 'H': 'H',
  'I': 'I', 'J': 'Ⴑ', 'K': 'ᴋ', 'L': '⅃', 'M': 'M', 'N': 'И', 'O': 'O', 'P': 'ꟼ',
  'Q': 'Q', 'R': 'Я', 'S': 'Ƨ', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
  'Y': 'Y', 'Z': 'Z',
  '0': '0', '1': '1', '2': '2', '3': 'Ɛ', '4': '4', '5': '5', '6': '6', '7': '7',
  '8': '8', '9': '9',
  '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{',
  '<': '>', '>': '<',
};
