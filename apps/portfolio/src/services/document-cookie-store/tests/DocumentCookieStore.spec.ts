import { beforeEach, describe, expect, test } from 'vitest';

import { DocumentCookieStore } from '../DocumentCookieStore';

function createEmptyCookieStore(): DocumentCookieStore {
    document.cookie = 'theme-preference=; max-age=0; path=/';
    document.cookie = 'old-theme-preference=; max-age=0; path=/';

    return new DocumentCookieStore();
}

describe('Using DocumentCookieStore, given no cookie, when a cookie is read', () => {
    let cookieStore: DocumentCookieStore;

    beforeEach(() => {
        cookieStore = createEmptyCookieStore();
    });

    test('then it should report nothing', () => {
        expect(cookieStore.read('theme-preference')).toBeUndefined();
    });
});

describe('Using DocumentCookieStore, given no cookie, when a cookie is written', () => {
    let cookieStore: DocumentCookieStore;

    beforeEach(() => {
        cookieStore = createEmptyCookieStore();
    });

    test('then it should read it back', () => {
        cookieStore.write('theme-preference', 'dark');

        expect(cookieStore.read('theme-preference')).toBe('dark');
    });
});

describe('Using DocumentCookieStore, given another cookie whose name ends the same way, when a cookie is read', () => {
    let cookieStore: DocumentCookieStore;

    beforeEach(() => {
        cookieStore = createEmptyCookieStore();
        document.cookie = 'old-theme-preference=light; path=/';
    });

    test('then it should not mistake it for the one asked for', () => {
        expect(cookieStore.read('theme-preference')).toBeUndefined();
    });
});
