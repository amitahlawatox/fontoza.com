import type { StyleDefinition } from '../registry';
import type { CategoryDefinition } from '../categories';
import type { PlatformDefinition } from '../platforms';

const SITE_URL = 'https://fontoza.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface PageMeta {
  title: string;       // 50-60 chars, keyword-first
  description: string; // 120-155 chars, includes CTA
  canonical: string;   // https://fontoza.com/...
  ogImage: string;
}

// Per-style overrides for Tier 1 and high-volume Tier 2 styles
const STYLE_META_OVERRIDES: Record<string, { title: string; description: string }> = {
  'cursive-font': {
    title: 'Cursive Text Generator — Copy & Paste | Fontoza',
    description:
      'Generate beautiful cursive Unicode text instantly. Copy and paste flowing script letters into Instagram bios, TikTok captions, and tweets. Free, no sign-up needed.',
  },
  'bold-text': {
    title: 'Bold Text Generator — Copy & Paste Unicode | Fontoza',
    description:
      'Make bold text that works on Instagram, TikTok, Twitter, and Discord. Uses real Unicode bold characters — no formatting required. Copy and paste in seconds.',
  },
  'italic-font': {
    title: 'Italic Font Generator — Slanted Text Copy Paste | Fontoza',
    description:
      'Generate Unicode italic text for social media bios and captions. Works everywhere without HTML — just copy and paste into Instagram, TikTok, or Twitter.',
  },
  'bold-italic-font': {
    title: 'Bold Italic Font Generator — Copy & Paste | Fontoza',
    description:
      'Combine bold and italic in one style. Unicode bold italic letters copy perfectly into any platform. Great for emphasis in Instagram bios and Twitter threads.',
  },
  'gothic-font': {
    title: 'Gothic Text Generator — Medieval Font Copy Paste | Fontoza',
    description:
      'Create dramatic Gothic Fraktur blackletter text for free. Copy and paste dark medieval font into Instagram, Discord, TikTok, and more. Instant preview.',
  },
  'strikethrough-text': {
    title: 'Strikethrough Text Generator — Copy & Paste | Fontoza',
    description:
      'Add a line through your text using Unicode combining characters. Crossed-out text works on Instagram, Twitter, TikTok, and WhatsApp. Copy and paste instantly.',
  },
  'small-caps': {
    title: 'Small Caps Generator — Small Capital Letters | Fontoza',
    description:
      'Convert text to Unicode small caps letters. Clean, distinctive capital-like text that works in any social media bio or caption. Free copy-paste generator.',
  },
  'double-struck': {
    title: 'Double-Struck Text Generator — Blackboard Bold | Fontoza',
    description:
      'Generate blackboard bold double-struck letters for a unique mathematical look. Copy and paste hollow outlined text into Instagram, Discord, and Twitter.',
  },
  'upside-down-text': {
    title: 'Upside Down Text Generator — Flip Text | Fontoza',
    description:
      'Flip your text upside down with one click. Unicode inverted characters copy and paste into any platform. Surprise your Instagram and TikTok followers.',
  },
  'vaporwave-text': {
    title: 'Vaporwave Text Generator — Aesthetic Font | Fontoza',
    description:
      'Create ａｅｓｔｈｅｔｉｃ vaporwave fullwidth text for Instagram and TikTok. The iconic retro 80s style font, free to copy and paste. Instant preview included.',
  },
  'bold-cursive-font': {
    title: 'Bold Cursive Font Generator — Script Text | Fontoza',
    description:
      'Generate thick bold script letters for a powerful handwriting style. Bold cursive Unicode text copies perfectly into Instagram, TikTok, and Twitter bios.',
  },
  'monospace-font': {
    title: 'Monospace Font Generator — Typewriter Text | Fontoza',
    description:
      'Create fixed-width typewriter-style Unicode text for Discord, Twitter, and Instagram. Code aesthetic monospace font — copy and paste free with instant preview.',
  },
  'circled-text': {
    title: 'Circled Text Generator — Bubble Letters | Fontoza',
    description:
      'Put every letter inside a circle with this free Unicode generator. Bubble-style circled letters copy and paste into Instagram, TikTok, and Twitter instantly.',
  },
  'bold-gothic-font': {
    title: 'Bold Gothic Font Generator — Heavy Fraktur | Fontoza',
    description:
      'Generate heavy blackletter bold Gothic text online. Dark Fraktur copy-paste font for Instagram bios, Discord usernames, and TikTok captions. Free generator.',
  },
  'fullwidth-text': {
    title: 'Fullwidth Text Generator — Wide Aesthetic Font | Fontoza',
    description:
      'Create wide fullwidth Unicode characters for an aesthetic look. ｆｕｌｌｗｉｄｔｈ text copies into Instagram and TikTok bios perfectly. Free instant generator.',
  },
  'underline-text': {
    title: 'Underline Text Generator — Underlined Copy Paste | Fontoza',
    description:
      'Add Unicode underlines to any text without HTML. Underlined text works on Instagram, TikTok, Twitter, and WhatsApp. Copy and paste your underlined font free.',
  },
  'sans-serif-font': {
    title: 'Sans-Serif Font Generator — Clean Unicode Text | Fontoza',
    description:
      'Generate clean modern Unicode sans-serif text. Copy and paste minimalist letterforms into Instagram bios, TikTok captions, and Twitter threads for free.',
  },
  'zalgo-text': {
    title: 'Zalgo Text Generator — Glitch & Creepy Text | Fontoza',
    description:
      'Create corrupted glitchy Zalgo text with stacking diacritics. Scary creepy text copy paste for Discord, Twitter, and Instagram. Free Zalgo generator online.',
  },
  'superscript-text': {
    title: 'Superscript Text Generator — Tiny Raised Letters | Fontoza',
    description:
      'Generate raised superscript Unicode letters for a footnote or math effect. Copy and paste tiny elevated text into Instagram, TikTok, and Discord bios.',
  },
  'negative-circled': {
    title: 'Negative Circled Letters — Black Circle Text | Fontoza',
    description:
      'Create inverted filled black circle letters for bold visual impact. Negative circled Unicode text copies perfectly into Instagram, TikTok, and Twitter.',
  },
};

