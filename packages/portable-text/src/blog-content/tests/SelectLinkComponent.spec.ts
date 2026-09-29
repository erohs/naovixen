import type { LinkProps } from '@naovixen/components';
import { ExternalLink, Link } from '@naovixen/components';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { selectLinkComponent } from '../functions/SelectLinkComponent.function';

const pageLink: FunctionComponent<LinkProps> = () => null;

describe('Using selectLinkComponent', () => {
    describe('when the address is a full web address', () => {
        test('then it should be an external link', () => {
            expect(selectLinkComponent('https://example.com', pageLink)).toBe(ExternalLink);
        });
    });

    describe('when the address has no scheme but names another host', () => {
        test('then it should be an external link', () => {
            expect(selectLinkComponent('//example.com', pageLink)).toBe(ExternalLink);
        });
    });

    describe('when the address is an email address', () => {
        test('then it should be a plain link', () => {
            expect(selectLinkComponent('mailto:someone@example.com', pageLink)).toBe(Link);
        });
    });

    describe('when the address is a path on this site', () => {
        test('then it should be the page link', () => {
            expect(selectLinkComponent('/blog/example', pageLink)).toBe(pageLink);
        });
    });
});
