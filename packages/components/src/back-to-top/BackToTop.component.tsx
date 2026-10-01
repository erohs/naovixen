import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { ButtonVariant } from '../button/enums/ButtonVariant';
import { arrowUpIcon } from '../icon/icons/ArrowUp.icon';
import type { ILinkButtonProps } from '../link-button/interfaces/ILinkButtonProps';
import { LinkButton } from '../link-button/LinkButton.component';
import { useIsPastFirstScreen } from './functions/UseIsPastFirstScreen.hook';

/**
 * A LinkButton of one icon, shown once the reader has scrolled a full screen down. A plain
 * in-page link, not a router link: following it scrolls to `#main` and moves focus there. The
 * page's main element must carry `id="main"`, or pass another fragment as `href`.
 */
export const BackToTop: FunctionComponent<Omit<ILinkButtonProps, 'variant' | 'children'>> = ({
    href = '#main',
    className,
    ...linkButtonProps
}) => {
    const isVisible = useIsPastFirstScreen();

    return (
        <LinkButton
            {...linkButtonProps}
            href={href}
            variant={ButtonVariant.Primary}
            className={joinClassNames('nv-back-to-top', className)}
            data-visible={isVisible}
        >
            <LinkButton.Icon source={arrowUpIcon} label="Back to top" />
        </LinkButton>
    );
};
