import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { ButtonIcon } from '../button/ButtonIcon.component';
import { ButtonVariant } from '../button/enums/ButtonVariant';
import { LinkVariant } from '../link/enums/LinkVariant';
import { Link } from '../link/Link.component';
import { clickOnSpace } from './functions/ClickOnSpace.function';
import type { ILinkButtonProps } from './interfaces/ILinkButtonProps';

const LinkButtonRoot: FunctionComponent<ILinkButtonProps> = ({
    variant = ButtonVariant.Secondary,
    className,
    ...linkProps
}) => (
    <Link
        {...linkProps}
        role="button"
        variant={LinkVariant.Unstyled}
        className={joinClassNames('nv-button', `nv-button--${variant}`, className)}
        onKeyDown={clickOnSpace}
    />
);

/**
 * Something that navigates but looks like a Button. It is a Link, so it can be opened in a new
 * tab or copied, but it is announced as the button it looks like, so someone using voice control
 * can say what they see. Its children are its text and, on either side of it, a
 * `LinkButton.Icon`.
 */
export const LinkButton = Object.assign(LinkButtonRoot, { Icon: ButtonIcon });
