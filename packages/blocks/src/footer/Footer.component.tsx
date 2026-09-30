import type { FunctionComponent } from 'react';
import { Container, Grid, Space, Stack } from '@naovixen/layout';
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
        <Container>
            <Stack gap={Space.BetweenGroups} className="nx-footer__content">
                <Grid>{children}</Grid>
                <div className="nx-footer__small-print">{smallPrint}</div>
            </Stack>
        </Container>
    </footer>
);
