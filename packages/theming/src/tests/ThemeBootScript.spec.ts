import { describe, expect, test } from 'vitest';

import { themeBootScript } from '../constants/ThemeBootScript.const';

interface IBootResult {
    readonly theme: string | undefined;
    readonly preference: string | undefined;
}

type BootScript = (document: object, window: object) => void;

/** Runs the script against a stand-in document, as the browser would before first paint. */
function runBootScript(cookie: string, isSystemDark: boolean): IBootResult {
    const attributes = new Map<string, string>();
    const document = {
        cookie,
        documentElement: {
            setAttribute: (name: string, value: string): void => {
                attributes.set(name, value);
            },
        },
    };
    const window = { matchMedia: (): { matches: boolean } => ({ matches: isSystemDark }) };

    /* eslint-disable-next-line @typescript-eslint/no-implied-eval -- runs the shipped script text as the browser does */
    const bootScript = new Function('document', 'window', themeBootScript) as BootScript;

    bootScript(document, window);

    return {
        theme: attributes.get('data-theme'),
        preference: attributes.get('data-theme-preference'),
    };
}

describe('Using the theme boot script', () => {
    describe('given no cookie and a dark system setting', () => {
        describe('when the script runs', () => {
            const result = runBootScript('', true);

            test('then it should resolve to the dark theme', () => {
                expect(result.theme).toBe('dark');
            });

            test('then it should record the system preference', () => {
                expect(result.preference).toBe('system');
            });
        });
    });

    describe('given a cookie choosing light among other cookies, and a dark system setting', () => {
        describe('when the script runs', () => {
            test('then it should resolve to the light theme', () => {
                expect(runBootScript('a=1; theme-preference=light; b=2', true).theme).toBe('light');
            });
        });
    });

    describe('given a cookie holding an unrecognised value and a light system setting', () => {
        describe('when the script runs', () => {
            test('then it should fall back to the system preference', () => {
                expect(runBootScript('theme-preference=sepia', false).preference).toBe('system');
            });
        });
    });
});
