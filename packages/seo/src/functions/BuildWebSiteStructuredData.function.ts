import type { ISite } from '../interfaces/ISite';

import { schemaOrgContext } from '../constants/SchemaOrgContext.const';
import type { IWebSiteStructuredData } from '../interfaces/IWebSiteStructuredData';

export function buildWebSiteStructuredData(site: ISite): IWebSiteStructuredData {
    return {
        '@context': schemaOrgContext,
        '@type': 'WebSite',
        name: site.name,
        url: site.origin,
        inLanguage: site.locale,
    };
}
