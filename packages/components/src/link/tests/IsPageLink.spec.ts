import { describe, expect, test } from 'vitest';

import { isPageLink } from '../functions/IsPageLink.function';

describe('Using isPageLink, when given a path on this site', () => {
    test('then it should be a page link', () => {
        expect(isPageLink({ href: '/blog/example' })).toBe(true);
    });
});

describe('Using isPageLink, when given a full web address', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({ href: 'https://example.com' })).toBe(false);
    });
});

describe('Using isPageLink, when given an address that names another host without a scheme', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({ href: '//example.com' })).toBe(false);
    });
});

describe('Using isPageLink, when given a fragment', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({ href: '#main' })).toBe(false);
    });
});

describe('Using isPageLink, when given an email address', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({ href: 'mailto:someone@example.com' })).toBe(false);
    });
});

describe('Using isPageLink, when given a path that opens in a new tab', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({ href: '/cv.pdf', target: '_blank' })).toBe(false);
    });
});

describe('Using isPageLink, when given a path that downloads', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({ href: '/cv.pdf', download: true })).toBe(false);
    });
});

describe('Using isPageLink, when given no href', () => {
    test('then it should not be a page link', () => {
        expect(isPageLink({})).toBe(false);
    });
});
