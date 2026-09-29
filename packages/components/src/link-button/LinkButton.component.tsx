import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import { ButtonVariant } from '../button/enums/ButtonVariant';
import type { ILinkButtonProps } from './interfaces/ILinkButtonProps';

/** Looks like a button but navigates, so it is an anchor. Wraps with `createLink` like Link. */
export const LinkButton: FunctionComponent<ILinkButtonProps> = ({
    variant = ButtonVariant.Secondary,
    className,
    children,
    ...anchorProps
}) => (
    <a {...anchorProps} className={joinClassNames('nx-button', `nx-button--${variant}`, className)}>
        {children}
    </a>
);
