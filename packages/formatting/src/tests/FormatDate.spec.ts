import { describe, expect, test } from 'vitest';

import { formatDate } from '../functions/FormatDate.function';

describe('Using formatDate', () => {
  describe('when given an ISO date', () => {
    test('then it should write it out in British English', () => {
      expect(formatDate('2026-09-02')).toBe('2 September 2026');
    });
  });

  describe('when given a time late in the day, UTC', () => {
    test('then it should keep the UTC day', () => {
      expect(formatDate('2026-09-02T23:30:00Z')).toBe('2 September 2026');
    });
  });

  describe('when given something that is not a date', () => {
    test('then it should reject it', () => {
      expect(() => formatDate('not a date')).toThrow(RangeError);
    });
  });
});
