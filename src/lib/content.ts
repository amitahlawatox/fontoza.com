export interface StyleContent {
  styleId: string;
  longDescription: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const STYLE_CONTENT: StyleContent[] = [
  // ══════════════════════════════════════════════════════════════════════════════
  // TIER 1 — 800-1000 words each
  // ══════════════════════════════════════════════════════════════════════════════

  {
    styleId: 'cursive-font',
    longDescription: `Cursive fonts have long been associated with elegance, creativity, and personal expression. When you use a cursive font generator like Fontoza, you are not installing a new font — you are using real Unicode characters from the Mathematical Script block (U+1D49C and surrounding code points) that look like flowing, handwritten cursive. These characters were originally intended for mathematical typesetting, but because every device and browser supports Unicode, they render as beautiful script text anywhere you paste them.

Why does this matter for Instagram, TikTok, and other platforms? Because those platforms do not let you choose a custom font. You type in one font and everyone sees the same thing. But if you paste Unicode cursive characters, every viewer sees the same distinctive script — because it is part of the universal character standard, not a local font setting.

Using cursive text in your Instagram bio immediately sets your profile apart. Most bios look identical: same font, same size, same weight. A bio written in cursive Unicode script catches the eye in less than a second because it is visually different from everything around it. Creators who specialize in lifestyle content, fashion, poetry, art, and aesthetic niches find cursive fonts especially well-suited to their brand voice.

On TikTok, your bio is the first thing a potential follower sees when they visit your profile. A cursive bio communicates that you put thought and care into your presentation — a signal that your content will be similarly crafted. Even using just your name or your tagline in cursive creates a professional, polished impression.

Twitter and X users use cursive Unicode text to make certain tweets stand out in busy timelines. A thread opener or a quote written in cursive script creates visual contrast against the sea of regular text, which can improve click-through rates and engagement. Just remember that each Unicode supplementary plane character counts as two characters toward Twitter's limit.

Discord users apply cursive fonts to display names, nicknames, and server bios. In aesthetic servers and creative communities, script fonts signal group culture and shared values. Custom server roles written in cursive also make role lists more visually distinctive.

For WhatsApp, cursive works particularly well in status messages. A quote or personal motto in cursive feels more personal and considered than regular text — the script implies it was written with intention.

How do you use the cursive font generator? Type or paste your text into the box above, and the cursive version appears instantly in the output. Click the copy button and paste it wherever you need it — bio, caption, comment, message, anywhere. The copy-paste workflow takes about three seconds.

The Mathematical Script block covers all 26 uppercase and lowercase letters. Some letters use special Unicode code points: B uses U+212C (Script Capital B), E uses U+2130 (Script Capital E), F uses U+2131, H uses U+210B, I uses U+2110, L uses U+2112, M uses U+2133, and R uses U+211B. Lowercase e uses U+212F, g uses U+210A, and o uses U+2134. The rest come from the main 1D49C block. This mix of code points is exactly why you need a generator — mapping all these exceptions by hand is impractical.

Numbers and punctuation are not mapped in the standard Mathematical Script block, so they pass through as regular characters. This actually creates a nice visual effect in most contexts — the regular numerals complement the script letters naturally.

One common question is whether cursive Unicode text is searchable. The honest answer is: mostly no. Search engines index the Unicode characters, but they may not recognize them as equivalent to their ASCII counterparts. This is not a problem for social media bios and posts, but it is something to keep in mind if you are writing content intended to rank in Google search. For web content, use cursive CSS/font styling instead of Unicode characters.

Related styles worth exploring: Bold Cursive gives the same flowing script but with heavier weight, ideal when you want script that is readable even at small sizes or against complex backgrounds. Italic and Bold Italic provide similar elegance with a more mathematical feel. Gothic (Fraktur) offers dramatic darkness if script elegance is not quite the mood you want.`,
    faqs: [
      {
        question: 'Why does cursive text copy and paste into Instagram?',
        answer: 'The cursive characters generated here are standard Unicode characters from the Mathematical Script block. Unicode is built into every operating system and browser, so any device can display these characters — they are part of the universal text standard, not a custom font that needs to be installed.',
      },
      {
        question: 'Does cursive Unicode text work in Instagram stories?',
        answer: 'Yes, but with a caveat. If you are typing directly on a story using the Instagram text tool, you cannot paste Unicode. However, if you use a design app (Canva, Over, Adobe Express) to create your story image, you can include Unicode text there. For bio and caption fields, Unicode paste works perfectly.',
      },
      {
        question: 'Will everyone see my cursive text the same way?',
        answer: 'Yes — because these are Unicode characters, not a locally installed font, every device and operating system renders them identically. The only exception is very old devices or systems that do not support the Unicode supplementary plane, which might show empty boxes.',
      },
      {
        question: 'Can I use cursive text in my TikTok username?',
        answer: 'TikTok usernames (the @handle) do not support Unicode beyond basic Latin. However, your display name — the name that appears on your profile and in comments — fully supports Unicode cursive text. This is what most creators change to add personality.',
      },
      {
        question: 'Does cursive text work in WhatsApp messages?',
        answer: 'Yes, Unicode cursive text pastes and sends normally in WhatsApp. The recipient sees the same cursive characters as long as their device supports Unicode supplementary plane characters, which all modern smartphones do.',
      },
      {
        question: 'Are there any cursive letters that look different from what I expect?',
        answer: 'A few letters use special Unicode code points that look slightly different from standard script. The lowercase g looks like a script g (ℊ), lowercase e is a script e (ℯ), and some uppercase letters have distinct calligraphic forms. These are the standard Mathematical Script glyphs and represent genuine cursive letterforms.',
      },
      {
        question: 'How many characters can I use in an Instagram bio with cursive text?',
        answer: 'Instagram bios are limited to 150 characters. Each Unicode cursive character counts as one character in Instagram\'s counter, so you get the same 150 characters regardless of whether you use regular or cursive text.',
      },
      {
        question: 'Is cursive text accessible to screen readers?',
        answer: 'Screen readers typically read Unicode Mathematical Script characters as their base letter equivalents, so "𝒽𝑒𝓁𝓁𝑜" would be read as "hello." However, some screen readers may announce them differently or struggle with the supplementary plane characters. For accessibility-critical content, use regular text.',
      },
    ],
  },

  {
    styleId: 'bold-text',
    longDescription: `Bold text is one of the most universally understood signals in typography: it means "this is important." But on platforms like Instagram, Twitter, TikTok, and most messaging apps, you cannot apply bold formatting through the interface — there is no bold button, no Ctrl+B shortcut. That is where Unicode Mathematical Bold characters come in.

The Unicode Mathematical Bold block (starting at U+1D400) contains dedicated bold versions of every letter A through Z and a through z, plus digits 0 through 9. These are distinct Unicode characters that inherently look bold — they are not styled bold by CSS or HTML, they are visually heavy characters in their own right. This means they appear bold everywhere: in bios, captions, comments, tweets, messages, and any other text field that accepts Unicode.

Why use bold text on social media? Attention. In a feed or comment section where everything looks the same, bold text is a pattern interrupt. Your eye naturally lands on heavier text before lighter text. Product sellers use bold Unicode in listing titles on Facebook Marketplace and Instagram Shopping. Coaches use bold text to emphasize their tagline in their bio. Content creators use it to make key phrases stand out in long captions.

On Instagram, a common strategy is to combine styles: write your name in bold Unicode, your profession in cursive Unicode, and your call to action in regular text. The visual hierarchy this creates communicates information in the fraction of a second before a visitor decides whether to read more or scroll away.

For Discord users, bold Unicode is useful because it combines with Discord's own Markdown bold. If you wrap bold Unicode text in **asterisks**, it gets double-processed — the Unicode characters are already visually bold, and Discord's renderer makes them even more prominent. The resulting text is exceptionally heavy, useful for rules channels, announcement bots, and important notices.

On Twitter and X, bold Unicode text is a way to create visual emphasis that Markdown cannot achieve, since Twitter does not support any Markdown formatting at all. A thread that uses bold Unicode for its key claims reads more like a formatted article than a stream of tweets — this tends to improve time-on-page and quote-tweet rates.

YouTube channel descriptions benefit from bold Unicode as structural headers. Since YouTube video descriptions do not support HTML or Markdown, Unicode bold is the only way to create visually distinct section headers that guide viewers to the timestamps and links they need.

The Mathematical Bold block maps cleanly: every letter has a corresponding bold character, and digits 0–9 map to bold digits (𝟎–𝟗). Punctuation and special characters are not in this block and pass through unchanged. This is intentional — mixed bold letters and regular punctuation looks natural and readable.

For situations where you want bold with additional styling, consider Bold Italic (𝑨𝒃𝒄) for expressive emphasis, Sans-Serif Bold (𝗔𝗯𝗰) for a cleaner modern look, or Bold Cursive (𝓐𝓫𝓬) for elegant weight. Each serves a slightly different aesthetic need.

Performance note: in A/B tests run by social media marketing researchers, posts featuring bold Unicode text in the first sentence of the caption consistently outperform posts without it in terms of "See More" clicks. The reason is simple — visual differentiation creates curiosity. When your caption looks different from every other caption, users pause long enough to read it.

One thing to keep in mind: Unicode bold characters are not the same as semantic HTML bold. Search engines understand strong/em tags as indicating importance. They do not understand that 𝐇𝐞𝐥𝐥𝐨 is the same word as Hello. For SEO purposes on web pages, use proper HTML bold tags. For social media and messaging apps where you want visual bold, Unicode is the perfect solution.`,
    faqs: [
      {
        question: 'Why does bold text work in Instagram bio and captions?',
        answer: 'Unicode Mathematical Bold characters are distinct characters in the Unicode standard — they just happen to look bold. Since Instagram renders all Unicode characters, these appear bold for every viewer, regardless of their device or app version.',
      },
      {
        question: 'Is Unicode bold text the same as pressing Ctrl+B?',
        answer: 'No — Ctrl+B applies a font-weight CSS style that only works in HTML environments. Unicode bold characters are actual characters that look heavy by design. Ctrl+B bold does not survive copy-paste into Instagram or Twitter, but Unicode bold does.',
      },
      {
        question: 'Does bold text count as more characters on Twitter?',
        answer: 'Yes. Most Unicode Mathematical Bold characters are in the supplementary plane (above U+FFFF), so Twitter counts each one as 2 characters toward your 280-character limit. A 10-letter bold word uses 20 of your character budget.',
      },
      {
        question: 'Can I use bold text in my Instagram display name?',
        answer: 'Yes. Both your display name (the one shown on your profile) and your username (the @handle) support Unicode. Display names support all Unicode, including bold. The @handle is limited to Latin letters, numbers, periods, and underscores.',
      },
      {
        question: 'What is the difference between bold and sans-serif bold?',
        answer: 'Regular bold (𝐀𝐛𝐜) uses the Mathematical Bold block, which has a serif style. Sans-Serif Bold (𝗔𝗯𝗰) uses the Mathematical Sans-Serif Bold block, which has clean lines without serifs. Sans-serif bold looks more modern and geometric; regular bold feels more traditional.',
      },
      {
        question: 'Does bold Unicode work in Discord?',
        answer: 'Yes, and you can combine it with Discord Markdown. Wrapping bold Unicode text in **double asterisks** makes it go through Discord\'s bold renderer as well, producing double-bold text that is very visually prominent.',
      },
      {
        question: 'Will bold Unicode text show up in Google searches?',
        answer: 'Google indexes Unicode bold characters as separate characters, not as the letter they represent. So a page with 𝐇𝐞𝐥𝐥𝐨 will not rank for the search "Hello" unless it also contains the regular word. Use Unicode bold for visual purposes only, not for SEO.',
      },
      {
        question: 'Are there any bold characters that are missing from this generator?',
        answer: 'Numbers 0–9 have bold versions (𝟎–𝟗). All 52 letters (A–Z, a–z) are covered. Most punctuation marks do not have dedicated bold Unicode equivalents and pass through as regular characters, which is the standard and expected behavior.',
      },
    ],
  },

  {
    styleId: 'italic-font',
    longDescription: `Italic text in typography traditionally signals emphasis, titles, foreign words, or a shift in voice. In the world of social media and messaging, where you cannot apply HTML or CSS formatting, Unicode Mathematical Italic characters offer the only way to achieve true italic text that survives copy-paste.

The Mathematical Italic block (U+1D434 and surrounding) contains slanted versions of every letter. These are characters used in mathematical notation to represent variables and formulas — the italic style we use for social media is a side effect of mathematics needing a visually distinct letter style. One special case: the lowercase letter h uses the Unicode character ℎ (U+210E, Planck Constant), which is the conventional mathematical italic lowercase h.

Italic text is subtler than bold text, which makes it useful for different purposes. Where bold text demands attention with weight, italic text invites attention with elegance. In Instagram bios, italic phrases feel more like a personal statement than a marketing claim. In long captions, an italic phrase pulls the reader's eye to something intimate or considered. It reads as thought, emphasis, and nuance rather than authority.

For TikTok creators, italic text in the bio reads as aspirational and artistic. Motivational coaches, writers, photographers, and musicians find that italic bios communicate creative identity. The slant implies movement and dynamism — appropriate for video-first platforms.

On Twitter, italic Unicode is particularly effective in quote-tweets. When you quote a tweet and add your commentary in italic, there is an implied typographic distinction between "their words" and "my interpretation" — a convention borrowed from editorial writing that resonates with readers accustomed to journalism and commentary.

Unlike bold text, italic Unicode characters do not have dedicated digit equivalents — numbers pass through as regular characters. This actually creates a useful visual rhythm: regular-weight numbers embedded in italic text look like anchoring facts amid flowing prose.

Discord uses italic Unicode well in roleplay servers and aesthetic communities. Server descriptions, channel topics, and pinned messages in italic Unicode convey a different personality than regular or Markdown-italic text. Roleplay communities especially appreciate unicode italic for character names and story flavor text because it persists regardless of user formatting settings.

The difference between Mathematical Italic and Sans-Serif Italic is notable: Italic has slight serifs (it looks like the italic style of a traditional serif typeface), while Sans-Serif Italic (𝘈𝘣𝘤) is cleaner and more contemporary. For most social media contexts, regular italic feels warmer and more personal; sans-serif italic feels more modern and editorial.

Combining italic with other effects produces interesting results. Italic with a combining strikethrough (̶) creates a style popular in editorial and humor contexts — it reads like a corrected first draft. Bold italic combines weight with lean, making it the most expressive of the pure mathematical font styles.

Accessibility note: most screen readers pronounce italic Unicode characters the same as their regular counterparts, but some may read them as "mathematical italic letter A" rather than just "A." For general social media use, this is rarely an issue, but worth knowing if your audience includes people who rely on screen readers.`,
    faqs: [
      {
        question: 'How is Unicode italic different from pressing the italic button?',
        answer: 'The italic button in word processors applies CSS font-style: italic, which slants the current font. This style is stripped when you paste into Instagram, Twitter, or most apps. Unicode italic characters are actual Unicode code points that are visually slanted by design — they survive any paste operation.',
      },
      {
        question: 'Why does the letter h look different in italic?',
        answer: 'The lowercase h in Mathematical Italic uses U+210E, which is officially the "Planck Constant" character. It is the standard italic h in mathematics and looks slightly different from a regular italic h. This is correct and expected behavior.',
      },
      {
        question: 'Does italic text work in Instagram captions?',
        answer: 'Yes. Paste your italic Unicode text anywhere in your caption. It renders identically for all viewers. You can mix italic with regular text in the same caption — just paste each styled portion separately.',
      },
      {
        question: 'Can I use italic text in my name on TikTok?',
        answer: 'Your TikTok display name (the one people see on your profile) supports Unicode italic. The @username handle does not — it only allows basic Latin characters, numbers, underscores, and periods.',
      },
      {
        question: 'Are numbers included in the italic font?',
        answer: 'The Mathematical Italic block does not include italic digit variants. Numbers 0–9 pass through as regular characters. This is standard behavior and actually looks natural — regular numerals fit well with italic text.',
      },
      {
        question: 'What is the difference between italic and cursive on this site?',
        answer: 'Italic (𝐻𝑒𝑙𝑙𝑜) uses the Mathematical Italic block and looks like a slanted, serif typeface. Cursive (𝒜𝑒𝓁𝓁ℴ) uses the Mathematical Script block and looks like flowing handwritten calligraphy. Cursive is more ornate; italic is more elegant and restrained.',
      },
      {
        question: 'Does italic Unicode text work in WhatsApp?',
        answer: 'Yes. WhatsApp has its own italic formatting (single underscores around text), but Unicode italic characters work differently — they are actual characters, not formatting codes. Both methods produce italic-looking text, but Unicode italic survives being copied out of WhatsApp.',
      },
      {
        question: 'Does italic text affect SEO?',
        answer: 'Not positively. Search engines do not recognize Unicode italic letters as equivalent to their regular counterparts. For any content you want to rank in search, use HTML semantic tags like <em> instead of Unicode italic. For social media, Unicode italic is ideal.',
      },
    ],
  },

  {
    styleId: 'bold-italic-font',
    longDescription: `Bold italic is the typographic combination that signals maximum emphasis — when you need something to be both important and expressive. In print and digital publishing, bold italic is used for book titles in running text, critical warnings, and emotional peaks in narrative writing. In the Unicode standard, Mathematical Bold Italic characters (beginning at U+1D468) bring this combined style to any platform that accepts Unicode.

What makes bold italic distinctively useful for social media is its expressiveness. Where plain bold text commands authority and plain italic text suggests elegance, bold italic does both at once. It reads as urgent, emotional, and carefully chosen. Content creators who write long-form captions find that a single phrase in bold italic acts like a highlighter — it is the thing the reader will remember when they scroll past.

Instagram bio writers use bold italic to layer meaning into short phrases. Consider "𝑨𝒎𝒃𝒊𝒕𝒊𝒐𝒖𝒔 𝒃𝒚 𝒏𝒂𝒕𝒖𝒓𝒆, 𝑨𝒓𝒕𝒊𝒔𝒕 𝒃𝒚 𝒄𝒉𝒐𝒊𝒄𝒆" — the flowing slant and extra weight make this feel like it was penned by hand, not typed into a form. Paired with a regular-text website link and a cursive tagline, this creates a bio with genuine typographic hierarchy.

Discord servers use bold italic Unicode for rules that carry the highest priority — the combination of weight and slant makes something stand out even in a text-dense rules channel. It is also used in storytelling bots, where narrator text appears in bold italic to distinguish it from character dialogue.

TikTok creators use bold italic for their niche statement — the one phrase that tells a new visitor exactly who the creator is. In the split-second evaluation that decides whether someone follows or scrolls away, a bold italic statement reads more confidently than regular text.

For Twitter, bold italic creates an irresistible combination for quote-tweet commentary. Writing your opinion in bold italic makes it visually stand out from the quoted text above it, creating an automatic visual hierarchy without any HTML. This is particularly effective for opinion writers, critics, and educators building a Twitter presence.

The Mathematical Bold Italic block covers all 26 uppercase (𝑨–𝒁) and lowercase letters (𝒂–𝒛). Like italic, it does not include digit variants, so numbers pass through as regular characters. The letterforms are noticeably more elaborate than regular bold or italic — each character has the thick strokes of bold and the dynamic angle of italic, making them recognizable even at small sizes.

For maximum visual impact with additional effects: combine bold italic with a combining underline (U+0332) to produce underlined bold italic, or with strikethrough for an editorial "crossed out" effect. These combinations are particularly effective in creative writing communities and art-focused accounts.

Bold italic pairs well with other Unicode styles in the same post or bio. A common combination: display name in bold italic, profession in regular text, call-to-action link in small caps. Each distinct style creates a visual layer that guides the eye through the bio in a natural reading sequence.`,
    faqs: [
      {
        question: 'What is bold italic Unicode text used for?',
        answer: 'Bold italic Unicode is used for maximum emphasis in social media bios, captions, and messages. It combines the authority of bold with the expressiveness of italic, making it ideal for taglines, key phrases, and anything you want readers to remember.',
      },
      {
        question: 'How does bold italic differ from just bold or just italic?',
        answer: 'Bold text (𝐇𝐞𝐥𝐥𝐨) has heavy strokes but sits upright. Italic text (𝐻𝑒𝑙𝑙𝑜) is slanted but light in weight. Bold italic (𝑯𝒆𝒍𝒍𝒐) combines heavy strokes with dynamic slant — it is the most visually prominent of the three.',
      },
      {
        question: 'Does bold italic work in Instagram bio?',
        answer: 'Yes. Paste bold italic Unicode text directly into your Instagram bio field. It renders correctly for all viewers on all devices. You can mix it with regular text in the same bio.',
      },
      {
        question: 'Can bold italic be combined with underline or strikethrough?',
        answer: 'Yes — first generate your bold italic text, then run it through the underline or strikethrough generator on this site. The combining diacritic will apply to whatever characters are there, including bold italic Unicode characters.',
      },
      {
        question: 'Does bold italic text count double on Twitter?',
        answer: 'Yes. Supplementary plane Unicode characters count as 2 characters each on Twitter. Bold italic letters are in the supplementary plane, so a 10-letter bold italic phrase uses 20 characters of your 280-character budget.',
      },
      {
        question: 'Is there a sans-serif bold italic style?',
        answer: 'Yes — this site includes Sans-Serif Bold Italic (𝘼𝙗𝙘), which uses the Mathematical Sans-Serif Bold Italic block. It has the same weight and slant as bold italic but with clean, geometric letterforms instead of serif strokes.',
      },
      {
        question: 'Does bold italic work in Facebook posts?',
        answer: 'Yes. Facebook renders Unicode bold italic characters correctly in posts, comments, and bios. It works well for Facebook page taglines and post headlines where you want emphasis without using all-caps.',
      },
      {
        question: 'Why is bold italic so popular on social media?',
        answer: 'In platforms where you cannot use HTML or Markdown, bold italic is one of the few ways to create real visual hierarchy in text. It makes key information literally stand out from the surrounding content, which drives higher attention and engagement.',
      },
    ],
  },

  {
    styleId: 'gothic-font',
    longDescription: `Gothic text — more precisely called Fraktur or Blackletter — is one of the most dramatically distinctive Unicode text styles available. It has deep historical roots: this letterform was the dominant script of German-speaking regions from the 12th century through the mid-20th century, used for everything from religious manuscripts to newspapers and books. Today, it carries strong aesthetic associations with medieval history, heavy metal music, tattoo culture, streetwear, and dark or dramatic visual identities.

The Unicode Mathematical Fraktur block (beginning at U+1D504) provides a complete set of uppercase and lowercase Fraktur letters. A few letters use special code points: C uses U+212D (Fraktur Capital C = ℭ), H uses U+210C (Black-Letter Capital H = ℌ), I uses U+2111 (Black-Letter Capital I = ℑ), R uses U+211C (Black-Letter Capital R = ℜ), and Z uses U+2128 (Black-Letter Capital Z = ℨ). All other letters come from the main Fraktur block.

Why is Gothic text so popular on social media? It signals a specific aesthetic — one that is simultaneously historical and countercultural. Tattoo artists, heavy metal fans, streetwear brands, dark fiction writers, and people interested in Gothic or medieval aesthetics gravitate toward Fraktur text as a visual shorthand for their identity. A Gothic Instagram bio says "I know what I'm about" in a way that regular text never could.

Discord communities that focus on gaming (especially dark fantasy games like Elden Ring, Dark Souls, or Baldur's Gate), metal music, occultism, and alternative lifestyles make heavy use of Gothic Unicode text. Server names, role titles, and channel names in Fraktur immediately set the aesthetic tone before a new member even reads the rules.

Instagram accounts in the tattoo, streetwear, grunge, vintage, and dark aesthetics spaces regularly use Gothic text in their bios and captions. It signals niche membership — followers who see a Fraktur bio immediately understand the aesthetic territory they are entering.

Twitter use is more niche but impactful: a single tweet in Gothic Unicode stops the scroll because it is so visually foreign in a standard timeline. Music critics, horror writers, and aesthetic accounts use it strategically for announcements or for text that is meant to feel weighty and significant.

The Bold Gothic (Bold Fraktur) variant available on this site takes the drama even further — the heavier strokes make the medieval aesthetic even more pronounced and readable even at small sizes.

One practical note about Gothic text: Fraktur letterforms can be harder to read for some people, especially those not familiar with the script. Upper-case letters in particular look quite different from their Roman equivalents. If readability is a priority (long captions, important announcements), consider using Gothic for display text only — a word or phrase — and regular text for the content that needs to be read. This is actually the traditional use of Fraktur in print design: it was used for display headlines and chapter headings, with more readable text for body copy.

For maximum impact, Gothic text pairs well with dark imagery, high-contrast photography, and minimalist designs where the letterform can take center stage. Combining Gothic text with a combining underline or strikethrough creates effects that feel like illuminated manuscript annotations — beautiful and dramatic.`,
    faqs: [
      {
        question: 'What is Gothic or Fraktur text?',
        answer: 'Gothic text (also called Fraktur or Blackletter) is a letterform style developed in medieval Europe and widely used through the 20th century. In Unicode, it exists as the Mathematical Fraktur block — a set of characters used in mathematical notation that double as aesthetic display text for social media.',
      },
      {
        question: 'Why does Gothic text look different from regular letters?',
        answer: 'Fraktur letterforms developed separately from the Roman/Latin alphabet we use today. They have distinctive angular strokes, decorative flourishes, and different forms for many letters. Upper-case letters especially look dramatically different — for example, Gothic S (𝔖) looks nothing like a regular S.',
      },
      {
        question: 'Is Gothic text hard to read?',
        answer: 'It can be, especially for people not familiar with Fraktur letterforms. Upper-case letters are hardest to recognize. For short display text like a name or tagline, Gothic is very effective. For longer text that needs to be read quickly, it may be harder to parse.',
      },
      {
        question: 'What platforms support Gothic Unicode text?',
        answer: 'Gothic Unicode text works on Instagram, TikTok, Twitter, Facebook, Discord, WhatsApp, and YouTube — any platform that renders Unicode. Most modern devices have fonts that include Fraktur characters, though the exact rendering may vary slightly between devices.',
      },
      {
        question: 'What is the difference between Gothic and Bold Gothic?',
        answer: 'Gothic (Fraktur) has regular-weight strokes in the traditional blackletter style. Bold Gothic (Bold Fraktur) uses the Mathematical Bold Fraktur block — the same letterforms but with noticeably heavier strokes. Bold Gothic is more dramatic and readable at smaller sizes.',
      },
      {
        question: 'Can I use Gothic text in my Discord server name?',
        answer: 'Yes. Discord server names, channel names, role names, and user bios all support Unicode. Gothic text in server names immediately sets the aesthetic tone for the entire server.',
      },
      {
        question: 'Does Gothic font work on all phones?',
        answer: 'Most modern smartphones (iOS 14+ and Android 9+) include system fonts with Fraktur characters. Older devices may display empty squares for some Fraktur code points. The characters with special code points (C=ℭ, H=ℌ, I=ℑ, R=ℜ, Z=ℨ) are in the basic multilingual plane and render on virtually all devices.',
      },
      {
        question: 'What kind of content goes well with Gothic text?',
        answer: 'Gothic text complements dark fantasy, heavy metal, tattoo, streetwear, medieval, Gothic literature, horror, and alternative aesthetics. It is also used in academic and historical contexts where the medieval association adds gravitas.',
      },
    ],
  },

  {
    styleId: 'strikethrough-text',
    longDescription: `Strikethrough text — text with a line drawn through the middle — is created on this site using Unicode combining character U+0336 (Combining Long Stroke Overlay). Unlike HTML strikethrough (<s> or <del> tags), this approach works anywhere Unicode renders: Instagram, TikTok, Twitter, Discord, WhatsApp, Facebook, and more.

The way combining characters work is clever: U+0336 is a zero-width character that, when placed after any character, draws a horizontal line through that character. The generator places this combining character after every letter and digit in your text, producing the strikethrough effect character by character. Spaces are typically left undecorated to preserve natural word spacing.

Why is strikethrough text so popular? It carries inherent editorial meaning — crossed-out text implies that something was there and was removed, corrected, or changed. This creates an immediate narrative: the reader sees both the crossed-out word and wonders about the implied replacement or reason for the crossing. Humor writers use it for comedic effect ("I definitely did not eat five tacos for dinner 𝘁𝗼𝗱𝗮𝘆̶ ̶𝘁̶𝗵̶𝗶̶𝘀̶ ̶𝘄̶𝗲̶𝗲̶𝗸̶"). Business accounts use it to show prices that have been reduced.

Instagram accounts use strikethrough in captions to create a "self-correcting" voice that feels honest and relatable. A caption that "corrects itself" in strikethrough tells a story with more layers than a straight statement. It is also used in before/after contexts, habit-tracking posts, and "expectations vs reality" content.

On Discord, strikethrough exists as native Markdown (~~double tildes~~), but Unicode strikethrough offers a different visual look — the combining character version produces a thinner, more precise line that sits at a different visual position than Discord's built-in strikethrough. Some users prefer the Unicode version for stylistic reasons.

Twitter has no native strikethrough formatting, making Unicode strikethrough one of the only ways to achieve the effect. It is regularly used for joke tweets, self-aware commentary, and content that wants to show "the thing I almost said before thinking better of it."

WhatsApp users use strikethrough (which WhatsApp supports natively via single tildas) but Unicode strikethrough also works and survives copy-paste from other apps.

Combining strikethrough with other styles produces distinctive effects: bold strikethrough looks authoritative while crossed out; gothic strikethrough has a dark, dramatic quality; italic strikethrough feels editorial and writerly. All these combinations are available on this site.

Technical note: because the combining character attaches to individual characters rather than spanning the whole word, very long strikethrough text can sometimes appear slightly inconsistent across different rendering engines. It works well for short to medium phrases and single words, which covers most social media use cases.`,
    faqs: [
      {
        question: 'How does Unicode strikethrough work?',
        answer: 'The generator places Unicode combining character U+0336 (Combining Long Stroke Overlay) after each letter. This zero-width character draws a horizontal line through the preceding character. Because this uses actual Unicode characters, it works anywhere Unicode renders, including all social media platforms.',
      },
      {
        question: 'Is this the same as Discord strikethrough (~~text~~)?',
        answer: 'No. Discord\'s ~~tilde~~ strikethrough is Markdown formatting that only works inside Discord. Unicode combining strikethrough works on any platform and is a different visual effect — thinner line, slightly different position. Both produce crossed-out text but through different mechanisms.',
      },
      {
        question: 'Does strikethrough text work on Instagram?',
        answer: 'Yes. Unicode combining characters render correctly on Instagram in bios, captions, and comments. The strikethrough line appears for all viewers on all devices.',
      },
      {
        question: 'Can I combine strikethrough with bold or italic?',
        answer: 'Yes. This site allows you to apply strikethrough to already-styled text. Bold strikethrough (crossed-out bold letters), italic strikethrough, Gothic strikethrough, and cursive strikethrough are all available as combined styles.',
      },
      {
        question: 'Does strikethrough text work in WhatsApp?',
        answer: 'Yes, Unicode strikethrough works in WhatsApp messages and status. WhatsApp also has its own native strikethrough (surrounding text with ~tildes~), but the Unicode version looks different and works without the formatting syntax.',
      },
      {
        question: 'Why does my strikethrough look slightly off on some characters?',
        answer: 'The combining character approach applies the strike line to each character independently. On some fonts, the line may sit at a slightly different height for certain characters. This is a rendering variation across different operating systems and fonts, and is generally subtle enough not to be noticeable in normal use.',
      },
      {
        question: 'Can strikethrough text be used in TikTok bios?',
        answer: 'Yes. TikTok displays Unicode combining characters correctly in bios and display names. Strikethrough in a TikTok bio creates a distinctive, witty visual effect.',
      },
      {
        question: 'Is strikethrough text accessible?',
        answer: 'Screen readers typically read strikethrough Unicode text as the base characters without announcing the strikethrough. For content where the strikethrough communicates meaning (like a price reduction or correction), provide the context in the surrounding regular text as well.',
      },
    ],
  },

  {
    styleId: 'small-caps',
    longDescription: `Small capitals are an elegant typographic device where text appears in uppercase letterforms but at the height of lowercase letters. In traditional typography, small caps were cut as separate typeface variants — smaller versions of the full capitals. In Unicode, they exist as phonetic and linguistic characters from the IPA (International Phonetic Alphabet) and related blocks.

The small caps characters used on this site come from several Unicode blocks: ᴀ (U+1D00), ʙ (U+0299), ᴄ (U+1D04), and others scattered through the Phonetic Extensions and Spacing Modifier Letters blocks. Together they cover all 26 letters, though some (like X) lack a true small-cap equivalent and use the closest available character.

Why use small caps on social media? The effect is distinctly professional and literary. Small caps have deep roots in book typography — they appear in running heads, chapter titles, author names, and sidebar callouts in well-designed books. Using small caps in a social media bio signals design awareness and typographic taste. It says: "I care about how this looks."

The effect is particularly powerful in professional and creative contexts: writers, designers, academics, photographers, architects, and brands who want a refined, understated visual identity find small caps ideal. It is versatile enough to feel at home in both corporate and artistic contexts.

Instagram bios in small caps have an interesting visual quality: they are all caps in shape (which communicates confidence) but regular-height (which avoids the aggressive shouting quality of actual all-caps). This makes small caps ideal for displaying your name, title, or niche descriptor with authority without aggression.

TikTok creators in professional or educational niches (finance, legal, medical, academic) often use small caps in their bios to signal expertise without looking flashy. The restraint of small caps communicates maturity.

Twitter display names in small caps are immediately recognizable as thoughtfully designed — few accounts bother with small caps because they are less well-known than bold or italic styles, so using them creates distinctiveness by virtue of rarity.

Discord server operators use small caps for role names and channel categories because the style creates visual separation from regular user-generated content, suggesting administrative structure and intentional organization.

One practical note: because the small caps characters come from phonetic and linguistic Unicode blocks rather than a dedicated small-caps block, the letterforms are not a perfect match for a properly designed small-caps typeface. The "s" maps to ꜱ (U+A731), the "f" maps to ꜰ (U+A730), and some letters use phonetic characters that are slightly different from what a typographer might choose. Despite this, the overall visual effect reads clearly as small caps for most viewers.`,
    faqs: [
      {
        question: 'What are small caps?',
        answer: 'Small caps are uppercase letterforms reduced to the height of lowercase letters. They create a distinctive typographic effect that reads as confident and professional without the aggressive quality of full all-caps text.',
      },
      {
        question: 'Where do the small caps characters come from?',
        answer: 'The small caps characters on this site come from IPA (International Phonetic Alphabet), Phonetic Extensions, and Spacing Modifier Letters Unicode blocks. These characters were designed for linguistic notation but visually serve as small capital letterforms.',
      },
      {
        question: 'Are all letters available as small caps?',
        answer: 'All 26 letters have a small caps approximation. Some use very close equivalents (like ᴀ for A), while others (like X, which maps to a lowercase x) are less precise. The overall visual effect reads as small caps even with these variations.',
      },
      {
        question: 'Does small caps work in Instagram bio?',
        answer: 'Yes. All the Unicode phonetic characters used for small caps render correctly on Instagram. The effect is clear and distinctive in bios and captions.',
      },
      {
        question: 'What is the difference between small caps and regular all-caps?',
        answer: 'Regular all-caps types every letter as a full-height capital. Small caps display capitals at the height of lowercase letters. All-caps can feel like shouting; small caps feel refined and deliberate.',
      },
      {
        question: 'Can I use small caps in a YouTube channel name?',
        answer: 'Yes. YouTube channel names support Unicode. Small caps create a memorable, literary channel name that stands out from standard all-caps or regular names.',
      },
      {
        question: 'Do small caps work on all phones?',
        answer: 'Most modern smartphones display the phonetic Unicode characters used for small caps. Older devices may not render all of them correctly. The most reliable characters are the core IPA letters in the U+1D00-U+1D7F range.',
      },
      {
        question: 'What aesthetic does small caps convey?',
        answer: 'Small caps convey refinement, literary taste, and design awareness. They are associated with book typography, editorial design, academic writing, and luxury brands. They signal that the creator is thoughtful about how their text looks.',
      },
    ],
  },

  {
    styleId: 'double-struck',
    longDescription: `Double-struck letters — also called blackboard bold — are characters with double vertical strokes, visually resembling the way mathematicians write capital letters on blackboards to distinguish them from regular variables. These characters come from the Mathematical Double-Struck block (U+1D538 and surrounding, with several in the Basic Multilingual Plane: ℂ, ℍ, ℕ, ℙ, ℚ, ℝ, and ℤ).

In mathematics, blackboard bold conventionally denotes number sets: ℝ for real numbers, ℤ for integers, ℕ for natural numbers, ℂ for complex numbers. This mathematical heritage gives double-struck text an intellectual, academic quality that other Unicode styles do not carry. For accounts in science, mathematics, philosophy, data, and technology niches, double-struck text signals content domain instantly.

Visually, double-struck text is unlike anything in standard typography. Each character has an extra stroke — most visible in the vertical stems of letters like H (𝕳 vs 𝐇), I (𝕀 vs 𝐈), and N (ℕ vs N). The effect is something between outlined and outlined-with-fill, producing characters that look 3D without any actual depth effect.

Instagram bios for STEM creators, academics, and tech professionals benefit from double-struck text precisely because it looks unusual without being unreadable. A bio that reads "𝔸𝕀 𝕣𝕖𝕤𝕖𝕒𝕣𝕔𝕙𝕖𝕣 | 𝔹𝕦𝕚𝕝𝕕𝕖𝕣 | 𝕎𝕣𝕚𝕥𝕖𝕣" is immediately distinctive and signals a specific content niche.

Discord servers with mathematical, scientific, or intellectual themes use double-struck for role names, channel categories, and decorative headers. The characters render well on both light and dark Discord themes because their extra strokes remain visible at all contrast levels.

Twitter users in mathematics, data science, philosophy, and related fields use double-struck display names and occasional tweets for a recognizable aesthetic shorthand. Given that several double-struck letters (ℝ, ℕ, ℤ) are among the most recognizable math symbols to educated readers, using them signals mathematical literacy.

Digits have dedicated double-struck versions (𝟘–𝟡) which are included in this generator. This completeness makes double-struck one of the few styles where numbers look as distinctive as letters.

For combining effects: double-struck text with a combining underline creates a style that looks like annotated mathematical proofs — professional and highly distinctive. Double-struck with strikethrough has an academic "crossed-out theorem" quality.`,
    faqs: [
      {
        question: 'What are double-struck or blackboard bold letters?',
        answer: 'Double-struck (blackboard bold) letters have extra vertical strokes that make them look like letters drawn on a blackboard with doubled lines. They originated in mathematics to denote number sets and are part of the Unicode Mathematical Alphanumeric Symbols block.',
      },
      {
        question: 'Why do some double-struck letters look different from others?',
        answer: 'Letters like C (ℂ), H (ℍ), N (ℕ), P (ℙ), Q (ℚ), R (ℝ), and Z (ℤ) have special code points in the Basic Multilingual Plane. These are the conventional mathematical set symbols and have slightly different appearances from the supplementary plane versions. They are more widely supported across devices.',
      },
      {
        question: 'Do double-struck characters include numbers?',
        answer: 'Yes. Digits 0–9 have dedicated double-struck versions (𝟘–𝟡) from the Mathematical Double-Struck Digits block. These render the same extra-stroke style as the letters.',
      },
      {
        question: 'Does double-struck text work on Instagram?',
        answer: 'Yes. Instagram renders all Unicode double-struck characters. They look particularly good in bios and short captions where their distinctive appearance creates visual contrast.',
      },
      {
        question: 'What niche is double-struck text best for?',
        answer: 'Double-struck text naturally appeals to STEM (science, technology, engineering, mathematics) creators, academics, data scientists, programmers, and anyone in intellectual or analytical fields. The mathematical heritage of the characters creates instant niche signaling.',
      },
      {
        question: 'Can I mix double-struck with regular text?',
        answer: 'Yes — mixing double-struck with regular characters in the same bio or caption is a common approach. You might use double-struck for your name or title and regular text for the details.',
      },
      {
        question: 'Does double-struck work in Discord usernames?',
        answer: 'Yes. Discord display names and server nicknames support Unicode double-struck characters. They render well on both light and dark Discord themes.',
      },
      {
        question: 'Is double-struck the same as outlined text?',
        answer: 'Not exactly. True outlined text has an outline stroke around the character. Double-struck text has an internal double stroke — specifically the vertical stems of letters are doubled. The result looks similar to outlined text but is a distinct letterform design.',
      },
    ],
  },

  {
    styleId: 'upside-down-text',
    longDescription: `Upside-down text flips each character to its vertical mirror using Unicode lookalike characters, then reverses the string so it reads left-to-right when the reader physically tilts their head — or reads naturally if the device is flipped 180 degrees. It is a novelty that never fails to make people stop scrolling.

The upside-down transformation uses a curated set of Unicode character equivalents: ɐ for a, q for b, ɔ for c, p for d, ǝ for e, ɟ for f, ƃ for g, ɥ for h, ᴉ for i, ɾ for j, ʞ for k, ɯ for m, u for n, ɹ for r, ʇ for t, ʌ for v, ʍ for w, ʎ for y, and so forth. For uppercase letters: ∀ for A, Ɔ for C, Ǝ for E, Ⅎ for F, ˥ for L, ⊥ for T, ∩ for U, Λ for V, ⅄ for Y. After mapping each character, the entire string is reversed so it reads in the correct order when flipped upside down.

Punctuation also gets the treatment: ¡ for !, ¿ for ?, ˙ for period, and bracket pairs swap with each other.

Why does upside-down text get such high engagement? Because it creates a genuine visual puzzle that demands interaction. When someone sees upside-down text in their feed, the brain automatically tries to decode it — this cognitive engagement drives longer time spent on the post, which social media algorithms interpret as quality signal and show to more people.

TikTok comments in upside-down text frequently get responses because they force the reader to interact (tilt the phone) or feel clever when they can read it anyway. This interaction pattern boosts the comment's visibility.

Instagram bio upside-down text creates a memorable profile — once a visitor has tilted their phone to read your bio, they are invested. Investment creates follow rates above the baseline.

Twitter upside-down text is a guaranteed engagement driver for accounts that use it strategically. An opening tweet of a thread in upside-down text creates curiosity that drives "See More" clicks.

Discord and gaming communities use upside-down text for troll messages, puzzle channels, and themed servers where the unusual presentation is part of the experience.

One consideration: upside-down text is harder to read than standard text, especially long passages. It works best for short, memorable phrases: names, taglines, single sentences. For longer content that needs to be read, use it as an accent rather than the primary text.`,
    faqs: [
      {
        question: 'How does upside-down text work?',
        answer: 'The generator maps each character to a Unicode lookalike that is visually upside-down, then reverses the entire string. When the reversed upside-down string is read with the device flipped 180 degrees, it appears as normal upright text.',
      },
      {
        question: 'Does upside-down text work on all platforms?',
        answer: 'Yes — because the characters are standard Unicode, they render on Instagram, TikTok, Twitter, Facebook, Discord, WhatsApp, and any platform that supports Unicode. The upside-down appearance is built into the character itself, not a rendering effect.',
      },
      {
        question: 'Can I read upside-down text without turning my phone?',
        answer: 'Yes, with practice. The character substitutions are consistent, so with familiarity you can decode upside-down text normally. Some readers find the mirrored letterforms recognizable enough to read without tilting.',
      },
      {
        question: 'Are all letters available in upside-down form?',
        answer: 'Most letters have upside-down Unicode equivalents. A few (like s, x, z) look the same or nearly the same upside down and use the same character. Numbers also have approximate upside-down versions: 6 and 9 swap with each other, 1 maps to Ɩ, 2 to ᄅ, and so on.',
      },
      {
        question: 'Does upside-down text include punctuation?',
        answer: 'Yes. Common punctuation is mapped: ! becomes ¡, ? becomes ¿, . becomes ˙, and bracket pairs swap sides. Rarer punctuation passes through unchanged.',
      },
      {
        question: 'Why does upside-down text get high engagement?',
        answer: 'Upside-down text creates a visual pattern break that triggers curiosity. The brain reflexively tries to decode unusual text, which means viewers spend more time on posts or bios with upside-down text. This engagement signals quality to social media algorithms.',
      },
      {
        question: 'Is upside-down text the same as mirrored text?',
        answer: 'No. Upside-down text flips characters vertically and reverses the string. Mirrored text flips characters horizontally (left-right) and also reverses the string. The visual effects are different — upside-down produces vertically flipped characters, mirrored produces characters that look like their reflection in a vertical mirror.',
      },
      {
        question: 'Can upside-down text be combined with other styles?',
        answer: 'Yes — this site includes an Upside-Down Bold variant that applies the upside-down transformation to bold characters first. Combining effects creates very distinctive text.',
      },
    ],
  },

  {
    styleId: 'vaporwave-text',
    longDescription: `Vaporwave text is one of the most recognizable visual aesthetics of the internet age. The defining characteristics — wide spacing between characters, fullwidth Latin letters, pastel colors, and 80s-90s imagery — emerged from the Vaporwave music genre around 2011-2012 and have since spread throughout internet culture, social media aesthetics, and design.

The core typographic element of vaporwave text is the use of Unicode Fullwidth characters (from the Halfwidth and Fullwidth Forms block, U+FF01 to U+FF60 and U+FFE0 to U+FFE6) combined with wide spacing. Fullwidth characters are double-width characters originally designed for East Asian typography, where characters occupy a square grid rather than the variable-width grid of Latin text. When you replace standard Latin letters with fullwidth equivalents, each character takes up roughly twice the horizontal space, creating the characteristic stretched appearance of vaporwave text.

The vaporwave text generator on this site maps to fullwidth characters AND adds fullwidth space (　, U+3000) between each character, creating the maximally spaced aesthetic that defines the style. The result is text that reads slowly, demands attention, and creates a sense of nostalgic digital space.

Why is vaporwave text so popular on Instagram and TikTok? Because it is instantly legible as an aesthetic signal — anyone familiar with internet culture immediately recognizes vaporwave typography and understands the aesthetic territory. For creators whose content aligns with lo-fi music, pastel aesthetics, retro gaming, synthesizer music, or ironic nostalgic content, vaporwave text is a natural fit.

TikTok's soft aesthetic communities make heavy use of vaporwave and fullwidth text. Creators who post about self-care, aesthetics, ASMR, lo-fi study sessions, and similar content use vaporwave text in their bios and captions as a visual marker of aesthetic community membership.

Twitter aesthetic accounts use vaporwave text in display names and occasional posts. The wide spacing makes vaporwave text look distinctive even at small sizes in a tweet timeline.

Discord servers themed around lo-fi music, chill communities, and aesthetic spaces regularly use fullwidth and vaporwave text for server names, channel names, and welcome messages. The spaced-out text creates visual breathing room that fits the relaxed community vibe.

The fullwidth text variant (without the extra character spacing) is slightly different from the full vaporwave style and is also available on this site. Both use the same fullwidth character set; the vaporwave version adds inter-character spacing.

One practical consideration: vaporwave text takes up more horizontal space than regular text. In Twitter, each fullwidth character may count as 2 characters. In Instagram bios, a vaporwave-spaced sentence may not fit within the 150-character visual width. Use vaporwave text for short phrases rather than long sentences to maintain readability and fit within platform limits.`,
    faqs: [
      {
        question: 'What makes text look like vaporwave?',
        answer: 'Vaporwave text uses Unicode fullwidth Latin characters (double-width versions of regular letters) combined with wide character spacing. This creates the stretched, spaced-out appearance associated with the vaporwave aesthetic that emerged around 2011-2012.',
      },
      {
        question: 'What is the difference between vaporwave and fullwidth text?',
        answer: 'Both use the same Unicode fullwidth characters. Vaporwave text additionally places a fullwidth space (　) between every character, creating extra-wide spacing. Fullwidth text without the spacing is slightly more compact but still looks wider than regular text.',
      },
      {
        question: 'Does vaporwave text work on Instagram?',
        answer: 'Yes. The fullwidth Unicode characters and fullwidth spaces render correctly on Instagram in bios, captions, and comments. The vaporwave aesthetic looks particularly good in a single-line bio or a short tagline.',
      },
      {
        question: 'Why does vaporwave text have so much space between letters?',
        answer: 'The extra spacing comes from two sources: fullwidth characters are approximately twice as wide as normal Latin characters, AND the generator adds a fullwidth ideographic space (three times wider than a regular space) between each character. Together, these produce the maximally spaced vaporwave appearance.',
      },
      {
        question: 'Does vaporwave text count as more characters on Twitter?',
        answer: 'Yes. Fullwidth characters are in the Basic Multilingual Plane but are counted by Twitter as wide characters. The extra spaces also count as characters. Vaporwave text can use 3-4x as many characters as the equivalent regular text.',
      },
      {
        question: 'What content niches use vaporwave text?',
        answer: 'Vaporwave text is associated with lo-fi music, soft aesthetics, retro gaming, synthesizer/electronic music, pastel art, ASMR content, self-care communities, and ironic nostalgia content. Any creator whose work fits these aesthetics can use vaporwave text to signal community membership.',
      },
      {
        question: 'Can vaporwave text be combined with other styles?',
        answer: 'Yes. The Vaporwave Cursive variant on this site applies wide spacing to cursive script characters for a dreamy, romantic version of the vaporwave aesthetic. You can also apply decorators (hearts, stars) around vaporwave text.',
      },
      {
        question: 'Does vaporwave text work on Discord?',
        answer: 'Yes. Discord renders fullwidth characters and ideographic spaces correctly. Vaporwave text in Discord server names and channel names creates a very distinctive aesthetic.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // TIER 2 — 300-500 words each
  // ══════════════════════════════════════════════════════════════════════════════

  {
    styleId: 'bold-cursive-font',
    longDescription: `Bold cursive font combines the flowing elegance of mathematical script with extra stroke weight, creating letters that are both graceful and visually powerful. This style uses the Mathematical Bold Script Unicode block (U+1D4D0 through U+1D503), which provides a complete set of heavy-weight script letterforms.

Where regular cursive feels delicate and poetic, bold cursive commands attention. It is the style you would use for your name in a bio when you want it to look like a personal signature rather than a label. Fashion brands, luxury product accounts, personal brands in the creative industries, and lifestyle coaches gravitate toward bold cursive as a signature style.

On Instagram, bold cursive works especially well for display names and the first line of a bio. It creates the visual impression of a custom logotype without requiring actual design work — the Unicode characters do the heavy lifting. Paired with regular text for the details, bold cursive creates genuine visual hierarchy.

TikTok creators in beauty, fashion, fitness, and lifestyle niches use bold cursive for bios that feel brand-worthy. A single name or tagline in bold cursive elevates the entire profile aesthetic.

For Discord, bold cursive is popular in aesthetic servers where the server name and category headers should feel intentional and designed. It pairs particularly well with pastel or romantic visual themes.

The digits are not included in the Mathematical Bold Script block and pass through as regular characters — this creates a natural-looking mix of styled letters and standard numerals.`,
    faqs: [
      {
        question: 'What is bold cursive Unicode text?',
        answer: 'Bold cursive text uses the Mathematical Bold Script Unicode block — a set of heavy-weight flowing letterforms that combine script calligraphy with bold stroke weight.',
      },
      {
        question: 'How is bold cursive different from regular cursive?',
        answer: 'Regular cursive (Mathematical Script) has lighter strokes and feels delicate. Bold cursive (Mathematical Bold Script) has heavier strokes that make the letterforms more prominent and readable at small sizes.',
      },
      {
        question: 'Does bold cursive work in Instagram bio?',
        answer: 'Yes — paste directly into your Instagram bio or display name. It works perfectly and renders identically for all viewers.',
      },
      {
        question: 'What platforms support bold cursive text?',
        answer: 'All major platforms: Instagram, TikTok, Twitter, Facebook, WhatsApp, Discord, and YouTube. Any platform that renders Unicode supports these characters.',
      },
      {
        question: 'Can I combine bold cursive with underline or strikethrough?',
        answer: 'Yes. The Cursive Underline and Bold Cursive Strikethrough styles on this site apply combining diacritics to bold cursive text.',
      },
      {
        question: 'Are numbers included in bold cursive?',
        answer: 'The Mathematical Bold Script block does not include digit variants. Numbers pass through as regular characters.',
      },
    ],
  },

  {
    styleId: 'monospace-font',
    longDescription: `Monospace text uses the Unicode Mathematical Monospace block (U+1D670 through U+1D6A3 for letters, U+1D7F6 through U+1D7FF for digits), which provides fixed-width versions of every letter and number. Each character in monospace occupies the same horizontal space, replicating the appearance of typewriter output or code editor fonts.

The cultural associations of monospace text are powerful: typewriters, terminals, code, 1980s computing, tech aesthetics, and the "hacker" visual language of movies and media. For content creators in technology, coding, retro gaming, cyberpunk aesthetics, and data science, monospace text signals authenticity within those communities.

Discord users in programming servers frequently use monospace Unicode in display names and bio text to signal developer identity. Discord also has native code formatting (backticks for inline code), but Unicode monospace creates a different visual effect that persists outside of Discord's rendering context.

Instagram bio for developers, data scientists, and tech creators looks immediately distinctive with monospace Unicode. A bio like "𝚏𝚞𝚕𝚕-𝚜𝚝𝚊𝚌𝚔 𝚍𝚎𝚟 | 𝟸𝟶+ 𝙼𝙻 𝚙𝚛𝚘𝚓𝚎𝚌𝚝𝚜" reads as authentic to technical audiences.

Monospace digits (𝟶–𝟿) are included and render in the same fixed-width style as the letters, making monospace one of the few styles where numbers look as distinctive as the alphabetic characters.`,
    faqs: [
      {
        question: 'What is Unicode monospace text?',
        answer: 'Unicode monospace text uses the Mathematical Monospace block — characters that are all equal width, replicating the look of typewriter or code editor fonts.',
      },
      {
        question: 'Does monospace work in Instagram bios?',
        answer: 'Yes. Monospace Unicode characters render correctly on Instagram and create a distinctive tech-aesthetic look in bios and captions.',
      },
      {
        question: 'Are digits included in monospace?',
        answer: 'Yes. Digits 0–9 have monospace equivalents (𝟶–𝟿) and render in the same fixed-width style as the letters.',
      },
      {
        question: 'What is monospace text best used for?',
        answer: 'Monospace works best for tech, coding, developer, data science, cyberpunk, and retro computing aesthetics. It signals technical identity instantly.',
      },
      {
        question: 'Is monospace good for Discord?',
        answer: 'Yes — Discord display names, bios, and server names all support Unicode monospace. It complements Discord\'s native code formatting.',
      },
    ],
  },

  {
    styleId: 'circled-text',
    longDescription: `Circled text places each letter inside a circle using Unicode Enclosed Alphanumerics (uppercase Ⓐ–Ⓩ at U+24B6–U+24CF, lowercase ⓐ–ⓩ at U+24D0–U+24E9, and circled digits ⓪–⑨). The result looks like each character is a button or badge — playful, structured, and highly distinctive.

Both uppercase and lowercase variants are covered, making circled text one of the most versatile enclosed-letter styles. The circled digits range from ⓪ (circled zero) through ⑨ (circled digit 9).

Instagram accounts in education, wellness, gaming, and visual arts use circled text for bullet points in their bios. A list of interests or services in circled text looks significantly more designed than a regular dash-separated list. It is also used for numbered steps in tutorial captions.

TikTok creators use circled text to create lists in their bios that look ordered and professional without the rigid feel of actual numbering. Ⓢ𝗸𝗶𝗻𝗰𝗮𝗿𝗲 • Ⓜ𝗮𝗸𝗲𝘂𝗽 • Ⓗ𝗮𝗶𝗿 creates instant visual hierarchy.

Discord servers use circled text for role names (Ⓜ𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿, Ⓥ𝗜𝗣, Ⓜ𝗲𝗺𝗯𝗲𝗿) that stand out from regular text in role lists and member profiles.`,
    faqs: [
      {
        question: 'What is circled text?',
        answer: 'Circled text uses Unicode Enclosed Alphanumeric characters — each letter is enclosed within a circle character. Both uppercase and lowercase versions are available.',
      },
      {
        question: 'Does circled text include numbers?',
        answer: 'Yes. Circled digits ⓪ through ⑨ are included. These are Unicode characters from the Enclosed Alphanumerics block.',
      },
      {
        question: 'What is the difference between circled and negative circled?',
        answer: 'Circled letters have an outline circle — white/transparent background with a ring around the letter. Negative circled (🅐–🅩) fills the circle with black, producing white letters on a dark background.',
      },
      {
        question: 'Does circled text work in WhatsApp?',
        answer: 'Yes. Circled text characters are in the Basic Multilingual Plane (BMP) and render correctly on virtually all modern devices, including WhatsApp.',
      },
      {
        question: 'Can I use circled text for lists in Instagram bio?',
        answer: 'Yes — circled letters are an excellent way to create visually structured lists in Instagram bios. Each item starting with a circled letter looks designed rather than plain.',
      },
    ],
  },

  {
    styleId: 'bold-gothic-font',
    longDescription: `Bold Gothic (Mathematical Bold Fraktur) takes the dramatic, medieval Fraktur letterforms and renders them with heavier strokes, making the blackletter aesthetic even more striking and readable. The characters come from the Mathematical Bold Fraktur block (U+1D56C through U+1D59F).

The increased stroke weight compared to regular Gothic addresses one of the main criticisms of Fraktur text: that it can be hard to read at small sizes. Bold Gothic retains the medieval drama while being more legible in thumbnail-size text, making it better suited for social media contexts where text may appear very small on some devices.

Instagram accounts in heavy metal, tattoo culture, streetwear, dark aesthetics, and Gothic/alternative communities find Bold Gothic more practical than regular Gothic for the same reason: it reads clearly even in a small phone display. A profile using Bold Gothic immediately communicates its aesthetic community without sacrificing legibility.

Discord servers with dark fantasy, tabletop RPG, and metal music themes use Bold Gothic for server names and category headers. The heavier strokes make the Fraktur letterforms visible even in Discord's sidebar, which displays text at small sizes.

TikTok accounts in alternative aesthetics, dark fantasy content, and historical reenactment use Bold Gothic in bios and overlaid on video thumbnails.`,
    faqs: [
      {
        question: 'How is bold gothic different from regular gothic?',
        answer: 'Bold Gothic uses the Mathematical Bold Fraktur block, which has the same letterforms as regular Gothic (Mathematical Fraktur) but with heavier stroke weight. The result is more visually prominent and readable at smaller sizes.',
      },
      {
        question: 'What is bold gothic text good for?',
        answer: 'Bold Gothic is ideal for heavy metal, tattoo, Gothic, medieval, streetwear, and dark aesthetic content. The heavier weight makes it more practical than regular Gothic for small-size text in social media contexts.',
      },
      {
        question: 'Does bold gothic work on Instagram?',
        answer: 'Yes. All Bold Fraktur characters render correctly on Instagram. The heavier strokes make them more visible in bios and captions compared to regular Gothic.',
      },
      {
        question: 'Are numbers included in bold gothic?',
        answer: 'The Mathematical Bold Fraktur block does not include digit variants. Numbers pass through as regular characters.',
      },
    ],
  },

  {
    styleId: 'fullwidth-text',
    longDescription: `Fullwidth text replaces standard Latin characters with their Unicode fullwidth equivalents from the Halfwidth and Fullwidth Forms block (U+FF01–U+FF60). Each fullwidth character is designed to occupy the same width as a Chinese or Japanese character — approximately twice the width of a normal Latin letter.

The resulting text has a unique visual quality: it is recognizably Latin but spaced out and square. This creates the characteristic look of Japanese or Korean brands writing their name in Latin letters, as well as the vaporwave and aesthetic internet culture visual language.

Fullwidth text is the underlying technology for vaporwave aesthetics, but without the extra inter-character spacing, it is slightly more compact while still visually distinctive. Instagram bio writers use it for taglines where the extra width is desirable but extreme spacing would be too much.

Fullwidth text also includes a fullwidth space (U+3000, ideographic space) which is wider than a regular space, contributing to the spaced-out aesthetic of any text using it.

This style is extremely popular in East Asian internet culture, K-pop fan communities, and aesthetic accounts that draw inspiration from Japanese or Korean design aesthetics.`,
    faqs: [
      {
        question: 'What is fullwidth text?',
        answer: 'Fullwidth text replaces Latin characters with their Unicode fullwidth equivalents — double-width versions designed for use alongside East Asian characters. The result looks wider and more spaced than regular text.',
      },
      {
        question: 'Is fullwidth the same as vaporwave?',
        answer: 'Fullwidth text uses the same fullwidth Unicode characters as vaporwave text, but vaporwave text also adds extra spacing between every character. Fullwidth without extra spacing is slightly more compact.',
      },
      {
        question: 'Does fullwidth work in Instagram bios?',
        answer: 'Yes. Fullwidth characters are in the Basic Multilingual Plane and render correctly on all modern devices and in Instagram.',
      },
      {
        question: 'Do fullwidth numbers exist?',
        answer: 'Yes — fullwidth digits ０–９ (U+FF10–U+FF19) are included in this generator.',
      },
    ],
  },

  {
    styleId: 'underline-text',
    longDescription: `Underline text uses Unicode combining character U+0332 (Combining Low Line) placed after each letter to draw an underline. Like the strikethrough combining character, this works anywhere Unicode renders — producing underlined text in platforms that have no native underline formatting option.

Instagram, TikTok, and Twitter have no built-in underline support for regular text fields. Unicode combining underline fills this gap. It is particularly useful for highlighting URLs that cannot be made into actual hyperlinks (Instagram bios), emphasizing key terms in captions, or creating visual structure in longer posts.

Discord has native underline Markdown (__text__), but Unicode combining underline creates a visually different effect — it can be combined with Unicode font styles in ways Discord's Markdown cannot, and it produces a slightly different visual position and thickness.

Combining underline with other styles creates a range of useful effects: bold underline for strong headings, cursive underline for elegant emphasis, and gothic underline for dramatic structure.`,
    faqs: [
      {
        question: 'How does Unicode underline work?',
        answer: 'The generator adds combining character U+0332 after each letter, which draws a low line (underline) under the preceding character. This produces underlined text that works anywhere Unicode renders.',
      },
      {
        question: 'Does underline work in Instagram?',
        answer: 'Yes. Unicode combining underline renders correctly in Instagram bios and captions, providing underlined text on a platform with no native underline formatting.',
      },
      {
        question: 'Is this different from Discord\'s __underline__ Markdown?',
        answer: 'Yes. Discord\'s Markdown underline only works inside Discord. Unicode combining underline works anywhere and can be combined with Unicode font styles.',
      },
    ],
  },

  {
    styleId: 'sans-serif-font',
    longDescription: `Mathematical Sans-Serif text (U+1D5A0 through U+1D5D3) provides clean, geometric letterforms without serifs. The result is a modern, contemporary text style that reads like a sans-serif web font but works anywhere Unicode is supported.

Sans-serif text has a minimalist quality that suits professional, tech, and modern aesthetic profiles. It is less ornate than script styles and less dramatic than Gothic, making it a versatile middle ground for profiles that want to look polished without being flashy.

Instagram creators in business, consulting, coaching, and clean aesthetic niches use sans-serif Unicode for bios that convey professionalism without the sterility of all-regular-text. The subtle visual difference from standard text signals intentionality.

Digits have sans-serif equivalents (𝟢–𝟫 from the Mathematical Sans-Serif Digits block), making this a complete style for text including numbers.`,
    faqs: [
      {
        question: 'What is mathematical sans-serif text?',
        answer: 'Mathematical sans-serif text uses the Unicode Mathematical Sans-Serif Alphanumeric block — clean, geometric letterforms without serifs, similar to fonts like Helvetica or Futura but as Unicode characters.',
      },
      {
        question: 'Does sans-serif Unicode include numbers?',
        answer: 'Yes — digits 0–9 have sans-serif equivalents (𝟢–𝟫) in the Mathematical Sans-Serif Digits block.',
      },
      {
        question: 'How is this different from sans-bold or sans-italic?',
        answer: 'Sans-serif (this style) has regular weight and upright letterforms. Sans-Bold adds weight. Sans-Italic adds slant. Sans-Bold-Italic combines both.',
      },
    ],
  },

  {
    styleId: 'zalgo-text',
    longDescription: `Zalgo text is created by stacking multiple Unicode combining diacritics above, below, and through each character, producing text that appears to be corrupted, glitching, or "bleeding" visually. The medium intensity version on this site applies 4 combining characters above and below each letter — enough to create a clearly disturbing visual effect while remaining technically readable.

The name "Zalgo" comes from an internet creepypasta about a corrupting entity. Zalgo text became a widespread internet meme and creative tool in the late 2000s and continues to be used for horror aesthetics, glitch art, troll content, and any context where "corrupted data" is the desired visual theme.

Discord is the primary home of heavy Zalgo text — horror servers, creepypasta communities, and experimental text channels regularly use it. Very heavy Zalgo can break Discord's line-height rendering, causing extreme visual overflow that some users find disorienting (which is often intentional).

Twitter glitch-art accounts, horror fiction writers, and meme accounts use Zalgo for atmospheric effect. A tweet in zalgo text immediately signals "horror" or "corrupted" without any image needed.

Instagram uses zalgo more sparingly — usually as an accent in Halloween content, dark aesthetic profiles, and horror creator bios. Very heavy zalgo in an Instagram bio can be hard to read, so the light version is generally more practical.`,
    faqs: [
      {
        question: 'What is zalgo text?',
        answer: 'Zalgo text stacks multiple Unicode combining diacritics above, below, and through each character, creating a visual effect of corrupted or "glitching" text. The name comes from an internet creepypasta about a corrupting entity.',
      },
      {
        question: 'How many diacritics does medium zalgo use?',
        answer: 'Medium zalgo applies approximately 4 combining characters above and 4 below each letter, selected randomly from a pool of diacritics. The result is noticeably corrupted while remaining parseable.',
      },
      {
        question: 'Does zalgo text work on all platforms?',
        answer: 'Zalgo text works anywhere that renders Unicode combining characters — Instagram, Discord, Twitter, and most platforms. Very heavy zalgo may cause rendering issues in some apps.',
      },
      {
        question: 'Is there a lighter and heavier version?',
        answer: 'Yes. This site offers three zalgo intensities: light (subtle, readable), medium (clearly corrupted), and heavy (extreme overflow, maximum chaos).',
      },
    ],
  },

  {
    styleId: 'superscript-text',
    longDescription: `Superscript text uses a collection of Unicode characters from the Superscripts and Subscripts block, Spacing Modifier Letters, and Phonetic Extensions to create raised, miniature versions of letters and digits. The digits use U+2070 (⁰) through U+2079 (⁹) with special cases for 1 (¹), 2 (²), and 3 (³). Letters use scattered characters from U+02B0 and related blocks.

Superscript text creates the appearance of footnote marks, exponents, and academic notation. It gives text a distinctive academic or scientific quality that is unusual enough to stand out.

Instagram users in science, education, and intellectual content niches use superscript text for bios that signal domain expertise. Twitter educators use it for emphasis in long-form tweets.

Note that not all letters have perfect superscript equivalents — some (like Q, which has no standard Unicode superscript) pass through as regular characters. Digits have complete superscript coverage.`,
    faqs: [
      {
        question: 'Do all letters have superscript versions?',
        answer: 'Most letters have superscript Unicode equivalents, but a few (like Q) lack standard Unicode superscripts and pass through as regular characters. All digits 0–9 have complete superscript coverage.',
      },
      {
        question: 'What is superscript text used for?',
        answer: 'Superscript text creates an academic, scientific, or mathematical aesthetic. It is used for footnote-style emphasis, exponent notation aesthetics, and distinctive bio text in STEM and educational contexts.',
      },
    ],
  },

  {
    styleId: 'negative-circled',
    longDescription: `Negative circled text uses Unicode characters 🅐–🅩 (U+1F150–U+1F169) — filled black circles with white uppercase letters. This creates a high-contrast, badge-like appearance that reads as bold and assertive. Only uppercase letters are available in this block; lowercase passes through.

The filled circle creates much stronger visual weight than open-circle Circled text, making negative circled letters feel like buttons, labels, or icons. Instagram accounts use negative circled letters as visual bullets in bios that need to stand out aggressively. Gaming Discord servers use them for rank and role indicators.`,
    faqs: [
      {
        question: 'Are lowercase letters available in negative circled?',
        answer: 'No — the Unicode Negative Circled Latin Letters block only covers uppercase A–Z. Lowercase letters pass through as regular characters.',
      },
      {
        question: 'How is negative circled different from circled?',
        answer: 'Circled letters (Ⓐ–Ⓩ) have an outline circle around the letter. Negative circled (🅐–🅩) fills the circle with black, making a filled badge with a white letter inside — much higher visual contrast.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // TIER 3 & 4 — 200-300 words each
  // ══════════════════════════════════════════════════════════════════════════════

  {
    styleId: 'sans-bold',
    longDescription: `Sans-Serif Bold uses the Mathematical Sans-Serif Bold block (U+1D5D4–U+1D607) to produce heavy-weight, geometric letters without serifs. Bold sans-serif digits (𝟬–𝟵) are included. The clean, thick letterforms have a modern, contemporary feel — closer to a heavy-weight web font than the more traditional Mathematical Bold style. Excellent for bios and posts that want modern weight without the serif warmth of standard bold.`,
    faqs: [
      { question: 'How is sans bold different from regular bold?', answer: 'Regular bold (Mathematical Bold) has slightly serif characteristics. Sans bold (Mathematical Sans-Serif Bold) is fully geometric without serifs — cleaner and more modern.' },
      { question: 'Are numbers included?', answer: 'Yes — digits 𝟬–𝟵 are included from the Mathematical Sans-Serif Bold Digits block.' },
    ],
  },

  {
    styleId: 'sans-italic',
    longDescription: `Sans-Serif Italic (U+1D608–U+1D63B) provides slanted versions of clean, sans-serif letterforms. The effect is contemporary and editorial — like the italic style of a modern web font applied to any text field. It is subtler than script italic and more modern than mathematical italic. Good for social media profiles that want a contemporary aesthetic with subtle visual distinction from regular text.`,
    faqs: [
      { question: 'Does sans italic include digits?', answer: 'The Mathematical Sans-Serif Italic block does not include digit variants. Numbers pass through as regular characters.' },
      { question: 'What is sans italic best for?', answer: 'Sans italic works well for modern, editorial, and minimalist aesthetics — profiles in business, design, journalism, and similar contemporary niches.' },
    ],
  },

  {
    styleId: 'sans-bold-italic',
    longDescription: `Sans-Serif Bold Italic (U+1D63C–U+1D66F) is the maximum-weight, maximum-lean variant of the sans-serif mathematical family. Heavy strokes combined with dynamic slant create the most kinetic of the Unicode mathematical styles. Used for maximum emphasis in a contemporary, geometric aesthetic. This is the go-to style when you need text that looks like a sports brand headline.`,
    faqs: [
      { question: 'Is this the same as bold italic?', answer: 'No — Bold Italic uses the serif Mathematical Bold Italic block. Sans Bold Italic is fully geometric without serifs, giving it a more modern, aggressive feel.' },
      { question: 'Are numbers included?', answer: 'No — sans bold italic does not have digit variants. Numbers pass through.' },
    ],
  },

  {
    styleId: 'squared-text',
    longDescription: `Squared text places each letter inside a square box using the Enclosed Alphanumeric Supplement (U+1F130–U+1F149 for 🄰–🅉). Both upper and lowercase input maps to the same squared characters (the block only has uppercase forms). The boxed appearance creates a structured, label-like visual that works well for category tags, role identifiers, and lists where visual compartmentalization adds clarity.`,
    faqs: [
      { question: 'Are lowercase letters available?', answer: 'The Squared Letters Unicode block only has uppercase forms. Both uppercase and lowercase input map to the squared uppercase characters.' },
      { question: 'Does squared text include numbers?', answer: 'The squared letters block does not include digit variants. Numbers pass through as regular characters.' },
    ],
  },

  {
    styleId: 'negative-squared',
    longDescription: `Negative Squared letters (🅰–🆉, U+1F170–U+1F189) are black-filled squares with white uppercase letters — the squared equivalent of negative circled text. The filled square creates a solid, blocky visual that reads like a keyboard key or button label. Popular in gaming contexts and for creating formatted channel/role names in Discord that look like UI elements.`,
    faqs: [
      { question: 'How is negative squared different from squared?', answer: 'Squared letters have an outline square. Negative squared (🅰–🆉) fills the square with black — a solid, high-contrast block with white letters.' },
      { question: 'Does negative squared include lowercase?', answer: 'Only uppercase forms exist in this Unicode block. Both upper and lowercase input maps to the uppercase squared characters.' },
    ],
  },

  {
    styleId: 'parenthesized-text',
    longDescription: `Parenthesized letters (⒜–⒵, U+249C–U+24B5) and digits (⑴–⑼, U+2474–U+247C) enclose each character in round brackets. Both uppercase and lowercase input maps to the same parenthesized forms (the block uses lowercase letterforms). Parenthesized text has a quirky, organized feel — it looks like ordered list notation but for entire phrases. Good for playful list-style bios and creative numbered content.`,
    faqs: [
      { question: 'Is there a digit zero in parenthesized?', answer: 'The parenthesized digit block starts at ⑴ (1). There is no parenthesized zero — input 0 passes through.' },
      { question: 'What is parenthesized text good for?', answer: 'Parenthesized text works well for ordered lists, quirky bios, and any content where numbered or lettered enumeration adds visual structure.' },
    ],
  },

  {
    styleId: 'double-underline-text',
    longDescription: `Double underline uses Unicode combining character U+0333 (Combining Double Low Line) after each letter, drawing two parallel underlines beneath each character. The double line creates stronger visual emphasis than a single underline — it reads as a heavier accent mark, useful for the most critical elements of a caption or bio. Works well in combination with bold text for headings or key terms.`,
    faqs: [
      { question: 'How is double underline different from single underline?', answer: 'Double underline uses U+0333 which draws two parallel lines beneath each character. Single underline uses U+0332 which draws one line. Double underline is visually heavier and communicates stronger emphasis.' },
      { question: 'Does double underline work on Instagram?', answer: 'Yes — combining character U+0333 renders in Instagram bios and captions on all modern devices.' },
    ],
  },

  {
    styleId: 'subscript-text',
    longDescription: `Subscript text lowers characters below the text baseline using Unicode subscript characters from U+2080–U+2094. Complete subscript coverage exists for digits (₀–₉) and a subset of letters: a (ₐ), e (ₑ), o (ₒ), x (ₓ), h (ₕ), k (ₖ), l (ₗ), m (ₘ), n (ₙ), p (ₚ), s (ₛ), and t (ₜ). Other letters pass through as regular characters. Good for chemical formulas, math notation aesthetics, and unusual bio styling.`,
    faqs: [
      { question: 'Do all letters have subscript versions?', answer: 'No — only a subset of letters (a, e, h, k, l, m, n, o, p, s, t, x) have Unicode subscript equivalents. Other letters pass through as regular characters.' },
      { question: 'Are digits included in subscript?', answer: 'Yes — all digits 0–9 have subscript equivalents (₀–₉) from the Unicode Subscripts block.' },
    ],
  },

  {
    styleId: 'mirrored-text',
    longDescription: `Mirrored text flips each character horizontally using Unicode lookalike characters, then reverses the string, creating text that reads normally in a vertical mirror reflection. Less comprehensive than upside-down text (some characters like many vowels are symmetrical and look the same mirrored), but visually striking for letters with strong horizontal asymmetry. The reversal ensures that the text reads left-to-right when reflected.`,
    faqs: [
      { question: 'How does mirrored text work?', answer: 'Each character is replaced with its horizontal mirror equivalent where one exists in Unicode, then the string is reversed. The result reads normally in a vertical mirror.' },
      { question: 'Is mirrored text the same as upside-down?', answer: 'No — upside-down flips vertically, mirrored flips horizontally. Some characters look the same in both (like O and X), but most differ.' },
    ],
  },

  {
    styleId: 'zalgo-light',
    longDescription: `Zalgo Light applies just 2 combining diacritics above and below each character — enough to create a subtle eerie quality without overwhelming the base text. Light zalgo is the most practical version for social media use: it hints at the corrupted aesthetic while remaining readable. Good for Halloween content, horror writers, and profiles that want a touch of the uncanny without full chaos.`,
    faqs: [
      { question: 'How many diacritics does light zalgo add?', answer: 'Light zalgo adds approximately 2 random combining characters above and 2 below each letter — subtle enough to remain readable while visually distorting the text.' },
      { question: 'Is light zalgo better for Instagram than heavy zalgo?', answer: 'Yes — light zalgo is more readable and less likely to cause rendering issues in Instagram bios and captions.' },
    ],
  },

  {
    styleId: 'zalgo-heavy',
    longDescription: `Zalgo Heavy applies the maximum number of combining diacritics — approximately 8 above, 8 below, and 4 through each character — creating extreme text overflow. The result is barely legible and visually chaotic. This is the style for maximum shock effect in Discord horror servers, creepypasta communities, and content deliberately evoking digital corruption. Note that very heavy zalgo can cause layout issues in some apps.`,
    faqs: [
      { question: 'How extreme is heavy zalgo?', answer: 'Heavy zalgo adds approximately 8 diacritics above, 8 below, and 4 through each character, selected from a large pool. The text visually overflows its line height dramatically.' },
      { question: 'Does heavy zalgo work everywhere?', answer: 'Heavy zalgo can cause rendering issues in some apps. It works best in Discord and Twitter, where extreme combining characters are more reliably handled.' },
    ],
  },

  {
    styleId: 'hearts-text',
    longDescription: `Hearts text wraps your input with heart symbols (♥ text ♥) on both sides. Simple but effective — the heart symbols frame the text and create an immediately warm, romantic, or cute visual impression. Popular for love-related posts, Valentine's content, cute aesthetic accounts, and any content where the emotional register is affectionate.`,
    faqs: [
      { question: 'What symbols are used?', answer: 'This style uses ♥ (U+2665, Black Heart Suit) on both sides of the text.' },
      { question: 'Can I combine hearts with a font style?', answer: 'Yes — the Bold with Hearts style on this site applies the hearts decorator to bold Unicode text for a combined effect.' },
    ],
  },

  {
    styleId: 'stars-text',
    longDescription: `Stars text frames your content with star symbols (★ text ★). The star border creates a glamorous, attention-grabbing impression that works well for announcements, featured content, and accounts in entertainment, beauty, and performance niches. The black star (★, U+2605) is solid and bold — distinct from outline or five-pointed star variations.`,
    faqs: [
      { question: 'What star symbol is used?', answer: 'This style uses ★ (U+2605, Black Star) on both sides of the text — a solid, filled five-pointed star.' },
      { question: 'Does stars text work on all platforms?', answer: 'Yes — ★ is a BMP character and renders on all devices and platforms.' },
    ],
  },

  {
    styleId: 'sparkles-text',
    longDescription: `Sparkles text wraps your content with ✨ emoji on both sides. The sparkles emoji is one of the most universally recognizable positive signals in social media text. It adds a magical, celebratory quality to any text it surrounds. Widely used on TikTok and Instagram for announcing new content, celebrating milestones, and creating a positive, energetic bio atmosphere.`,
    faqs: [
      { question: 'Does the sparkles emoji render on all platforms?', answer: 'Yes — ✨ (U+2728) is a widely supported emoji that renders on all modern devices and social media platforms.' },
    ],
  },

  {
    styleId: 'flowers-text',
    longDescription: `Flowers text surrounds your content with ✿ symbols (U+273F, Black Florette). The floral border creates an elegant, feminine, nature-inspired visual frame. Popular in aesthetic, wellness, nature, and creative content communities. The black florette character is more delicate than emoji flowers but renders reliably across all devices.`,
    faqs: [
      { question: 'What flower symbol is used?', answer: 'This style uses ✿ (U+273F, Black Florette) on both sides — a stylized decorative flower from the Dingbats Unicode block.' },
    ],
  },

  {
    styleId: 'crown-text',
    longDescription: `Crown text frames content with ♛ (U+265B, Black Chess Queen) symbols, creating a regal, royal aesthetic. The chess queen is visually similar to a crown and immediately communicates authority and status. Popular for "queen" aesthetic content, royalty-themed branding, and any creator who wants their content to exude authority and distinction.`,
    faqs: [
      { question: 'What symbol is used for the crown?', answer: 'This style uses ♛ (U+265B, Black Chess Queen), which visually resembles a crown with its ornate top.' },
    ],
  },

  {
    styleId: 'wavy-text',
    longDescription: `Wavy text adds Unicode combining tilde above (U+0303, Combining Tilde) after each character, placing a small wavy diacritic over every letter. The effect resembles the tilde accent but repeated continuously, creating a flowing, wave-like visual quality. Gives text a musical, fluid, or dreamy feeling — used in aesthetic posts and musical content.`,
    faqs: [
      { question: 'How is wavy text created?', answer: 'The combining tilde above (U+0303) is placed after each character, creating a small tilde diacritic over every letter — a wave-like visual effect.' },
      { question: 'Does wavy text work in Instagram?', answer: 'Yes — combining diacritics render in Instagram bios and captions.' },
    ],
  },

  {
    styleId: 'aesthetic-text',
    longDescription: `Aesthetic text uses fullwidth Unicode characters with single regular spaces between each letter, creating a spaced-out look that is slightly less extreme than full vaporwave but clearly wider than regular text. It occupies the middle ground between standard text and vaporwave text — recognizable as aesthetic without being overwhelming. Popular in soft aesthetic, pastel, and K-pop communities.`,
    faqs: [
      { question: 'How is aesthetic text different from vaporwave?', answer: 'Vaporwave text adds fullwidth ideographic spaces between characters. Aesthetic text adds regular spaces between fullwidth characters — less extreme spacing but the same wide-character look.' },
    ],
  },

  {
    styleId: 'bold-sans-italic',
    longDescription: `Bold Sans Italic is the same as Sans-Serif Bold Italic — a heavy-weight slanted sans-serif style from the Mathematical Sans-Serif Bold Italic block. See the Sans-Serif Bold Italic entry for full details. This alias exists because many users search for "bold sans italic" as a term, and it provides the exact same transformation as the primary Sans-Serif Bold Italic style.`,
    faqs: [
      { question: 'Is bold sans italic the same as sans bold italic?', answer: 'Yes — both names refer to the same Mathematical Sans-Serif Bold Italic Unicode block and produce identical results.' },
    ],
  },

  {
    styleId: 'bold-underline-text',
    longDescription: `Bold underline combines Mathematical Bold characters with the combining underline diacritic (U+0332). Each character is first converted to its bold equivalent, then the underline combining character is applied. The result is bold text with a persistent underline — maximum emphasis for section headers, CTAs, and key terms in long captions.`,
    faqs: [
      { question: 'Does bold underline work on Instagram?', answer: 'Yes — both bold Unicode characters and combining underline diacritics render correctly in Instagram bios and captions.' },
    ],
  },

  {
    styleId: 'italic-strikethrough',
    longDescription: `Italic strikethrough applies the strikethrough combining character (U+0336) to Mathematical Italic letters. The resulting text slants while being crossed out — an editorial combination that reads as "the italicized thing I\'m correcting" or "the nuanced point that didn\'t survive the draft." Widely used in ironic commentary and writerly social media content.`,
    faqs: [
      { question: 'How is italic strikethrough made?', answer: 'Mathematical Italic characters are generated first, then U+0336 (combining long stroke overlay) is applied after each character to create the strikethrough line.' },
    ],
  },

  {
    styleId: 'bold-strikethrough',
    longDescription: `Bold strikethrough applies the strikethrough combining character to Mathematical Bold letters. The combination of heavy strokes and a crossing line creates an assertive "cancelled" look — useful for showing revised positions, crossed-out prices, and editorial corrections in a strong visual register.`,
    faqs: [
      { question: 'What is bold strikethrough used for?', answer: 'Bold strikethrough is used for crossed-out prices, revised statements, and editorial corrections where the original bold text is deliberately cancelled.' },
    ],
  },

  {
    styleId: 'cursive-underline',
    longDescription: `Cursive underline combines the flowing Mathematical Script characters with a combining underline. The script letterforms with an underline create an elegant, handwriting-with-underline aesthetic — as if written and underlined in one fluid motion. Popular for emphasis in aesthetic and lifestyle content where the combination of elegance and structure is desired.`,
    faqs: [
      { question: 'Does cursive underline work in Instagram?', answer: 'Yes — script characters and combining underline both render correctly in Instagram bios and captions.' },
    ],
  },

  {
    styleId: 'gothic-bold-underline',
    longDescription: `Gothic underline combines Mathematical Fraktur (Gothic) letters with the combining underline diacritic. The medieval letterforms with an underline create a dramatic, annotated-manuscript aesthetic — as if a monk has underlined a passage of importance. Strong visual choice for Gothic aesthetic, dark fantasy, and historical content creators.`,
    faqs: [
      { question: 'What is gothic underline good for?', answer: 'Gothic underline works well in medieval, dark fantasy, Gothic, and historical aesthetics where drama and visual weight are desired.' },
    ],
  },

  {
    styleId: 'double-struck-bold',
    longDescription: `Double-Struck Underline combines blackboard bold characters with the combining underline. Mathematically-minded creators use this for content that needs to feel like annotated proof — the double-stroke characters with underline look like something important has been highlighted in a math textbook.`,
    faqs: [
      { question: 'What does double-struck underline look like?', answer: 'Each character has the double-stroke appearance of blackboard bold letters, plus an underline diacritic beneath it.' },
    ],
  },

  {
    styleId: 'small-caps-bold',
    longDescription: `Small Caps Bold is a conceptual combination — small caps characters rendered via the same Unicode phonetic characters as Small Caps but with the intent of bold emphasis. Since true bold small caps Unicode is not available, this style uses the standard small caps characters and is listed here for thematic grouping with bold variants.`,
    faqs: [
      { question: 'Is small caps bold actually bolder than small caps?', answer: 'The Unicode small caps characters do not have bold variants, so both styles use the same characters. The distinction is semantic rather than visual.' },
    ],
  },

  {
    styleId: 'monospace-underline',
    longDescription: `Monospace underline combines Mathematical Monospace characters with the combining underline diacritic. Fixed-width letters with underlines look like old terminal output with emphasis — perfect for retro-tech, cyberpunk, and programmer aesthetics where underline formatting historically signaled hyperlinks or important commands.`,
    faqs: [
      { question: 'What is monospace underline used for?', answer: 'It creates a terminal or code-with-emphasis aesthetic — useful for tech, retro-computing, and cyberpunk content.' },
    ],
  },

  {
    styleId: 'circled-bold',
    longDescription: `Circled Bold is the standard Circled text style (Ⓐ–Ⓩ, ⓐ–ⓩ) presented in the context of the bold category. The circled characters are already visually prominent due to their enclosing rings. This entry groups them with bold variants for users browsing by weight category.`,
    faqs: [
      { question: 'Are circled characters actually bold?', answer: 'Circled characters have regular-weight letterforms inside the circle. The "bold" impression comes from the ring, not stroke weight. For filled circles with more visual weight, see Negative Circled.' },
    ],
  },

  {
    styleId: 'vaporwave-cursive',
    longDescription: `Vaporwave Cursive combines Mathematical Script (cursive) characters with fullwidth inter-character spacing. The result is flowing script letters spaced out in the vaporwave aesthetic — dreamy, romantic, and retrowave. An unusual combination that works well for lifestyle, aesthetic, and creative accounts that want both the elegance of script and the spacious quality of vaporwave.`,
    faqs: [
      { question: 'How is vaporwave cursive made?', answer: 'Input is first mapped through the Mathematical Script (cursive) character map, then fullwidth ideographic spaces are inserted between each character.' },
    ],
  },

  {
    styleId: 'bold-hearts',
    longDescription: `Bold Hearts combines Mathematical Bold text with heart symbol framing (♥ bold text ♥). The combination of typographic weight and romantic symbols creates a confident, affectionate aesthetic — strong but warm. Used for romantic announcements, Valentine\'s content, and profiles that want bold personality with a softer emotional edge.`,
    faqs: [
      { question: 'What does bold hearts text look like?', answer: 'Your input text is converted to Mathematical Bold characters, then surrounded by ♥ symbols on each side.' },
    ],
  },

  {
    styleId: 'gothic-strikethrough',
    longDescription: `Gothic Strikethrough applies the combining strikethrough to Mathematical Fraktur letters. The dramatic Fraktur letterforms crossed out creates a dark, rebellious aesthetic — like a medieval decree that has been cancelled. Popular in metal music, dark alternative, and Gothic aesthetic communities where crossed-out dramatic text carries cultural resonance.`,
    faqs: [
      { question: 'What aesthetic does gothic strikethrough convey?', answer: 'Gothic strikethrough reads as dramatic, dark, and rebellious — a combination of medieval weight and the "cancelled" signal of strikethrough.' },
    ],
  },

  {
    styleId: 'double-struck-strikethrough',
    longDescription: `Double-Struck Strikethrough combines blackboard bold characters with the combining strikethrough. Each letter has the distinctive double-stroke of blackboard bold crossed through — a uniquely mathematical "cancelled theorem" look. Used by academic and technical content creators for a distinctive combination of intellectual aesthetic and editorial gesture.`,
    faqs: [
      { question: 'What does double-struck strikethrough look like?', answer: 'Each character has the double-stroke appearance of blackboard bold (𝔸, 𝔹, etc.) with a horizontal strike through the middle.' },
    ],
  },

  {
    styleId: 'cursive-bold-strikethrough',
    longDescription: `Bold Cursive Strikethrough applies the combining strikethrough to Mathematical Bold Script letters. The flowing, heavy script crossed through creates a dramatic editorial effect — a bold statement that has been reconsidered. Used in creative writing contexts, aesthetic drama, and for captions that want to show a strong emotion that is being visually "cancelled."`,
    faqs: [
      { question: 'How is bold cursive strikethrough made?', answer: 'Input is mapped through the Mathematical Bold Script character map, then the combining strikethrough character (U+0336) is applied after each letter.' },
    ],
  },

  {
    styleId: 'upside-down-bold',
    longDescription: `Upside Down Bold applies the upside-down character mapping to standard Latin text, resulting in flipped characters. Note that the upside-down maps use specific Unicode lookalike characters rather than Mathematical Bold characters — the "bold" qualifier here refers to visual weight impression rather than the Mathematical Bold block. The result is flipped text with similar visual presence to bold upside-down text.`,
    faqs: [
      { question: 'Is upside down bold truly bold?', answer: 'The upside-down character map uses specific Unicode lookalike characters. True Mathematical Bold upside-down characters do not exist in Unicode. The style achieves a visually prominent flipped effect.' },
    ],
  },

  {
    styleId: 'fullwidth-bold',
    longDescription: `Fullwidth Bold is the standard Fullwidth text style presented in the bold weight category context. Fullwidth characters are naturally wide due to their double-width design. This listing groups the fullwidth style with bold variants for users browsing by weight, acknowledging that the visual prominence of fullwidth text achieves a bold-like impact through width rather than stroke weight.`,
    faqs: [
      { question: 'How is fullwidth bold different from regular fullwidth?', answer: 'Both use the same Unicode fullwidth characters. Fullwidth Bold is the same transformation grouped thematically with bold styles. The characters themselves do not have separate bold variants.' },
    ],
  },

  {
    styleId: 'superscript-italic',
    longDescription: `Superscript Italic maps text to Unicode superscript characters. The superscript characters used (from the Spacing Modifier Letters and related blocks) have inherent slant in some letterforms, creating an italic-like quality in certain characters. This style groups superscript with italic variants for thematic browsing. Uses the same character map as the standard Superscript style.`,
    faqs: [
      { question: 'Is superscript italic different from regular superscript?', answer: 'Both use the same Unicode superscript characters. This entry is grouped with italic styles for thematic browsing.' },
    ],
  },

  {
    styleId: 'parenthesized-bold',
    longDescription: `Parenthesized Bold uses the standard Parenthesized text characters (⒜–⒵, ⑴–⑼) in the context of the geometric bold category. The parenthesized characters are visually heavy due to their enclosing brackets. This listing helps users browsing for bold geometric styles discover the parenthesized text option. Same transformation as the core Parenthesized style.`,
    faqs: [
      { question: 'Is parenthesized bold different from parenthesized?', answer: 'Both use the same Unicode parenthesized alphanumeric characters. This entry is grouped with geometric bold styles for category browsing.' },
    ],
  },

  {
    styleId: 'monospace-bold',
    longDescription: `Monospace Bold uses the Mathematical Monospace character block. While the standard monospace characters are regular-weight, they are visually prominent due to their fixed-width design. This listing groups monospace with bold styles for users who are looking for heavy, structured text. Same transformation as the core Monospace style — the perceived "boldness" comes from the typewriter-style uniformity rather than stroke weight.`,
    faqs: [
      { question: 'Does monospace bold have heavier strokes than monospace?', answer: 'No — the Mathematical Monospace block has only one weight. The bold impression comes from the fixed-width uniformity. There is no Mathematical Monospace Bold block in Unicode.' },
    ],
  },
];

// Convenience lookup
export const CONTENT_BY_STYLE_ID: Record<string, StyleContent> = Object.fromEntries(
  STYLE_CONTENT.map(c => [c.styleId, c])
);

export function getContentByStyleId(styleId: string): StyleContent | undefined {
  return CONTENT_BY_STYLE_ID[styleId];
}
