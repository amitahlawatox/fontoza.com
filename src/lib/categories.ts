export interface CategoryDefinition {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  styleIds: string[];
  icon: string;
}

export const CATEGORIES: CategoryDefinition[] = [
  {
    id: 'script-fonts',
    name: 'Script Fonts',
    description: 'Elegant cursive and calligraphic styles.',
    longDescription:
      'Script fonts include cursive, calligraphic, and handwriting-inspired Unicode styles drawn from the Mathematical Script and Fraktur blocks. These styles are popular for Instagram bios, aesthetic posts, and any content that calls for elegance or drama. They copy and paste perfectly into any social media platform that supports Unicode.',
    styleIds: [
      'cursive-font',
      'bold-cursive-font',
      'italic-font',
      'bold-italic-font',
      'gothic-font',
      'bold-gothic-font',
      'cursive-underline',
      'gothic-bold-underline',
      'gothic-strikethrough',
      'cursive-bold-strikethrough',
    ],
    icon: '✒️',
  },
  {
    id: 'decorative-fonts',
    name: 'Decorative Fonts',
    description: 'Unique ornamental character styles for standing out.',
    longDescription:
      'Decorative fonts pull from Unicode mathematical character sets, symbol blocks, and letterform variants to create visually striking text. Styles like Double-Struck, Monospace, and Sans-Serif give your text a personality that regular characters simply cannot. These are ideal for usernames, display text, and social media bios where differentiation matters.',
    styleIds: [
      'double-struck',
      'monospace-font',
      'sans-serif-font',
      'hearts-text',
      'stars-text',
      'sparkles-text',
      'flowers-text',
      'crown-text',
      'bold-hearts',
      'double-struck-bold',
      'double-struck-strikethrough',
      'monospace-underline',
      'monospace-bold',
    ],
    icon: '🎨',
  },
  {
    id: 'geometric-fonts',
    name: 'Geometric Fonts',
    description: 'Letters inside shapes — circles, squares, and brackets.',
    longDescription:
      'Geometric font styles use Unicode enclosed alphanumeric characters to place each letter inside a circle, square, or bracket. They come in both standard (open) and negative (filled) variants. These styles are excellent for creating numbered lists that look beautiful, labelling posts with icons, and any situation where your text needs structure and visual order.',
    styleIds: [
      'circled-text',
      'negative-circled',
      'squared-text',
      'negative-squared',
      'parenthesized-text',
      'circled-bold',
      'parenthesized-bold',
    ],
    icon: '⬡',
  },
  {
    id: 'effect-fonts',
    name: 'Effect Styles',
    description: 'Special visual effects using Unicode combining characters.',
    longDescription:
      'Effect styles use Unicode combining diacritics — characters that attach to the letter before them — to create strikethrough lines, underlines, double underlines, and the infamous Zalgo glitch effect. These work by layering invisible combining characters on top of each letter, producing effects that are preserved when copied and pasted anywhere that renders Unicode.',
    styleIds: [
      'strikethrough-text',
      'underline-text',
      'double-underline-text',
      'zalgo-text',
      'zalgo-light',
      'zalgo-heavy',
      'wavy-text',
      'bold-underline-text',
      'italic-strikethrough',
      'bold-strikethrough',
      'cursive-underline',
      'gothic-bold-underline',
      'double-struck-bold',
      'monospace-underline',
      'gothic-strikethrough',
      'double-struck-strikethrough',
      'cursive-bold-strikethrough',
    ],
    icon: '✨',
  },
  {
    id: 'width-styles',
    name: 'Width Styles',
    description: 'Wide, spaced, and fullwidth character variants.',
    longDescription:
      'Width styles transform text using Unicode fullwidth characters (from the Halfwidth and Fullwidth Forms block) and spacing techniques. Fullwidth characters are double-width, giving text an expanded, aesthetic appearance. These styles are the foundation of vaporwave aesthetics and are widely used in K-pop fan accounts, soft aesthetic posts, and retro-inspired content.',
    styleIds: [
      'vaporwave-text',
      'fullwidth-text',
      'aesthetic-text',
      'vaporwave-cursive',
      'fullwidth-bold',
    ],
    icon: '⬛',
  },
  {
    id: 'transform-styles',
    name: 'Transform Styles',
    description: 'Text flipped, inverted, raised, or otherwise transformed.',
    longDescription:
      'Transform styles modify the spatial or positional relationship of characters to create unexpected visual results. Upside-down text, mirrored text, superscript, subscript, and small caps all reshape text in ways that surprise readers and encourage interaction. These styles are particularly popular for creating unique usernames and puzzle-like captions on social media.',
    styleIds: [
      'upside-down-text',
      'mirrored-text',
      'small-caps',
      'superscript-text',
      'subscript-text',
      'upside-down-bold',
      'superscript-italic',
      'small-caps-bold',
    ],
    icon: '🔄',
  },
  {
    id: 'bold-styles',
    name: 'Bold Styles',
    description: 'Heavy weight variants across all font families.',
    longDescription:
      'Bold styles cover the full spectrum of Unicode bold variants — from standard Mathematical Bold to Sans-Serif Bold, Bold Italic, and Sans Bold Italic. Using Unicode bold characters instead of HTML markup means your text appears bold on any platform that supports Unicode, including Instagram bio, Twitter bios, and Discord messages, regardless of platform formatting support.',
    styleIds: [
      'bold-text',
      'bold-italic-font',
      'sans-bold',
      'sans-bold-italic',
      'bold-cursive-font',
      'bold-gothic-font',
      'bold-underline-text',
      'bold-strikethrough',
      'bold-hearts',
      'upside-down-bold',
      'fullwidth-bold',
      'bold-sans-italic',
      'monospace-bold',
      'small-caps-bold',
    ],
    icon: '𝐁',
  },
];

export const CATEGORIES_BY_ID: Record<string, CategoryDefinition> = Object.fromEntries(
  CATEGORIES.map(c => [c.id, c])
);

export function getCategoryById(id: string): CategoryDefinition | undefined {
  return CATEGORIES_BY_ID[id];
}
