import { describe, expect, test } from 'vitest';

import { ResolvedTheme } from '../../enums/ResolvedTheme';
import { StaticSystemThemeSource } from '../StaticSystemThemeSource';

describe('Using StaticSystemThemeSource, given it was created with dark, when the theme is read', () => {
    const source = new StaticSystemThemeSource(ResolvedTheme.Dark);

    test('then it should report dark', () => {
        expect(source.getTheme()).toBe(ResolvedTheme.Dark);
    });
});

describe('Using StaticSystemThemeSource, given it was created with dark, when a listener subscribes and then stops listening', () => {
    const source = new StaticSystemThemeSource(ResolvedTheme.Dark);

    test('then it should not throw', () => {
        const stopListening = source.subscribe();

        expect(stopListening).not.toThrow();
    });
});
