import { useState } from 'react';

// Simulated hashtag database by category
const HASHTAG_DATA: Record<string, { mega: string[]; macro: string[]; micro: string[] }> = {
  fitness: {
    mega: ['fitness', 'workout', 'gym', 'motivation', 'health', 'fitlife', 'exercise', 'training'],
    macro: ['fitnessmotivation', 'workoutoftheday', 'gymlife', 'fitnessjourney', 'healthyliving', 'bodybuilding', 'fitfam', 'cardio'],
    micro: ['homeworkout', 'fitnesstips', 'morningworkout', 'strengthtraining', 'fitnesscommunity', 'gymrat', 'personaltrainer', 'weightloss', 'musclebuilding', 'crossfit', 'yogalife', 'pilates', 'running', 'cycling', 'mealprep'],
  },
  travel: {
    mega: ['travel', 'wanderlust', 'adventure', 'explore', 'vacation', 'trip', 'holiday', 'tourism'],
    macro: ['travelgram', 'travelphotography', 'travelblogger', 'instatravel', 'worldtravel', 'backpacking', 'travelhacks', 'solotravel'],
    micro: ['traveldiaries', 'hiddentravel', 'bucketlist', 'traveltips', 'luxurytravel', 'familytravel', 'roadtrip', 'beachlife', 'mountainlife', 'citybreak', 'culturaltravel', 'ecotourism', 'digitalnomad', 'travelblog', 'weekendgetaway'],
  },
  food: {
    mega: ['food', 'foodie', 'cooking', 'recipe', 'delicious', 'yummy', 'foodphotography', 'homemade'],
    macro: ['foodblogger', 'foodstagram', 'instafood', 'foodlovers', 'healthyfood', 'vegan', 'vegetarian', 'baking'],
    micro: ['mealprep', 'plantbased', 'glutenfree', 'dairyfree', 'easyrecipes', 'dinnerideas', 'lunchideas', 'breakfastideas', 'desserts', 'foodporn', 'cheflife', 'cookingathome', 'weeknightdinner', 'comfortfood', 'foodart'],
  },
  fashion: {
    mega: ['fashion', 'style', 'ootd', 'outfit', 'clothing', 'streetstyle', 'fashionista', 'model'],
    macro: ['fashionblogger', 'fashionstyle', 'outfitoftheday', 'fashionweek', 'luxuryfashion', 'sustainablefashion', 'vintage', 'streetwear'],
    micro: ['capsulewardrobe', 'minimalstyle', 'casualoutfit', 'workwear', 'editorialfashion', 'outfitinspo', 'styleguide', 'fashiontips', 'thrifted', 'slowfashion', 'plussize', 'mensfashion', 'womensfashion', 'accessories', 'shoestagram'],
  },
  photography: {
    mega: ['photography', 'photo', 'photographer', 'photooftheday', 'picoftheday', 'portrait', 'landscape', 'nature'],
    macro: ['photographylovers', 'streetphotography', 'travelphotography', 'naturephotography', 'portraitphotography', 'minimalphotography', 'photogram', 'photographylife'],
    micro: ['goldenhourephotography', 'moodypresets', 'lightroom', 'cameralife', '35mm', 'filmphotography', 'analogphotography', 'architecturephotography', 'astrophotography', 'wildlifephotography', 'foodphotography', 'nightphotography', 'photographytips', 'canonphotography', 'nikonphotography'],
  },
};

const DEFAULT_HASHTAGS = {
  mega: ['content', 'creator', 'viral', 'trending', 'instagood', 'love', 'follow', 'like'],
  macro: ['contentcreator', 'socialmedia', 'digitalmarketing', 'influencer', 'personalbrand', 'community', 'inspiration', 'creativity'],
  micro: ['contentcreators', 'creatoreconomy', 'smallcreator', 'growyourpage', 'organicgrowth', 'communitybuilding', 'nichegrowth', 'tipsandtricks', 'howto', 'tutorial', 'behindthescenes', 'dayinmylife', 'vlog', 'podcastlife', 'newsletter'],
};

function findHashtags(topic: string) {
  const lower = topic.toLowerCase();
  for (const [key, data] of Object.entries(HASHTAG_DATA)) {
    if (lower.includes(key)) return data;
  }
  // Build generic hashtags from topic
  const word = lower.replace(/\s+/g, '');
  return {
    mega: [...DEFAULT_HASHTAGS.mega.slice(0, 5), word, `${word}life`, `${word}community`],
    macro: [...DEFAULT_HASHTAGS.macro.slice(0, 5), `${word}blogger`, `${word}tips`, `${word}inspiration`],
    micro: [...DEFAULT_HASHTAGS.micro.slice(0, 10), `${word}journey`, `${word}goals`, `${word}motivation`, `${word}daily`, `best${word}`],
  };
}

export default function HashtagGenerator() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<{ mega: string[]; macro: string[]; micro: string[] } | null>(null);
  const [copied, setCopied] = useState<'all' | 'mega' | 'macro' | 'micro' | null>(null);

  function generate() {
    if (!topic.trim()) return;
    setResult(findHashtags(topic));
  }

  async function copyGroup(group: 'all' | 'mega' | 'macro' | 'micro') {
    if (!result) return;
    let tags: string[];
    if (group === 'all') {
      tags = [...result.mega, ...result.macro, ...result.micro];
    } else {
      tags = result[group];
    }
    const text = tags.map((t) => `#${t}`).join(' ');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(group);
      setTimeout(() => setCopied(null), 2000);
    } catch { /* ignore */ }
  }

  const allCount = result ? result.mega.length + result.macro.length + result.micro.length : 0;

  return (
    <div className="w-full space-y-6">
      <div className="flex gap-3">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && generate()}
          placeholder="Enter a topic, niche, or keyword (e.g. fitness, travel, food)"
          className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
        />
        <button
          onClick={generate}
          disabled={!topic.trim()}
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Generate
        </button>
      </div>

      {result && (
        <>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--color-text)]">
              {allCount} hashtags generated
            </span>
            <button
              onClick={() => copyGroup('all')}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              {copied === 'all' ? 'Copied All!' : 'Copy All'}
            </button>
          </div>

          {(
            [
              { key: 'mega' as const, label: 'Mega (1M+ posts)', desc: 'High reach, very competitive', color: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' },
              { key: 'macro' as const, label: 'Macro (100K–1M posts)', desc: 'Good reach, moderate competition', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400' },
              { key: 'micro' as const, label: 'Micro (10K–100K posts)', desc: 'Targeted reach, lower competition', color: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' },
            ] as const
          ).map((group) => (
            <div key={group.key} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-[var(--color-text)]">{group.label}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{group.desc}</div>
                </div>
                <button
                  onClick={() => copyGroup(group.key)}
                  className="flex-shrink-0 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:border-indigo-400"
                >
                  {copied === group.key ? 'Copied!' : 'Copy group'}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {result[group.key].map((tag) => (
                  <span key={tag} className={`rounded-full px-3 py-1 text-xs font-medium ${group.color}`}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {!result && (
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-8 text-center text-sm text-[var(--color-text-muted)]">
          Enter a topic above and click Generate to get 30 relevant hashtags.
        </div>
      )}
    </div>
  );
}
