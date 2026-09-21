import type { PoetryCategory, PoetryMood } from "@/types/poetry";

const categoryInstructions: Record<PoetryCategory, string> = {
  love: `
Write about love, connection, longing, memories,
unspoken feelings and emotional intimacy.
`,

  heartbreak: `
Write about separation, silence, memories,
loss, regret and unanswered feelings.
`,

  life: `
Write about life, time, people, reality,
change, experience and lessons.
`,

  motivation: `
Write about struggle, failure, courage,
discipline, persistence and self-belief.
`,

  success: `
Write about dreams, patience, sacrifice,
consistency, hard work and achievement.
`,

  healing: `
Write about letting go, acceptance,
self-respect, peace and emotional recovery.
`,
};

export function createPoetryPrompt({
  category,
  mood,
  topic,
}: {
  category: PoetryCategory;
  mood: PoetryMood;
  topic?: string;
}) {
  return `
You are an expert Nepali poet.

Create an original Nepali poem in natural Devanagari.

CATEGORY:
${category}

CATEGORY DIRECTION:
${categoryInstructions[category]}

MOOD:
${mood}

TOPIC:
${topic || "Choose a meaningful topic yourself."}

STYLE:
- emotional
- human
- simple
- poetic
- relatable
- contemporary Nepali
- deep but understandable
- suitable for social media
- suitable for a 15–45 second voiceover

RULES:
- Write only in Nepali Devanagari.
- Do not use emojis.
- Do not use hashtags.
- Avoid overly Sanskritized vocabulary.
- Avoid clichés.
- Do not copy existing poetry.
- Create a strong emotional opening.
- Use short readable lines.
- Create 8–16 lines.

Return ONLY valid JSON:

{
  "title": "poem title",
  "poem": "line 1\\nline 2\\nline 3"
}
`;
}