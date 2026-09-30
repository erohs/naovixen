import { describe, expect, test } from 'vitest';

import { buildRssFeedXml } from '../functions/BuildRssFeedXml.function';

const site = { name: 'Example', origin: 'https://example.com', locale: 'en-GB' };

const channel = {
    title: 'Blog',
    description: 'Writing.',
    path: '/blog',
    feedPath: '/blog/feed.xml',
};

const post = {
    slug: 'first',
    title: 'Tips & tricks',
    excerpt: 'An excerpt.',
    publishedAt: '2026-09-02',
    tags: ['CSS'],
};

describe('Using buildRssFeedXml, when building a feed of one post', () => {
    const xml = buildRssFeedXml([post], channel, site);

    test('then it should link the post by its absolute address', () => {
        expect(xml).toContain('<link>https://example.com/blog/first</link>');
    });

    test('then it should give the publication date in the RFC 822 form RSS requires', () => {
        expect(xml).toContain('<pubDate>Wed, 02 Sep 2026 00:00:00 GMT</pubDate>');
    });

    test('then it should escape characters XML reserves', () => {
        expect(xml).toContain('<title>Tips &amp; tricks</title>');
    });

    test('then it should point to itself', () => {
        expect(xml).toContain('href="https://example.com/blog/feed.xml" rel="self"');
    });
});
