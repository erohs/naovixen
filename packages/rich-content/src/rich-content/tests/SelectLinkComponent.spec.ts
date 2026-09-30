import { ExternalLink, Link } from '@naovixen/components';
import { describe, expect, test } from 'vitest';

import { selectLinkComponent } from '../functions/SelectLinkComponent.function';

describe('Using selectLinkComponent, when the address is a full web address', () => {
    test('then it should be an external link', () => {
        expect(selectLinkComponent('https://example.com')).toBe(ExternalLink);
    });
});

describe('Using selectLinkComponent, when the address has no scheme but names another host', () => {
    test('then it should be an external link', () => {
        expect(selectLinkComponent('//example.com')).toBe(ExternalLink);
    });
});

describe('Using selectLinkComponent, when the address is an email address', () => {
    test('then it should be the site link', () => {
        expect(selectLinkComponent('mailto:someone@example.com')).toBe(Link);
    });
});

describe('Using selectLinkComponent, when the address is a path on this site', () => {
    test('then it should be the site link', () => {
        expect(selectLinkComponent('/blog/example')).toBe(Link);
    });
});
