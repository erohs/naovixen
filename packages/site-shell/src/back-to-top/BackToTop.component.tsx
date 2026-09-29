import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { arrowUpIcon, ButtonVariant, Icon, LinkButton, VisuallyHidden } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import { useIsPastFirstScreen } from './functions/UseIsPastFirstScreen.hook';

/**
 * Shown once the reader has scrolled a full screen down. A plain in-page link, not a router
 * link: following it scrolls to `#main` and moves focus there. The page's main element must
 * carry `id="main"`, or pass another fragment as `href`.
 */
export const BackToTop: FunctionComponent<Omit<ComponentPropsWithRef<'a'>, 'children'>> = ({
    href = '#main',
    className,
    ...anchorProps
}) => {
    const isVisible = useIsPastFirstScreen();

    return (
        <LinkButton
            {...anchorProps}
            href={href}
            variant={ButtonVariant.Primary}
            className={joinClassNames('nx-back-to-top', className)}
            data-visible={isVisible}
        >
            <Icon source={arrowUpIcon} />
            <VisuallyHidden>Back to top</VisuallyHidden>
        </LinkButton>
    );
};