// Per-platform overrides
const PLATFORM_META_OVERRIDES: Record<string, { title: string; description: string }> = {
  'instagram-font-generator': {
    title: 'Instagram Font Generator — Fancy Bio Fonts | Fontoza',
    description:
      'Generate fancy Unicode fonts for your Instagram bio, captions, and stories. Cursive, bold, gothic, and 400+ styles — copy and paste in seconds. Free tool.',
  },
  'tiktok-font-generator': {
    title: 'TikTok Font Generator — Fancy Bio Text | Fontoza',
    description:
      'Create standout TikTok bio fonts with Unicode text styles. Bold, cursive, aesthetic, and gothic — copy and paste into your TikTok profile instantly. Free.',
  },
  'discord-font-generator': {
    title: 'Discord Font Generator — Unicode Styles | Fontoza',
    description:
      'Generate Unicode text fonts for Discord messages, usernames, and server bios. Gothic, Zalgo, monospace, and more — copy and paste into Discord free.',
  },
  'twitter-font-generator': {
    title: 'Twitter / X Font Generator — Copy Paste Fonts | Fontoza',
    description:
      'Fancy Unicode fonts for Twitter/X bios, display names, and tweets. Bold, cursive, and script text — stands out in the feed. Free copy-paste generator.',
  },
  'facebook-font-generator': {
    title: 'Facebook Font Generator — Fancy Post Fonts | Fontoza',
    description:
      'Create stylish Unicode text for Facebook posts, bios, and page names. Bold, cursive, hearts, and more — copy and paste into Facebook free. Instant preview.',
  },
  'whatsapp-font-generator': {
    title: 'WhatsApp Font Generator — Fancy Message Text | Fontoza',
    description:
      'Send fancy Unicode fonts in WhatsApp messages, status, and group names. Cursive, bold, aesthetic styles — copy and paste into WhatsApp. Free generator.',
  },
  'youtube-font-generator': {
    title: 'YouTube Font Generator — Channel Name Fonts | Fontoza',
    description:
      'Style your YouTube channel name and descriptions with Unicode fonts. Bold, gothic, and script text for comments and bios — copy and paste free on Fontoza.',
  },
  'roblox-font-generator': {
    title: 'Roblox Font Generator — Fancy Display Name Text | Fontoza',
    description:
      'Generate fancy Unicode fonts for your Roblox display name, bio, and group descriptions. Bold, cursive, gothic, and 400+ styles — copy and paste free. No sign-up.',
  },
  'twitch-font-generator': {
    title: 'Twitch Font Generator — Streamer Bio & Title Fonts | Fontoza',
    description:
      'Create standout Unicode fonts for your Twitch bio, stream title, and channel panels. Bold, cursive, gothic, and 400+ styles — copy and paste free on Fontoza.',
  },
  'linkedin-font-generator': {
    title: 'LinkedIn Font Generator — Bold Headline Text | Fontoza',
    description:
      'Make your LinkedIn headline and bio stand out with Unicode bold, small caps, and italic text. Copy and paste fancy fonts into LinkedIn for free — instant preview.',
  },
  'telegram-font-generator': {
    title: 'Telegram Font Generator — Channel & Bio Fonts | Fontoza',
    description:
      'Generate fancy Unicode fonts for your Telegram bio, channel name, and group descriptions. Cursive, bold, gothic, and 400+ styles — copy and paste free. Instant.',
  },
  'snapchat-font-generator': {
    title: 'Snapchat Font Generator — Display Name Fonts | Fontoza',
    description:
      'Create aesthetic Unicode fonts for your Snapchat display name and bio. Cursive, bold, vaporwave, and 400+ styles — copy and paste into Snapchat free. No sign-up.',
  },
};

