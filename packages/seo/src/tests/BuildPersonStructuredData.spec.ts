import { describe, expect, test } from 'vitest';
import type { IPerson } from '../interfaces/IPerson';
import type { ISite } from '../interfaces/ISite';

import { buildPersonStructuredData } from '../functions/BuildPersonStructuredData.function';

const site: ISite = { name: 'Example Person', origin: 'https://example.com', locale: 'en-GB' };

const person: IPerson = {
    name: 'Example Person',
    jobTitle: 'Software Engineer',
    socialLinks: [
        { url: 'https://github.com/example' },
        { url: 'https://bsky.app/profile/example' },
    ],
};

describe('Using buildPersonStructuredData, when building a person', () => {
    test('then it should declare a schema.org Person', () => {
        expect(buildPersonStructuredData(person, site)['@type']).toBe('Person');
    });

    test('then it should list each social profile as the same person', () => {
        expect(buildPersonStructuredData(person, site).sameAs).toEqual([
            'https://github.com/example',
            'https://bsky.app/profile/example',
        ]);
    });

    test('then it should point at the site', () => {
        expect(buildPersonStructuredData(person, site).url).toBe('https://example.com');
    });
});
