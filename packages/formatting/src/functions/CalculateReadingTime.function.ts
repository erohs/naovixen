import { wordsPerMinute } from '../constants/WordsPerMinute.const';

/** Whole minutes, rounded up, and never less than one. */
export function calculateReadingTime(text: string): number {
  const words = text.split(/\s+/).filter((word) => word.length > 0);

  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}
