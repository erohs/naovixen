import { describe, expect, test } from 'vitest';

import { isDefined } from './IsDefined.function';

describe('Using isDefined', () => {
  describe('when called with a value', () => {
    test('then it should report the value as defined', () => {
      expect(isDefined('naovixen')).toBe(true);
    });
  });

  describe('when called with null', () => {
    test('then it should report the value as not defined', () => {
      expect(isDefined(null)).toBe(false);
    });
  });

  describe('when called with undefined', () => {
    test('then it should report the value as not defined', () => {
      expect(isDefined(undefined)).toBe(false);
    });
  });

  describe('when called with a falsy value that is present', () => {
    test('then it should report zero as defined', () => {
      expect(isDefined(0)).toBe(true);
    });

    test('then it should report an empty string as defined', () => {
      expect(isDefined('')).toBe(true);
    });
  });
});
