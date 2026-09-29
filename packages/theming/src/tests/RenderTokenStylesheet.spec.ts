import { describe, expect, test } from 'vitest';

import { darkTheme } from '../tokens/DarkTheme.tokens';
import { lightTheme } from '../tokens/LightTheme.tokens';
import { renderTokenStylesheet } from '../functions/RenderTokenStylesheet.function';

describe('Using renderTokenStylesheet', () => {
  const sharedTokens = { '--space-between-text': '0.5rem' };

  describe('when rendering the same tokens twice', () => {
    test('then it should produce identical output', () => {
      expect(renderTokenStylesheet(sharedTokens, lightTheme, darkTheme)).toBe(
        renderTokenStylesheet(sharedTokens, lightTheme, darkTheme),
      );
    });
  });

  describe('when rendering the themes', () => {
    const stylesheet = renderTokenStylesheet(sharedTokens, lightTheme, darkTheme);

    test('then it should put shared tokens on the root', () => {
      expect(stylesheet).toContain(':root {\n  --space-between-text: 0.5rem;\n}');
    });

    test('then it should make light the default theme', () => {
      expect(stylesheet).toContain(":root,\n[data-theme='light'] {\n  color-scheme: light;\n");
    });

    test('then it should apply dark only where it is selected', () => {
      expect(stylesheet).toContain("\n[data-theme='dark'] {\n  color-scheme: dark;\n");
    });
  });
});
