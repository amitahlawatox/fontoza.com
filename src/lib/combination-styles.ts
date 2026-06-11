/**
 * Programmatic combination style generator.
 * Produces all base-font × decorator combinations not already in STYLES.
 * Adds ~350-400 new styles to reach 400+ total.
 */

import { transform } from './unicode/transform';
import type { CharMap } from './unicode/transform';
import {
  strikethrough, underline, doubleUnderline,
  vaporwaveSpace, hearts, stars, sparkles, flowers, crown, wavy,
  zalgoLight, zalgoMedium, zalgoHeavy,
  fire, moon, music, butterfly, lightning, rainbow, diamond, rose,
} from './unicode/decorators';
import { BOLD_MAP } from './unicode/maps/bold';
import { ITALIC_MAP } from './unicode/maps/italic';
import { BOLD_ITALIC_MAP } from './unicode/maps/bold-italic';
import { CURSIVE_MAP } from './unicode/maps/cursive';
import { BOLD_CURSIVE_MAP } from './unicode/maps/bold-cursive';
import { GOTHIC_MAP } from './unicode/maps/gothic';
import { BOLD_GOTHIC_MAP } from './unicode/maps/bold-gothic';
import { DOUBLE_STRUCK_MAP } from './unicode/maps/double-struck';
import { MONOSPACE_MAP } from './unicode/maps/monospace';
import { SANS_SERIF_MAP } from './unicode/maps/sans-serif';
import { SANS_BOLD_MAP } from './unicode/maps/sans-bold';
import { SANS_ITALIC_MAP } from './unicode/maps/sans-italic';
import { SANS_BOLD_ITALIC_MAP } from './unicode/maps/sans-bold-italic';
import { CIRCLED_MAP } from './unicode/maps/circled';
import { NEGATIVE_CIRCLED_MAP } from './unicode/maps/negative-circled';
import { SQUARED_MAP } from './unicode/maps/squared';
import { NEGATIVE_SQUARED_MAP } from './unicode/maps/negative-squared';
import { PARENTHESIZED_MAP } from './unicode/maps/parenthesized';
import { FULLWIDTH_MAP } from './unicode/maps/fullwidth';
import { SMALL_CAPS_MAP } from './unicode/maps/small-caps';
import { SUPERSCRIPT_MAP } from './unicode/maps/superscript';
import { SUBSCRIPT_MAP } from './unicode/maps/subscript';
import type { StyleDefinition, StyleCategory, PlatformId } from './registry';

// ── Base font definitions ──────────────────────────────────────────────────────

interface BaseStyle {
  id: string;
  name: string;
  shortName: string;
  map: CharMap;
  category: StyleCategory;
  platforms: PlatformId[];
  kw: string;
  desc: string;
}

