import type { FunctionComponent } from 'react';
import { createElement } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import type { IContainerProps } from './interfaces/IContainerProps';

/**
 * Centres its children at the page width, with the page gutter either side.
 *
 * `createElement`, not JSX: JSX would demand a ref for one specific element, not any of them.
 */
export const Container: FunctionComponent<IContainerProps> = ({
    as = 'div',
    className,
    ...elementProps
}) => createElement(as, { ...elementProps, className: joinClassNames('nx-container', className) });
