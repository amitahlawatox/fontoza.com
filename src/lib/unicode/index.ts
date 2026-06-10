// Core transform engine
export { transform, transformAll } from './transform';
export type { CharMap, DecoratorFn } from './transform';

// Decorators
export {
  strikethrough,
  underline,
  doubleUnderline,
  zalgoLight,
  zalgoMedium,
  zalgoHeavy,
  vaporwaveSpace,
  hearts,
  stars,
  sparkles,
  flowers,
  crown,
  bubbles,
  wavy,
} from './decorators';

// Character maps
export { BOLD_MAP } from './maps/bold';
export { ITALIC_MAP } from './maps/italic';
export { BOLD_ITALIC_MAP } from './maps/bold-italic';
export { CURSIVE_MAP } from './maps/cursive';
export { BOLD_CURSIVE_MAP } from './maps/bold-cursive';
export { GOTHIC_MAP } from './maps/gothic';
export { BOLD_GOTHIC_MAP } from './maps/bold-gothic';
export { DOUBLE_STRUCK_MAP } from './maps/double-struck';
export { MONOSPACE_MAP } from './maps/monospace';
export { SANS_SERIF_MAP } from './maps/sans-serif';
export { SANS_BOLD_MAP } from './maps/sans-bold';
export { SANS_ITALIC_MAP } from './maps/sans-italic';
export { SANS_BOLD_ITALIC_MAP } from './maps/sans-bold-italic';
export { CIRCLED_MAP } from './maps/circled';
export { NEGATIVE_CIRCLED_MAP } from './maps/negative-circled';
export { SQUARED_MAP } from './maps/squared';
export { NEGATIVE_SQUARED_MAP } from './maps/negative-squared';
export { PARENTHESIZED_MAP } from './maps/parenthesized';
export { FULLWIDTH_MAP } from './maps/fullwidth';
export { SMALL_CAPS_MAP } from './maps/small-caps';
export { SUPERSCRIPT_MAP } from './maps/superscript';
export { SUBSCRIPT_MAP } from './maps/subscript';
export { UPSIDE_DOWN_MAP } from './maps/upside-down';
export { MIRRORED_MAP } from './maps/mirrored';
