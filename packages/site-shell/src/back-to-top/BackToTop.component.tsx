import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { arrowUpIcon, ButtonVariant, Icon, LinkButton, VisuallyHidden } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

/**
 * A plain in-page link, not a router link: following it scrolls to `#main` and moves focus
 * there, which needs no script. The page's main element must carry `id="main"`, or pass
 * another fragment as `href`.
 */
export const BackToTop: FunctionComponent<Omit<ComponentPropsWithRef<'a'>, 'children'>> = ({
    href = '#main',
    className,
    ...anchorProps
}) => (
    <LinkButton
        {...anchorProps}
        href={href}
        variant={ButtonVariant.Primary}
        className={joinClassNames('nx-back-to-top', className)}
    >
        <Icon source={arrowUpIcon} />
        <VisuallyHidden>Back to top</VisuallyHidden>
    </LinkButton>
);
