import type { FunctionComponent } from 'react';

import { Link } from '../link/Link.component';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import { defaultNewTabHint } from './constants/DefaultNewTabHint.const';
import type { IExternalLinkProps } from './interfaces/IExternalLinkProps';

/** A link to another site, opened in a new tab without handing that site this window. */
export const ExternalLink: FunctionComponent<IExternalLinkProps> = ({
    newTabHint = defaultNewTabHint,
    children,
    ...linkProps
}) => (
    <Link {...linkProps} target="_blank" rel="noopener noreferrer">
        {children} <VisuallyHidden>{newTabHint}</VisuallyHidden>
    </Link>
);
