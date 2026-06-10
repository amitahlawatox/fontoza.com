export interface PlatformDefinition {
  id: string;
  platform: string;
  name: string;
  description: string;
  longDescription: string;
  supportedStyleIds: string[];
  usageTips: string[];
  icon: string;
}

export const PLATFORMS: PlatformDefinition[] = [
  {
    id: 'instagram-font-generator',
    platform: 'instagram',
    name: 'Instagram Font Generator',
    description: 'Create fancy Unicode fonts for Instagram bios, captions, and stories.',
    longDescription:
      'Instagram does not support custom fonts through its interface, but it fully renders any Unicode character you paste into it. That means you can use Mathematical Script, Bold, Gothic, Fullwidth, and dozens of other Unicode-based "fonts" in your bio, captions, comments, and even your display name. These characters look exactly the same for all viewers because they are standard Unicode — not images or custom fonts.',
    supportedStyleIds: [
      'cursive-font', 'bold-text', 'italic-font', 'bold-italic-font', 'gothic-font',
      'bold-cursive-font', 'strikethrough-text', 'underline-text', 'double-underline-text',
      'small-caps', 'double-struck', 'fullwidth-text', 'vaporwave-text', 'upside-down-text',
      'circled-text', 'negative-circled', 'squared-text', 'negative-squared', 'parenthesized-text',
      'superscript-text', 'aesthetic-text', 'hearts-text', 'stars-text', 'sparkles-text',
      'flowers-text', 'crown-text', 'bold-gothic-font', 'sans-serif-font', 'monospace-font',
      'bold-underline-text', 'italic-strikethrough', 'bold-strikethrough', 'cursive-underline',
    ],
    usageTips: [
      'Copy your generated text and open Instagram on your phone or desktop.',
      'Go to your profile and tap "Edit Profile" to update your bio.',
      'Paste the Unicode text directly into the bio or name field.',
      'For captions, paste directly when writing a new post or story.',
      'Keep your bio under 150 characters — fancy characters still count as one character each.',
      'Mix styles for maximum impact: bold for your name, cursive for your tagline.',
      'Test how it looks by previewing before saving — some older devices may show squares for rare characters.',
      'Circled and geometric styles work especially well for bullet points in bios.',
    ],
    icon: '📸',
  },
  {
    id: 'tiktok-font-generator',
    platform: 'tiktok',
    name: 'TikTok Font Generator',
    description: 'Fancy Unicode text styles for TikTok bios, comments, and usernames.',
    longDescription:
      'TikTok fully supports Unicode characters in bios, display names, and video captions. Using fancy Unicode text in your TikTok bio is one of the most effective ways to make your profile stand out in a crowded feed. Mathematical bold and italic styles are especially popular among TikTok creators. Video captions and comment sections also render Unicode correctly, letting you add visual flair to your engagement.',
    supportedStyleIds: [
      'cursive-font', 'bold-text', 'italic-font', 'bold-italic-font', 'gothic-font',
      'bold-cursive-font', 'strikethrough-text', 'underline-text', 'small-caps',
      'fullwidth-text', 'vaporwave-text', 'upside-down-text', 'circled-text',
      'negative-circled', 'squared-text', 'negative-squared', 'aesthetic-text',
      'hearts-text', 'stars-text', 'sparkles-text', 'flowers-text', 'sans-serif-font',
      'sans-bold', 'bold-gothic-font', 'monospace-font', 'superscript-text',
    ],
    usageTips: [
      'Open TikTok and tap "Me" then "Edit Profile" to access your bio.',
      'Unicode text works in your display name, bio, and video descriptions.',
      'Bold and italic styles are great for emphasizing your niche in your bio.',
      'Use aesthetic (fullwidth) text for a soft, trendy look popular in 2024–2025.',
      'Comment sections fully support Unicode — stand out by responding in a unique style.',
      'Keep your display name clean — 1-2 style changes is enough; avoid overwhelming combinations.',
      'Vaporwave spacing works well for TikTok but may look different on Android vs iOS.',
    ],
    icon: '🎵',
  },
  {
    id: 'discord-font-generator',
    platform: 'discord',
    name: 'Discord Font Generator',
    description: 'Unicode font styles that work in Discord messages, usernames, and server bios.',
    longDescription:
      'Discord supports both Markdown formatting and full Unicode rendering. This means you get the benefit of Discord\'s own bold, italic, and strikethrough Markdown, plus the full range of Unicode mathematical and symbol characters. Unicode styles like Gothic, Double-Struck, Circled, and Monospace create visual variety that Markdown alone cannot achieve. Zalgo text is particularly popular in Discord for creative, horror-themed, or troll contexts.',
    supportedStyleIds: [
      'cursive-font', 'bold-text', 'italic-font', 'bold-italic-font', 'gothic-font',
      'bold-cursive-font', 'strikethrough-text', 'underline-text', 'double-underline-text',
      'small-caps', 'double-struck', 'monospace-font', 'circled-text', 'negative-circled',
      'squared-text', 'negative-squared', 'parenthesized-text', 'zalgo-text', 'zalgo-light',
      'zalgo-heavy', 'bold-gothic-font', 'sans-serif-font', 'sans-bold', 'sans-italic',
      'sans-bold-italic', 'wavy-text', 'upside-down-text', 'mirrored-text',
    ],
    usageTips: [
      'Paste Unicode text directly into any Discord message, username, or bio field.',
      'Combine Unicode styles with Discord Markdown: **𝒃𝒐𝒍𝒅 𝒄𝒖𝒓𝒔𝒊𝒗𝒆** is both Markdown bold AND Unicode italic.',
      'Zalgo text works best for bot names, server introductions with horror themes, or joke channels.',
      'Monospace Unicode text is a great alternative to Discord code blocks for aesthetic purposes.',
      'Server names and channel names also accept Unicode — great for themed servers.',
      'Some Unicode characters may not render on older desktop clients — test first.',
      'Gothic (Fraktur) text is popular in aesthetic Discord servers and roleplay communities.',
    ],
    icon: '🎮',
  },
  {
    id: 'twitter-font-generator',
    platform: 'twitter',
    name: 'Twitter / X Font Generator',
    description: 'Unicode font styles for Twitter/X bios, display names, and tweets.',
    longDescription:
      'Twitter (now X) renders Unicode characters fully in tweets, bios, display names, and replies. Because Twitter strips HTML and only supports limited native formatting, Unicode text styles are one of the few ways to achieve visual differentiation in your content. Bold mathematical text and script styles are especially popular for display names and pinned posts. Note that Twitter counts Unicode supplementary plane characters (like most of these styles) as 2 characters each toward the 280-character limit.',
    supportedStyleIds: [
      'cursive-font', 'bold-text', 'italic-font', 'bold-italic-font', 'gothic-font',
      'bold-cursive-font', 'strikethrough-text', 'underline-text', 'small-caps',
      'double-struck', 'fullwidth-text', 'vaporwave-text', 'upside-down-text',
      'circled-text', 'negative-circled', 'squared-text', 'negative-squared',
      'parenthesized-text', 'aesthetic-text', 'hearts-text', 'stars-text',
      'bold-gothic-font', 'sans-serif-font', 'monospace-font', 'mirrored-text',
      'zalgo-light', 'zalgo-text',
    ],
    usageTips: [
      'Remember: supplementary plane Unicode characters (most fancy styles) count as 2 of your 280 chars.',
      'Display names have a 50-character limit — use shorter styles like small caps or sans-bold.',
      'Bold and italic Unicode are popular for making key words stand out in long threads.',
      'Cursive and Gothic fonts in display names catch the eye in fast-scrolling feeds.',
      'Avoid heavy Zalgo in tweets — it can trigger spam filters on some accounts.',
      'Strikethrough and underline work well for showing corrections without deleting text.',
      'Test unusual Unicode in draft mode before publishing — some characters may not render as expected.',
    ],
    icon: '🐦',
  },
  {
    id: 'facebook-font-generator',
    platform: 'facebook',
    name: 'Facebook Font Generator',
    description: 'Fancy Unicode text for Facebook posts, bios, names, and comments.',
    longDescription:
      'Facebook renders Unicode text in posts, comments, bios, page descriptions, and event names. Using Unicode styled text in Facebook posts can increase engagement because it creates visual contrast in the news feed. Mathematical bold and script styles are popular for Facebook page names and post headlines. The platform supports the full Unicode range, making all styles on this site compatible.',
    supportedStyleIds: [
      'cursive-font', 'bold-text', 'italic-font', 'bold-italic-font', 'gothic-font',
      'bold-cursive-font', 'strikethrough-text', 'underline-text', 'double-underline-text',
      'small-caps', 'double-struck', 'fullwidth-text', 'circled-text', 'negative-circled',
      'squared-text', 'negative-squared', 'parenthesized-text', 'aesthetic-text',
      'hearts-text', 'stars-text', 'sparkles-text', 'flowers-text', 'bold-gothic-font',
      'sans-serif-font', 'bold-underline-text', 'cursive-underline', 'upside-down-text',
    ],
    usageTips: [
      'Go to your Facebook profile, click Edit Profile, and paste Unicode text into any field.',
      'Facebook page names support Unicode — a bold or script style makes pages more memorable.',
      'Use bold Unicode in posts to create visual headlines without relying on images.',
      'Strikethrough text in comments is a fun way to show edits or corrections.',
      'Hearts and star decorators work great around special announcements or event posts.',
      'Events and group descriptions support Unicode — great for creating themed content.',
      'Facebook Marketplace listings with bold Unicode headlines tend to get more clicks.',
    ],
    icon: '👥',
  },
  {
    id: 'whatsapp-font-generator',
    platform: 'whatsapp',
    name: 'WhatsApp Font Generator',
    description: 'Unicode and styled text for WhatsApp messages, status, and group names.',
    longDescription:
      'WhatsApp supports both its own Markdown-like formatting (bold, italic, strikethrough) and full Unicode rendering. Unicode fancy text styles go beyond what WhatsApp\'s own formatting allows, giving you access to cursive, gothic, circled, and dozens of other visual styles. These are especially popular in WhatsApp status messages, group names, and broadcast messages where you want to stand out from standard text.',
    supportedStyleIds: [
      'cursive-font', 'bold-text', 'italic-font', 'bold-italic-font', 'bold-cursive-font',
      'strikethrough-text', 'underline-text', 'small-caps', 'fullwidth-text',
      'circled-text', 'upside-down-text', 'hearts-text', 'stars-text', 'sparkles-text',
      'flowers-text', 'superscript-text', 'aesthetic-text', 'vaporwave-text',
    ],
    usageTips: [
      'Open WhatsApp and long-press the text field to paste your generated Unicode text.',
      'WhatsApp status supports Unicode — use cursive or aesthetic text for a distinctive look.',
      'Group names support Unicode characters — bold gothic or script styles make groups stand out.',
      'Note: some older Android phones may display boxes instead of supplementary plane characters.',
      'WhatsApp Business display names support Unicode — great for brand differentiation.',
      'Hearts and flower decorators add warmth to messages and status updates.',
      'Avoid very long aesthetic/fullwidth text in messages — it can appear very large on some devices.',
    ],
    icon: '💬',
  },
  {
    id: 'youtube-font-generator',
    platform: 'youtube',
    name: 'YouTube Font Generator',
    description: 'Unicode text for YouTube channel names, descriptions, and comments.',
    longDescription:
      'YouTube fully renders Unicode in channel names, video descriptions, comments, and community posts. Using bold, script, or Gothic Unicode text in your channel name or video titles can help your content stand out in search results and on the channel page. Comment engagement can also be boosted by using distinctive Unicode styling that catches the eye as users scroll through comment sections.',
    supportedStyleIds: [
      'bold-text', 'italic-font', 'bold-italic-font', 'cursive-font', 'bold-cursive-font',
      'gothic-font', 'small-caps', 'strikethrough-text', 'underline-text', 'circled-text',
      'negative-circled', 'squared-text', 'monospace-font', 'double-struck',
    ],
    usageTips: [
      'Channel names allow Unicode — bold or script styles make your brand more memorable.',
      'Video descriptions support Unicode — use bold for section headers.',
      'Comments stand out with Gothic or Cursive Unicode styles.',
      'YouTube Studio supports pasting Unicode into all text fields.',
      'Community posts render Unicode fully — good for announcements and polls.',
      'Keep channel name styling consistent with your brand across all platforms.',
    ],
    icon: '▶️',
  },
];

export const PLATFORMS_BY_ID: Record<string, PlatformDefinition> = Object.fromEntries(
  PLATFORMS.map(p => [p.id, p])
);

export function getPlatformById(id: string): PlatformDefinition | undefined {
  return PLATFORMS_BY_ID[id];
}
