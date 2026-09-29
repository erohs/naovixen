import type { MetaTag } from '@naovixen/seo';

/** The part of a TanStack Router `head()` result this site fills in. */
export interface IRouteHead {
    readonly meta: ({ readonly title: string } | MetaTag)[];
    readonly links: { readonly rel: string; readonly href: string }[];
    readonly scripts: { readonly type: string; readonly children: string }[];
}
