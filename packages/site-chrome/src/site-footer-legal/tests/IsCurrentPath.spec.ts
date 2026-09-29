import { describe, expect, test } from 'vitest';

import { isCurrentPath } from '../functions/IsCurrentPath.function';

describe('Using isCurrentPath', () => {
  describe('when the item is the home page and the home page is shown', () => {
    test('then it should be current', () => {
      expect(isCurrentPath('/', '/')).toBe(true);
    });
  });

  describe('when the item is the home page and another page is shown', () => {
    test('then it should not be current', () => {
      expect(isCurrentPath('/work', '/')).toBe(false);
    });
  });

  describe('when the item is the page shown', () => {
    test('then it should be current', () => {
      expect(isCurrentPath('/work', '/work')).toBe(true);
    });
  });

  describe('when a page beneath the item is shown', () => {
    test('then it should be current', () => {
      expect(isCurrentPath('/work/example-project', '/work')).toBe(true);
    });
  });

  describe('when a page that only starts with the same letters is shown', () => {
    test('then it should not be current', () => {
      expect(isCurrentPath('/workshop', '/work')).toBe(false);
    });
  });

  describe('when an unrelated page is shown', () => {
    test('then it should not be current', () => {
      expect(isCurrentPath('/blog', '/work')).toBe(false);
    });
  });
});
