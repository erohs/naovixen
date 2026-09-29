import { describe, expect, test } from 'vitest';

import { buildBlockClassName } from './BuildBlockClassName.function';

describe('Using buildBlockClassName', () => {
  describe('when called with a single-word block name', () => {
    test('then it should return the name with the project prefix', () => {
      expect(buildBlockClassName('button')).toBe('nx-button');
    });
  });

  describe('when called with a multi-word block name', () => {
    test('then it should keep the kebab-case name intact', () => {
      expect(buildBlockClassName('project-card')).toBe('nx-project-card');
    });
  });
});