// Per-category overrides
const CATEGORY_META_OVERRIDES: Record<string, { title: string; description: string }> = {
  'script-fonts': {
    title: 'Script Fonts Generator — Cursive & Gothic Text | Fontoza',
    description:
      'Browse all cursive, italic, gothic, and calligraphic Unicode script fonts. Copy and paste elegant handwriting-style text into Instagram, TikTok, and more.',
  },
  'decorative-fonts': {
    title: 'Decorative Fonts Generator — Ornamental Text | Fontoza',
    description:
      'Explore double-struck, monospace, symbol, and decorative Unicode fonts. Copy unique ornamental text for Instagram bios, Discord, and Twitter bios. Free.',
  },
  'geometric-fonts': {
    title: 'Geometric Fonts — Circled & Squared Letters | Fontoza',
    description:
      'Generate circled, squared, and parenthesized Unicode text. Geometric bubble letters for Instagram and TikTok bios — copy and paste instantly. Free tool.',
  },
  'effect-fonts': {
    title: 'Text Effect Generator — Strikethrough, Zalgo | Fontoza',
    description:
      'Generate strikethrough, underline, Zalgo, and wavy Unicode text effects. Copy special effect fonts for Instagram, Discord, and TikTok posts. Free generator.',
  },
  'width-styles': {
    title: 'Wide Text Generator — Vaporwave & Aesthetic Fonts | Fontoza',
    description:
      'Create fullwidth vaporwave and aesthetic Unicode text. Wide spaced letters for Instagram bios and TikTok captions — copy and paste free. Retro 80s style.',
  },
  'transform-styles': {
    title: 'Text Transform Generator — Upside Down & Mirrored | Fontoza',
    description:
      'Flip, mirror, raise, or shrink your text using Unicode transforms. Upside down, small caps, superscript, and mirrored text — copy and paste instantly.',
  },
  'bold-styles': {
    title: 'Bold Font Generator — All Bold Text Styles | Fontoza',
    description:
      'Generate bold Unicode text in every style — bold, bold italic, bold sans, and bold gothic. Works on Instagram, TikTok, and Twitter. Copy and paste free.',
  },
};

