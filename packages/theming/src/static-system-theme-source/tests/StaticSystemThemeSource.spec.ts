import { describe, expect, test } from 'vitest';

import { ResolvedTheme } from '../../enums/ResolvedTheme';
import { StaticSystemThemeSource } from '../StaticSystemThemeSource';

describe('Using StaticSystemThemeSource', () => {
    describe('given it was created with dark', () => {
        const source = new StaticSystemThemeSource(ResolvedTheme.Dark);

        describe('when the theme is read', () => {
            test('then it should report dark', () => {
                expect(source.getTheme()).toBe(ResolvedTheme.Dark);
            });
        });

        describe('when a listener subscribes and then stops listening', () => {
            test('then it should not throw', () => {
                const stopListening = source.subscribe();

                expect(stopListening).not.toThrow();
            });
        });
    });
});
