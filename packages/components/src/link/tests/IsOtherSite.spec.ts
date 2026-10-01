import { describe, expect, test } from 'vitest';

import { isOtherSite } from '../functions/IsOtherSite.function';

describe('Using isOtherSite, when the address is a full web address', () => {
    test('then it should be another site', () => {
        expect(isOtherSite('https://example.com')).toBe(true);
    });
});

describe('Using isOtherSite, when the address has no scheme but names another host', () => {
    test('then it should be another site', () => {
        expect(isOtherSite('//example.com')).toBe(true);
    });
});

describe('Using isOtherSite, when the address is an email address', () => {
    test('then it should not be another site', () => {
        expect(isOtherSite('mailto:someone@example.com')).toBe(false);
    });
});

describe('Using isOtherSite, when the address is a path on this site', () => {
    test('then it should not be another site', () => {
        expect(isOtherSite('/blog/example')).toBe(false);
    });
});

describe('Using isOtherSite, when there is no address', () => {
    test('then it should not be another site', () => {
        expect(isOtherSite(undefined)).toBe(false);
    });
});