// Tool pages (utility pages beyond styles/categories/platforms)
const TOOL_META: Record<string, { title: string; description: string }> = {
  'unicode-text-cleaner': {
    title: 'Unicode Text Cleaner — Remove Fancy Characters | Fontoza',
    description:
      'Remove fancy Unicode characters from text and convert back to plain ASCII. Paste styled text and get clean output. Free online Unicode cleaner tool.',
  },
  'font-tester': {
    title: 'Font Tester — Preview Unicode Fonts Side by Side | Fontoza',
    description:
      'Preview all 400+ Unicode font styles at once. Test how your text looks in every style before copying. Free font comparison tool on Fontoza.',
  },
  'text-repeater': {
    title: 'Text Repeater — Repeat Text Online Free | Fontoza',
    description:
      'Repeat any text or phrase multiple times in one click. Set custom separators and repetition counts. Free online text repeater tool by Fontoza.',
  },
  'letter-spacing': {
    title: 'Letter Spacing Tool — Add Spaces Between Letters | Fontoza',
    description:
      'Add custom spacing between letters for aesthetic text. Control letter spacing for Instagram captions, TikTok bios, and posts. Free letter spacing tool.',
  },
  'text-counter': {
    title: 'Character Counter — Count Words and Characters | Fontoza',
    description:
      'Count characters, words, and sentences in your text. Essential for fitting Instagram bios and Twitter character limits. Free text counter by Fontoza.',
  },
  'zalgo-decoder': {
    title: 'Zalgo Text Decoder — Remove Zalgo Characters | Fontoza',
    description:
      'Decode and clean Zalgo glitch text by stripping combining diacritics. Restore corrupted text to normal instantly. Free Zalgo decoder tool on Fontoza.',
  },
  'bio-generator': {
    title: 'Instagram Bio Generator — Fancy Bio Ideas | Fontoza',
    description:
      'Generate creative Instagram bio ideas with fancy Unicode fonts applied. Get inspiration and a ready-to-copy bio in seconds. Free Instagram bio generator.',
  },
};

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + '…';
}

export function generateStyleMeta(style: StyleDefinition): PageMeta {
  const override = STYLE_META_OVERRIDES[style.id];

  const title = override
    ? override.title
    : truncate(`${style.name} Generator — Copy & Paste Unicode | Fontoza`, 60);

  const description = override
    ? override.description
    : truncate(
        `Generate ${style.name.toLowerCase()} Unicode text instantly. ${style.description} Copy and paste into Instagram, TikTok, Twitter, and Discord. Free.`,
        155
      );

  return {
    title,
    description,
    canonical: `${SITE_URL}/fonts/${style.id}/`,
    ogImage: DEFAULT_OG_IMAGE,
  };
}

export function generateCategoryMeta(category: CategoryDefinition): PageMeta {
  const override = CATEGORY_META_OVERRIDES[category.id];

  const title = override
    ? override.title
    : truncate(`${category.name} Generator — Unicode Text Styles | Fontoza`, 60);

  const description = override
    ? override.description
    : truncate(
        `Explore ${category.name.toLowerCase()} Unicode text styles on Fontoza. ${category.description} Copy and paste into Instagram, TikTok, and Discord. Free.`,
        155
      );

  return {
    title,
    description,
    canonical: `${SITE_URL}/category/${category.id}/`,
    ogImage: DEFAULT_OG_IMAGE,
  };
}

export function generatePlatformMeta(platform: PlatformDefinition): PageMeta {
  const override = PLATFORM_META_OVERRIDES[platform.id];

  const title = override
    ? override.title
    : truncate(`${platform.name} — Unicode Fonts | Fontoza`, 60);

  const description = override
    ? override.description
    : truncate(
        `${platform.description} Copy and paste Unicode font styles for ${platform.name}. Free generator with instant preview on Fontoza.`,
        155
      );

  return {
    title,
    description,
    canonical: `${SITE_URL}/platform/${platform.id}/`,
    ogImage: DEFAULT_OG_IMAGE,
  };
}

export function generateToolMeta(tool: {
  id: string;
  name: string;
  description: string;
}): PageMeta {
  const override = TOOL_META[tool.id];

  const title = override
    ? override.title
    : truncate(`${tool.name} — Free Online Tool | Fontoza`, 60);

  const description = override
    ? override.description
    : truncate(`${tool.description} Free online tool by Fontoza.`, 155);

  return {
    title,
    description,
    canonical: `${SITE_URL}/tools/${tool.id}/`,
    ogImage: DEFAULT_OG_IMAGE,
  };
}

export function getHomeMeta(): PageMeta {
  return {
    title: 'Fontoza — Fancy Text Generator | 400+ Unicode Font Styles',
    description:
      'Generate 400+ fancy Unicode font styles instantly — cursive, bold, gothic, italic, vaporwave, and more. Copy and paste into Instagram, TikTok, Discord, and Twitter. Free.',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
  };
}