const BASES: BaseStyle[] = [
  { id: 'cursive', name: 'Cursive', shortName: 'Cursive', map: CURSIVE_MAP, category: 'script', platforms: ['instagram','tiktok','twitter','facebook','discord','whatsapp'], kw: 'cursive', desc: 'elegant flowing cursive script' },
  { id: 'bold-cursive', name: 'Bold Cursive', shortName: 'Bold Cursive', map: BOLD_CURSIVE_MAP, category: 'script', platforms: ['instagram','tiktok','twitter','facebook'], kw: 'bold cursive script', desc: 'bold bold script' },
  { id: 'italic', name: 'Italic', shortName: 'Italic', map: ITALIC_MAP, category: 'script', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'italic', desc: 'slanted italic' },
  { id: 'bold', name: 'Bold', shortName: 'Bold', map: BOLD_MAP, category: 'weight', platforms: ['instagram','tiktok','twitter','facebook','discord','youtube'], kw: 'bold', desc: 'bold mathematical' },
  { id: 'bold-italic', name: 'Bold Italic', shortName: 'Bold Italic', map: BOLD_ITALIC_MAP, category: 'weight', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'bold italic', desc: 'bold italic' },
  { id: 'gothic', name: 'Gothic', shortName: 'Gothic', map: GOTHIC_MAP, category: 'script', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'gothic fraktur', desc: 'gothic Fraktur blackletter' },
  { id: 'bold-gothic', name: 'Bold Gothic', shortName: 'Bold Gothic', map: BOLD_GOTHIC_MAP, category: 'script', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'bold gothic', desc: 'bold gothic blackletter' },
  { id: 'double-struck', name: 'Double-Struck', shortName: 'Double-Struck', map: DOUBLE_STRUCK_MAP, category: 'decorative', platforms: ['instagram','tiktok','twitter','discord'], kw: 'double struck blackboard bold', desc: 'blackboard bold double-struck' },
  { id: 'monospace', name: 'Monospace', shortName: 'Monospace', map: MONOSPACE_MAP, category: 'decorative', platforms: ['discord','twitter','instagram','tiktok'], kw: 'monospace typewriter', desc: 'monospace typewriter-style' },
  { id: 'sans-serif', name: 'Sans-Serif', shortName: 'Sans', map: SANS_SERIF_MAP, category: 'decorative', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'sans serif', desc: 'clean modern sans-serif' },
  { id: 'sans-bold', name: 'Sans-Serif Bold', shortName: 'Sans Bold', map: SANS_BOLD_MAP, category: 'weight', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'sans bold', desc: 'bold sans-serif' },
  { id: 'sans-italic', name: 'Sans-Serif Italic', shortName: 'Sans Italic', map: SANS_ITALIC_MAP, category: 'decorative', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'sans italic', desc: 'sans-serif italic' },
  { id: 'sans-bold-italic', name: 'Sans Bold Italic', shortName: 'Sans Bold Italic', map: SANS_BOLD_ITALIC_MAP, category: 'weight', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'sans bold italic', desc: 'bold italic sans-serif' },
  { id: 'circled', name: 'Circled', shortName: 'Circled', map: CIRCLED_MAP, category: 'geometric', platforms: ['instagram','tiktok','twitter','facebook','discord','whatsapp'], kw: 'circled bubble letters', desc: 'circled bubble letters' },
  { id: 'negative-circled', name: 'Negative Circled', shortName: 'Dark Circles', map: NEGATIVE_CIRCLED_MAP, category: 'geometric', platforms: ['instagram','tiktok','twitter','discord'], kw: 'negative circled filled circle', desc: 'filled black circle letters' },
  { id: 'squared', name: 'Squared', shortName: 'Squared', map: SQUARED_MAP, category: 'geometric', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'squared box letters', desc: 'squared box letters' },
  { id: 'negative-squared', name: 'Negative Squared', shortName: 'Dark Squares', map: NEGATIVE_SQUARED_MAP, category: 'geometric', platforms: ['instagram','tiktok','twitter','discord'], kw: 'negative squared black square', desc: 'filled black square letters' },
  { id: 'parenthesized', name: 'Parenthesized', shortName: 'Parenthesized', map: PARENTHESIZED_MAP, category: 'geometric', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'parenthesized enclosed letters', desc: 'letters in parentheses' },
  { id: 'fullwidth', name: 'Fullwidth', shortName: 'Fullwidth', map: FULLWIDTH_MAP, category: 'width', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'fullwidth wide', desc: 'fullwidth wide characters' },
  { id: 'small-caps', name: 'Small Caps', shortName: 'Small Caps', map: SMALL_CAPS_MAP, category: 'transform', platforms: ['instagram','tiktok','twitter','facebook','discord'], kw: 'small caps', desc: 'small capital letters' },
  { id: 'superscript', name: 'Superscript', shortName: 'Super', map: SUPERSCRIPT_MAP, category: 'transform', platforms: ['instagram','tiktok','discord','twitter'], kw: 'superscript raised tiny', desc: 'raised superscript' },
  { id: 'subscript', name: 'Subscript', shortName: 'Sub', map: SUBSCRIPT_MAP, category: 'transform', platforms: ['instagram','discord','twitter'], kw: 'subscript lowered tiny', desc: 'lowered subscript' },
];

// ── Effect / decorator definitions ────────────────────────────────────────────

interface Effect {
  id: string;
  name: string;
  fn: (text: string) => string;
  decoratorName: string;
  desc: string;
  tags: string[];
  emoji: string;
}

