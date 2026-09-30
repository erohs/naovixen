import type { FunctionComponent } from 'react';
import { createElement } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { ILayoutProps } from './interfaces/ILayoutProps';

/** `createElement`, not JSX: JSX would demand a ref for one specific element, not any of them. */
export const Stack: FunctionComponent<ILayoutProps> = ({
    as = 'div',
    gap,
    className,
    ...elementProps
}) =>
    createElement(as, {
        ...elementProps,
        className: joinClassNames('nx-stack', gap && `nx-stack--gap-${gap}`, className),
    });
