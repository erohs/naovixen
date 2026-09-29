import type { ComponentType } from 'react';
import { ExternalLink, Link } from '@naovixen/components';
import type { LinkProps } from '@naovixen/components';

const otherSite = /^(?:[a-z][a-z\d+.-]*:)?\/\//i;
const scheme = /^[a-z][a-z\d+.-]*:/i;

/**
 * Another site (`https://…`, `//…`) opens in a new tab, another scheme such as `mailto:`
 * is a plain link, and a path on this site goes through the page link, usually a router's.
 */
export function selectLinkComponent(
    href: string,
    pageLinkComponent: ComponentType<LinkProps>,
): ComponentType<LinkProps> {
    if (otherSite.test(href)) {
        return ExternalLink;
    }

    return scheme.test(href) ? Link : pageLinkComponent;
}
