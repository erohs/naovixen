import type { IPerson, ISite } from '@naovixen/models';

import { schemaOrgContext } from '../constants/SchemaOrgContext.const';
import type { IPersonStructuredData } from '../interfaces/IPersonStructuredData';

export function buildPersonStructuredData(person: IPerson, site: ISite): IPersonStructuredData {
    return {
        '@context': schemaOrgContext,
        '@type': 'Person',
        name: person.name,
        jobTitle: person.jobTitle,
        url: site.origin,
        sameAs: person.socialLinks.map((socialLink) => socialLink.url),
    };
}
