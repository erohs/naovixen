import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';
import { Container, Space, Stack } from '@naovixen/layout';

import { SiteFooterDirectory } from '../site-footer-directory/SiteFooterDirectory.component';
import { SiteFooterLegal } from '../site-footer-legal/SiteFooterLegal.component';
import type { ISiteFooterProps } from './interfaces/ISiteFooterProps';

export const SiteFooter: FunctionComponent<ISiteFooterProps> = ({ className, ...contentProps }) => (
    <footer className={joinClassNames('nx-site-footer', className)}>
        <Container>
            <Stack gap={Space.BetweenGroups} className="nx-site-footer__content">
                <SiteFooterDirectory {...contentProps} />
                <SiteFooterLegal {...contentProps} />
            </Stack>
        </Container>
    </footer>
);
