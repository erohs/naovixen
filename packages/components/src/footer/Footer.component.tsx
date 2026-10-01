import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { FooterColumn } from './FooterColumn.component';
import type { IFooterProps } from './interfaces/IFooterProps';

const FooterRoot: FunctionComponent<IFooterProps> = ({
    smallPrint,
    className,
    children,
    ...footerProps
}) => (
    <footer {...footerProps} className={joinClassNames('nv-footer', className)}>
        <div className="nv-footer__columns">{children}</div>
        <div className="nv-footer__small-print">{smallPrint}</div>
    </footer>
);

/**
 * Its children are laid out as columns: a `Footer.Column` for each list of links, and anything
 * else, such as a logo and a line about the site, as a column of its own. The small print sits
 * in a row beneath them.
 */
export const Footer = Object.assign(FooterRoot, { Column: FooterColumn });
