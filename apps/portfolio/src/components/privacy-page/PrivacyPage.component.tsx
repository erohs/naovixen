import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { Heading, HeadingSize } from '@naovixen/components';
import { Stack } from '@naovixen/layout';

import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { Page } from '../page/Page.component';
import { PrivacyNotice } from '../privacy-notice/PrivacyNotice.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';

export const PrivacyPage: FunctionComponent = () => (
    <Page>
        <Stack as="article" aria-labelledby="privacy-title" className="nx-privacy-page">
            <Breadcrumb
                trail={homeBreadcrumbTrail}
                currentLabel="Privacy notice"
                linkComponent={RoutedLink}
            />
            <Heading level={1} size={HeadingSize.H2} id="privacy-title">
                Privacy notice
            </Heading>
            <PrivacyNotice />
        </Stack>
    </Page>
);
