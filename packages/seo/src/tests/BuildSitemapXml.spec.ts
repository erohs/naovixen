import { describe, expect, test } from 'vitest';

import { buildSitemapXml } from '../functions/BuildSitemapXml.function';

describe('Using buildSitemapXml', () => {
    const site = { name: 'Example', origin: 'https://example.com', locale: 'en-GB' };

    describe('when building a sitemap for a page with no date', () => {
        const xml = buildSitemapXml([{ path: '/about' }], site);

        test('then it should list the page by its absolute address', () => {
            expect(xml).toContain('<url><loc>https://example.com/about</loc></url>');
        });

        test('then it should declare the sitemaps namespace', () => {
            expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
        });
    });

    describe('when building a sitemap for a dated page', () => {
        test('then it should give the date as the last modification', () => {
            const xml = buildSitemapXml([{ path: '/blog/a', lastModified: '2026-09-02' }], site);

            expect(xml).toContain('<lastmod>2026-09-02</lastmod>');
        });
    });

    describe('when a path holds a character XML reserves', () => {
        test('then it should escape it', () => {
            const xml = buildSitemapXml([{ path: '/search?a=1&b=2' }], site);

            expect(xml).toContain('/search?a=1&amp;b=2');
        });
    });
});
