import type { ComponentPropsWithRef } from 'react';

import type { LinkVariant } from '../enums/LinkVariant';

export interface ILinkProps extends ComponentPropsWithRef<'a'> {
    /** Defaults to a link in content. */
    readonly variant?: LinkVariant | undefined;
    /** Defaults to true for a link to another site, and false for everything else. */
    readonly opensInNewTab?: boolean | undefined;
    /** Read after the link text of a link that opens a new tab, so nobody is surprised by it. */
    readonly newTabHint?: string | undefined;
}
