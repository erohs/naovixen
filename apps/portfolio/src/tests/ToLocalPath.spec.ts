import { describe, expect, test } from 'vitest';

import { toLocalPath } from '../functions/ToLocalPath.function';

describe('Using toLocalPath, when given a path on this site', () => {
    test('then it should keep it', () => {
        expect(toLocalPath('/blog/first?tab=1')).toBe('/blog/first?tab=1');
    });
});

describe('Using toLocalPath, when given another site', () => {
    test('then it should fall back to the home page', () => {
        expect(toLocalPath('https://example.com/')).toBe('/');
    });
});

describe('Using toLocalPath, when given a protocol-relative address', () => {
    test('then it should fall back to the home page', () => {
        expect(toLocalPath('//example.com/')).toBe('/');
    });
});

describe('Using toLocalPath, when given a backslash that browsers read as a slash', () => {
    test('then it should fall back to the home page', () => {
        expect(toLocalPath('/\\example.com')).toBe('/');
    });
});

describe('Using toLocalPath, when given nothing', () => {
    test('then it should fall back to the home page', () => {
        expect(toLocalPath(undefined)).toBe('/');
    });
});
