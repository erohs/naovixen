import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/**
 * Render it first in the body, pointing at the main content: `href="#main"`. The target
 * needs `tabIndex={-1}` to take focus.
 */
export const SkipLink: FunctionComponent<ComponentPropsWithRef<'a'>> = ({
    className,
    children,
    ...anchorProps
}) => (
    <a {...anchorProps} className={joinClassNames('nx-skip-link', className)}>
        {children}
    </a>
);
