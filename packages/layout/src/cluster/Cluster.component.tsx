import type { FunctionComponent } from 'react';
import { createElement } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { ILayoutProps } from '../stack/interfaces/ILayoutProps';

/**
 * Children in a row that wraps, a space token apart.
 *
 * `createElement`, not JSX: JSX would demand a ref for one specific element, not any of them.
 */
export const Cluster: FunctionComponent<ILayoutProps> = ({
    as = 'div',
    gap,
    className,
    ...elementProps
}) =>
    createElement(as, {
        ...elementProps,
        className: joinClassNames('nx-cluster', gap && `nx-cluster--gap-${gap}`, className),
    });
