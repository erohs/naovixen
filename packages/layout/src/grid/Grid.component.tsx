import type { FunctionComponent } from 'react';
import { createElement } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import type { ILayoutProps } from '../stack/interfaces/ILayoutProps';

/**
 * Equal columns, as many as fit, dropping to one on narrow screens.
 *
 * `createElement`, not JSX: JSX would demand a ref for one specific element, not any of them.
 */
export const Grid: FunctionComponent<ILayoutProps> = ({
    as = 'div',
    gap,
    className,
    ...elementProps
}) =>
    createElement(as, {
        ...elementProps,
        className: joinClassNames('nx-grid', gap && `nx-grid--gap-${gap}`, className),
    });
