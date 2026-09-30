import { beforeEach, describe, expect, test } from 'vitest';

import { ThemePreference } from '../../enums/ThemePreference';
import { CookieThemeStorage } from '../CookieThemeStorage';
import type { ICookieStore } from '../interfaces/ICookieStore';

class FakeCookieStore implements ICookieStore {
    public readonly cookies = new Map<string, string>();

    public read(name: string): string | undefined {
        return this.cookies.get(name);
    }

    public write(name: string, value: string): void {
        this.cookies.set(name, value);
    }
}

let cookieStore: FakeCookieStore;
let storage: CookieThemeStorage;

beforeEach(() => {
    cookieStore = new FakeCookieStore();
    storage = new CookieThemeStorage(cookieStore);
});

describe('Using CookieThemeStorage, given no cookie, when the preference is read', () => {
    test('then it should report no preference', () => {
        expect(storage.readPreference()).toBeUndefined();
    });
});

describe('Using CookieThemeStorage, given no cookie, when dark is written', () => {
    beforeEach(() => {
        storage.writePreference(ThemePreference.Dark);
    });

    test('then it should read dark back', () => {
        expect(storage.readPreference()).toBe(ThemePreference.Dark);
    });

    test('then it should store it in the theme-preference cookie', () => {
        expect(cookieStore.cookies.get('theme-preference')).toBe('dark');
    });
});

describe('Using CookieThemeStorage, given a cookie holding an unrecognised value, when the preference is read', () => {
    test('then it should report no preference', () => {
        cookieStore.cookies.set('theme-preference', 'sepia');

        expect(storage.readPreference()).toBeUndefined();
    });
});
