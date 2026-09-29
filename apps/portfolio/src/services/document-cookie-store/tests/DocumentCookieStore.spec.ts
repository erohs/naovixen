import { beforeEach, describe, expect, test } from 'vitest';

import { DocumentCookieStore } from '../DocumentCookieStore';

describe('Using DocumentCookieStore', () => {
    let cookieStore: DocumentCookieStore;

    beforeEach(() => {
        document.cookie = 'theme-preference=; max-age=0; path=/';
        cookieStore = new DocumentCookieStore();
    });

    describe('given no cookie', () => {
        describe('when a cookie is read', () => {
            test('then it should report nothing', () => {
                expect(cookieStore.read('theme-preference')).toBeUndefined();
            });
        });

        describe('when a cookie is written', () => {
            test('then it should read it back', () => {
                cookieStore.write('theme-preference', 'dark');

                expect(cookieStore.read('theme-preference')).toBe('dark');
            });
        });
    });

    describe('given another cookie whose name ends the same way', () => {
        describe('when a cookie is read', () => {
            test('then it should not mistake it for the one asked for', () => {
                document.cookie = 'old-theme-preference=light; path=/';

                expect(cookieStore.read('theme-preference')).toBeUndefined();
            });
        });
    });
});
