import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { ButtonVariant } from '../button/enums/ButtonVariant';
import { jumpToFragment } from '../link-button/functions/JumpToFragment.function';
import type { ILinkButtonProps } from '../link-button/interfaces/ILinkButtonProps';
import { LinkButton } from '../link-button/LinkButton.component';

/**
 * A LinkButton shown only while it has focus. Render it first in the body. It points at the main
 * content, `#main`, unless given another `href`; the target needs `tabIndex={-1}` to take focus.
 * Following it leaves the address alone.
 */
export const SkipLink: FunctionComponent<Omit<ILinkButtonProps, 'variant' | 'onClick'>> = ({
    href = '#main',
    className,
    ...linkButtonProps
}) => (
    <LinkButton
        {...linkButtonProps}
        href={href}
        variant={ButtonVariant.Primary}
        className={joinClassNames('nv-skip-link', className)}
        onClick={jumpToFragment}
    />
);
