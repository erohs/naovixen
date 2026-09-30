import { describe, expect, test } from 'vitest';
import type { ISite } from '@naovixen/models';

import { buildWebSiteStructuredData } from '../functions/BuildWebSiteStructuredData.function';

const site: ISite = { name: 'Example Person', origin: 'https://example.com', locale: 'en-GB' };

describe('Using buildWebSiteStructuredData, when building a website', () => {
    test('then it should name the site and its language', () => {
        expect(buildWebSiteStructuredData(site)).toMatchObject({
            '@type': 'WebSite',
            name: 'Example Person',
            inLanguage: 'en-GB',
        });
    });
});