const EFFECTS: Effect[] = [
  { id: 'strikethrough', name: 'Strikethrough', fn: strikethrough, decoratorName: 'strikethrough', desc: 'crossed out with a strikethrough line through every character', tags: ['strikethrough','crossed','effect'], emoji: '' },
  { id: 'underline', name: 'Underline', fn: underline, decoratorName: 'underline', desc: 'underlined with a combining underline diacritic', tags: ['underline','emphasis','effect'], emoji: '' },
  { id: 'double-underline', name: 'Double Underline', fn: doubleUnderline, decoratorName: 'doubleUnderline', desc: 'double underlined with two parallel underlines', tags: ['double underline','emphasis','effect'], emoji: '' },
  { id: 'hearts', name: 'Hearts', fn: hearts, decoratorName: 'hearts', desc: 'surrounded by heart symbols ♥', tags: ['hearts','love','romantic'], emoji: '♥' },
  { id: 'stars', name: 'Stars', fn: stars, decoratorName: 'stars', desc: 'surrounded by star symbols ★', tags: ['stars','glam','shine'], emoji: '★' },
  { id: 'sparkles', name: 'Sparkles', fn: sparkles, decoratorName: 'sparkles', desc: 'framed by sparkle symbols ✨', tags: ['sparkles','magical','glitter'], emoji: '✨' },
  { id: 'flowers', name: 'Flowers', fn: flowers, decoratorName: 'flowers', desc: 'surrounded by flower symbols ✿', tags: ['flowers','floral','nature'], emoji: '✿' },
  { id: 'crown', name: 'Crown', fn: crown, decoratorName: 'crown', desc: 'flanked by royal crown symbols ♛', tags: ['crown','royal','regal'], emoji: '♛' },
  { id: 'zalgo', name: 'Zalgo', fn: zalgoLight, decoratorName: 'zalgoLight', desc: 'with subtle glitch and corrupted diacritics', tags: ['zalgo','glitch','creepy','effect'], emoji: '' },
  { id: 'vaporwave', name: 'Vaporwave', fn: vaporwaveSpace, decoratorName: 'vaporwaveSpace', desc: 'spaced out in vaporwave aesthetic style', tags: ['vaporwave','aesthetic','retro','spaced'], emoji: '' },
  { id: 'fire', name: 'Fire', fn: fire, decoratorName: 'fire', desc: 'framed with fire emoji 🔥', tags: ['fire','hot','energy'], emoji: '🔥' },
  { id: 'moon', name: 'Moon', fn: moon, decoratorName: 'moon', desc: 'surrounded by moon symbols 🌙', tags: ['moon','night','aesthetic'], emoji: '🌙' },
  { id: 'music', name: 'Music', fn: music, decoratorName: 'music', desc: 'framed with music notes 🎵', tags: ['music','notes','rhythm'], emoji: '🎵' },
  { id: 'butterfly', name: 'Butterfly', fn: butterfly, decoratorName: 'butterfly', desc: 'surrounded by butterfly symbols 🦋', tags: ['butterfly','cute','aesthetic'], emoji: '🦋' },
  { id: 'lightning', name: 'Lightning', fn: lightning, decoratorName: 'lightning', desc: 'framed with lightning bolt symbols ⚡', tags: ['lightning','electric','energy'], emoji: '⚡' },
  { id: 'rainbow', name: 'Rainbow', fn: rainbow, decoratorName: 'rainbow', desc: 'surrounded by rainbow symbols 🌈', tags: ['rainbow','colorful','pride'], emoji: '🌈' },
  { id: 'diamond', name: 'Diamond', fn: diamond, decoratorName: 'diamond', desc: 'framed with diamond gem symbols 💎', tags: ['diamond','luxury','gem'], emoji: '💎' },
  { id: 'rose', name: 'Rose', fn: rose, decoratorName: 'rose', desc: 'surrounded by rose symbols 🌹', tags: ['rose','romantic','floral'], emoji: '🌹' },
];

// ── Generator ─────────────────────────────────────────────────────────────────

export function generateCombinationStyles(existingIds: Set<string>): StyleDefinition[] {
  const generated: StyleDefinition[] = [];

  for (const base of BASES) {
    for (const effect of EFFECTS) {
      const id = `${base.id}-${effect.id}`;
      if (existingIds.has(id)) continue;

      const name = `${base.name} ${effect.name}`;
      const description = `${base.name} text ${effect.desc}. Copy and paste into Instagram, TikTok, Discord, and any platform.`;

      generated.push({
        id,
        name,
        description,
        category: base.category,
        tags: [...base.kw.split(' '), ...effect.tags],
        map: base.map,
        decorator: effect.fn,
        decoratorName: effect.decoratorName,
        example: transform(`Hello World`, base.map, effect.fn),
        platforms: base.platforms,
        relatedStyles: [
          `${base.id}-font`.replace('-font-font', '-font') in existingIds ? `${base.id}-font` : base.id,
          `${effect.id}-text`,
        ].filter(rid => existingIds.has(rid) || generated.some(s => s.id === rid)),
        seoKeywords: [
          `${base.kw} ${effect.name.toLowerCase()} font`,
          `${base.kw} ${effect.name.toLowerCase()} text generator`,
          `${base.kw} with ${effect.name.toLowerCase()}`,
          `${effect.name.toLowerCase()} ${base.kw} copy paste`,
        ],
        searchVolume: 500,
      });
    }
  }

  return generated;
}
