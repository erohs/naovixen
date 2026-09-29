import { describe, expect, test } from 'vitest';

import { calculateReadingTime } from '../functions/CalculateReadingTime.function';

function repeatWord(count: number): string {
  return Array.from({ length: count }, () => 'word').join(' ');
}

describe('Using calculateReadingTime', () => {
  describe('when the text is exactly one minute of reading', () => {
    test('then it should return one minute', () => {
      expect(calculateReadingTime(repeatWord(200))).toBe(1);
    });
  });

  describe('when the text runs a word past a whole minute', () => {
    test('then it should round up', () => {
      expect(calculateReadingTime(repeatWord(201))).toBe(2);
    });
  });

  describe('when the text is only a few words', () => {
    test('then it should still return one minute', () => {
      expect(calculateReadingTime('Hello there')).toBe(1);
    });
  });

  describe('when the words are separated by runs of whitespace', () => {
    test('then it should count only the words', () => {
      expect(calculateReadingTime(`  ${repeatWord(200).replaceAll(' ', ' \n\t ')}  `)).toBe(1);
    });
  });
});
