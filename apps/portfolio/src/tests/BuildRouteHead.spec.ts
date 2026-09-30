import { OpenGraphType } from '@naovixen/models';
import { describe, expect, test } from 'vitest';

import { buildRouteHead } from '../functions/BuildRouteHead.function';

const page = {
    title: 'About',
    description: 'About Naomi Shore.',
    path: '/about',
    type: OpenGraphType.Website,
};

describe('Using buildRouteHead, when building the head for a page', () => {
    const head = buildRouteHead(page);

    test('then it should title the page after the site', () => {
        expect(head.meta[0]).toEqual({ title: 'About — Naomi Shore' });
    });

    test('then it should link the canonical address', () => {
        expect(head.links).toEqual([{ rel: 'canonical', href: 'https://naovixen.com/about' }]);
    });
});

describe('Using buildRouteHead, when building the head with structured data', () => {
    test('then it should add it as a JSON-LD script', () => {
        const head = buildRouteHead(page, [{ '@type': 'WebSite' }]);

        expect(head.scripts).toEqual([
            { type: 'application/ld+json', children: '{"@type":"WebSite"}' },
        ]);
    });
});
