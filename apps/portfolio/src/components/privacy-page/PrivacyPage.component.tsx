import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { Heading, HeadingSize } from '@naovixen/components';

import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { Page } from '../page/Page.component';
import { PrivacyNotice } from '../privacy-notice/PrivacyNotice.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';

export const PrivacyPage: FunctionComponent = () => (
    <Page>
        <article aria-labelledby="privacy-title">
            <Breadcrumb
                trail={homeBreadcrumbTrail}
                currentLabel="Privacy notice"
                linkComponent={RoutedLink}
            />
            <div className="nx-privacy-page">
                <Heading level={1} size={HeadingSize.Title} id="privacy-title">
                    Privacy notice
                </Heading>
                <PrivacyNotice />
            </div>
        </article>
    </Page>
);
