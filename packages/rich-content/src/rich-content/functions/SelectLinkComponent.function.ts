import type { ComponentType } from 'react';
import { ExternalLink, Link } from '@naovixen/components';
import type { LinkProps } from '@naovixen/components';

const otherSite = /^(?:[a-z][a-z\d+.-]*:)?\/\//i;

/** Another site (`https://…`, `//…`) opens in a new tab; anything else is the site's own link. */
export function selectLinkComponent(href: string): ComponentType<LinkProps> {
    return otherSite.test(href) ? ExternalLink : Link;
}
