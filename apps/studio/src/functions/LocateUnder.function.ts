import type { DocumentLocationResolverObject } from 'sanity/presentation';

import type { ILocatedDocument } from '../interfaces/ILocatedDocument';

/** A document shows on its own page beneath a list, and on the list itself. */
export function locateUnder(
    listTitle: string,
    listPath: string,
): DocumentLocationResolverObject<'title' | 'slug'> {
    return {
        select: { title: 'title', slug: 'slug.current' },
        resolve: (document: ILocatedDocument | null) => ({
            locations: [
                {
                    title: document?.title ?? listTitle,
                    href: `${listPath}/${document?.slug ?? ''}`,
                },
                { title: listTitle, href: listPath },
            ],
        }),
    };
}
