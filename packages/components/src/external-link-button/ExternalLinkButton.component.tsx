import type { FunctionComponent } from 'react';

import { defaultNewTabHint } from '../external-link/constants/DefaultNewTabHint.const';
import { Icon } from '../icon/Icon.component';
import { externalLinkIcon } from '../icon/icons/ExternalLink.icon';
import { LinkButton } from '../link-button/LinkButton.component';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import type { IExternalLinkButtonProps } from './interfaces/IExternalLinkButtonProps';

/** A button-styled link to another site, opened in a new tab like `ExternalLink`. */
export const ExternalLinkButton: FunctionComponent<IExternalLinkButtonProps> = ({
    newTabHint = defaultNewTabHint,
    children,
    ...linkButtonProps
}) => (
    <LinkButton {...linkButtonProps} target="_blank" rel="noopener noreferrer">
        {children} <Icon source={externalLinkIcon} /> <VisuallyHidden>{newTabHint}</VisuallyHidden>
    </LinkButton>
);
