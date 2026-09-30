import type { FunctionComponent } from 'react';
import { Breadcrumb, Heading, HeadingSize, Link, Text, TextVariant } from '@naovixen/components';
import { formatDate } from '@naovixen/utilities';

import { Page } from '../../components/page/Page.component';
import { RoutedLink } from '../../components/routed-link/RoutedLink.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { placeholderPrivacyPage as copy } from './constants/PlaceholderPrivacyPage.const';

/** The notice's text, below its heading. */
const PrivacyNotice: FunctionComponent = () => (
    <>
        <Text variant={TextVariant.Meta}>
            Last updated <time dateTime={copy.lastUpdated}>{formatDate(copy.lastUpdated)}</time>
        </Text>
        <Text variant={TextVariant.Lead}>{copy.intro}</Text>
        <Heading level={2} size={HeadingSize.H3} className="nv-privacy-page__heading">
            Cookies and analytics
        </Heading>
        <Text>{copy.cookies}</Text>
        <Heading level={2} size={HeadingSize.H3} className="nv-privacy-page__heading">
            Your rights
        </Heading>
        <Text>
            {copy.rightsBeforeEmail}{' '}
            <Link href={`mailto:${placeholderEmailAddress}`}>{placeholderEmailAddress}</Link>{' '}
            {copy.rightsAfterEmail}
        </Text>
    </>
);

export const PrivacyPage: FunctionComponent = () => (
    <Page>
        <article aria-labelledby="privacy-title">
            <Breadcrumb
                trail={homeBreadcrumbTrail}
                currentLabel="Privacy notice"
                linkComponent={RoutedLink}
            />
            <div className="nv-privacy-page">
                <Heading level={1} size={HeadingSize.Title} id="privacy-title">
                    Privacy notice
                </Heading>
                <PrivacyNotice />
            </div>
        </article>
    </Page>
);
