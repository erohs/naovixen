import type { LinkProps } from '../../link/types/LinkProps';

export interface IExternalLinkProps extends Omit<LinkProps, 'target' | 'rel'> {
    /** Read after the link text, so nobody is surprised by the new tab. */
    readonly newTabHint?: string | undefined;
}
