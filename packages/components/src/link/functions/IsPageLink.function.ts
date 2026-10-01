import type { AnchorProps } from '../../link-provider/types/AnchorProps';

/**
 * A page on this site is a path. Another site (`https://…`, `//host`), a fragment, another
 * scheme such as `mailto:`, a new tab and a download are left to the browser.
 */
export function isPageLink({
    href,
    target,
    download,
}: Pick<AnchorProps, 'href' | 'target' | 'download'>): boolean {
    return (
        href !== undefined &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        target === undefined &&
        download === undefined
    );
}
