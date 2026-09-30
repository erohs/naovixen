import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { IFooterProps } from './interfaces/IFooterProps';

/** Its children are laid out as columns, with the small print in a row beneath them. */
export const Footer: FunctionComponent<IFooterProps> = ({
    smallPrint,
    className,
    children,
    ...footerProps
}) => (
    <footer {...footerProps} className={joinClassNames('nx-footer', className)}>
        <div className="nx-footer__columns">{children}</div>
        <div className="nx-footer__small-print">{smallPrint}</div>
    </footer>
);
