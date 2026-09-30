import { describe, expect, test } from 'vitest';

import { ResolvedTheme } from '../enums/ResolvedTheme';
import { ThemePreference } from '../enums/ThemePreference';
import { applyThemeAttributes } from '../functions/ApplyThemeAttributes.function';

describe('Using applyThemeAttributes, when applying a system preference that resolved to dark', () => {
    const attributes = new Map<string, string>();
    const target = {
        setAttribute: (name: string, value: string): void => {
            attributes.set(name, value);
        },
    };

    applyThemeAttributes(
        { preference: ThemePreference.System, resolvedTheme: ResolvedTheme.Dark },
        target,
    );

    test('then it should set the resolved theme on data-theme', () => {
        expect(attributes.get('data-theme')).toBe('dark');
    });

    test('then it should set the choice on data-theme-preference', () => {
        expect(attributes.get('data-theme-preference')).toBe('system');
    });
});
