import { beforeEach, describe, expect, test } from 'vitest';
import type { ISeoMetadata, ISite } from '@naovixen/models';
import { OpenGraphType } from '@naovixen/models';

import { buildHeadTags } from '../functions/BuildHeadTags.function';
import type { IHeadTags } from '../interfaces/IHeadTags';

const site: ISite = { name: 'Example Person', origin: 'https://example.com', locale: 'en-GB' };

const page: ISeoMetadata = {
    title: 'Blog',
    description: 'Writing about the web.',
    path: '/blog',
    type: OpenGraphType.Website,
};

function readContent(headTags: IHeadTags, key: string): string | undefined {
    const matchingTag = headTags.meta.find((tag) =>
        'name' in tag ? tag.name === key : tag.property === key,
    );

    return matchingTag?.content;
}

describe('Using buildHeadTags, given a page with no image, when the head tags are built', () => {
    let headTags: IHeadTags;

    beforeEach(() => {
        headTags = buildHeadTags(page, site);
    });

    test('then it should follow the page title with the site name', () => {
        expect(headTags.title).toBe('Blog — Example Person');
    });

    test('then it should make the canonical URL absolute', () => {
        expect(headTags.canonicalUrl).toBe('https://example.com/blog');
    });

    test('then it should describe the page to search engines', () => {
        expect(readContent(headTags, 'description')).toBe('Writing about the web.');
    });

    test('then it should give Open Graph the page title without the site name', () => {
        expect(readContent(headTags, 'og:title')).toBe('Blog');
    });

    test('then it should write the locale the way Open Graph expects', () => {
        expect(readContent(headTags, 'og:locale')).toBe('en_GB');
    });

    test('then it should ask for the small summary card', () => {
        expect(readContent(headTags, 'twitter:card')).toBe('summary');
    });

    test('then it should include no image tags', () => {
        expect(readContent(headTags, 'og:image')).toBeUndefined();
    });
});

describe('Using buildHeadTags, given a page whose title already names the site, when the head tags are built', () => {
    test('then it should use the title as it is', () => {
        const homePage = { ...page, title: 'Example Person — Software Engineer' };

        expect(buildHeadTags(homePage, site).title).toBe('Example Person — Software Engineer');
    });
});

describe('Using buildHeadTags, given a site origin with a trailing slash, when the head tags are built', () => {
    test('then it should not double the slash in the canonical URL', () => {
        const siteWithSlash = { ...site, origin: 'https://example.com/' };

        expect(buildHeadTags(page, siteWithSlash).canonicalUrl).toBe('https://example.com/blog');
    });
});

describe('Using buildHeadTags, given a page with an image on the site, when the head tags are built', () => {
    let headTags: IHeadTags;

    beforeEach(() => {
        const image = { src: '/images/cover.png', alt: 'A fox', width: 1200, height: 630 };
        headTags = buildHeadTags({ ...page, image }, site);
    });

    test('then it should make the image URL absolute', () => {
        expect(readContent(headTags, 'og:image')).toBe('https://example.com/images/cover.png');
    });

    test('then it should give the image its alt text', () => {
        expect(readContent(headTags, 'og:image:alt')).toBe('A fox');
    });

    test('then it should give the image its dimensions', () => {
        expect(readContent(headTags, 'og:image:width')).toBe('1200');
    });

    test('then it should ask for the large image card', () => {
        expect(readContent(headTags, 'twitter:card')).toBe('summary_large_image');
    });
});

describe('Using buildHeadTags, given a page with an image on another host, when the head tags are built', () => {
    test('then it should leave the image URL as it is', () => {
        const image = {
            src: 'https://cdn.example.net/cover.png',
            alt: '',
            width: 1,
            height: 1,
        };

        expect(readContent(buildHeadTags({ ...page, image }, site), 'og:image')).toBe(
            'https://cdn.example.net/cover.png',
        );
    });
});
