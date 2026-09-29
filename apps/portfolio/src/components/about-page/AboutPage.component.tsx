import type { FunctionComponent } from 'react';
import { Breadcrumb, HandDrawnRule } from '@naovixen/blocks';
import { Space, Stack } from '@naovixen/layout';

import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { AboutActions } from '../about-actions/AboutActions.component';
import { AboutDetails } from '../about-details/AboutDetails.component';
import { AboutIntroduction } from '../about-introduction/AboutIntroduction.component';
import { Page } from '../page/Page.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';

export const AboutPage: FunctionComponent = () => (
    <Page>
        <Stack gap={Space.BetweenSections}>
            <Breadcrumb
                trail={homeBreadcrumbTrail}
                currentLabel="About"
                linkComponent={RoutedLink}
            />
            <AboutIntroduction />
            <HandDrawnRule className="nx-about-page__rule" />
            <AboutDetails />
            <AboutActions />
        </Stack>
    </Page>
);
