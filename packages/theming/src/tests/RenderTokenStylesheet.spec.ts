import { describe, expect, test } from 'vitest';

import { darkTheme } from '../tokens/DarkTheme.tokens';
import { lightTheme } from '../tokens/LightTheme.tokens';
import { renderTokenStylesheet } from '../functions/RenderTokenStylesheet.function';

const sharedTokens = { '--space-between-text': '0.5rem' };

describe('Using renderTokenStylesheet, when rendering the same tokens twice', () => {
    test('then it should produce identical output', () => {
        expect(renderTokenStylesheet(sharedTokens, lightTheme, darkTheme)).toBe(
            renderTokenStylesheet(sharedTokens, lightTheme, darkTheme),
        );
    });
});

describe('Using renderTokenStylesheet, when rendering the themes', () => {
    const stylesheet = renderTokenStylesheet(sharedTokens, lightTheme, darkTheme);

    test('then it should put shared tokens on the root', () => {
        expect(stylesheet).toContain(':root {\n    --space-between-text: 0.5rem;\n}');
    });

    test('then it should make light the default theme', () => {
        expect(stylesheet).toContain(":root,\n[data-theme='light'] {\n    color-scheme: light;\n");
    });

    test('then it should apply dark only where it is selected', () => {
        expect(stylesheet).toContain("\n[data-theme='dark'] {\n    color-scheme: dark;\n");
    });

    test('then it should follow a dark system setting until a theme is selected', () => {
        expect(stylesheet).toContain(
            '@media (prefers-color-scheme: dark) {\n    :root:not([data-theme]) {\n        color-scheme: dark;\n',
        );
    });
});
