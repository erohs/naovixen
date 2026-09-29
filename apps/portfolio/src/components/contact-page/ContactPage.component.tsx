import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { ButtonVariant, Heading, Icon, LinkButton, mailIcon, Text } from '@naovixen/components';
import { Space, Stack } from '@naovixen/layout';

import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderContactPage } from '../../constants/PlaceholderContactPage.const';
import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { ContactLinkList } from '../contact-link-list/ContactLinkList.component';
import { GreetingHeading } from '../greeting-heading/GreetingHeading.component';
import { Page } from '../page/Page.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';

export const ContactPage: FunctionComponent = () => (
    <Page>
        <Stack gap={Space.BetweenGroups} className="nx-contact-page">
            <Breadcrumb
                trail={homeBreadcrumbTrail}
                currentLabel="Contact"
                linkComponent={RoutedLink}
            />
            <GreetingHeading greeting={placeholderContactPage.greeting}>Let's talk</GreetingHeading>
            <Text className="nx-contact-page__body">{placeholderContactPage.body}</Text>
            <div>
                <LinkButton
                    href={`mailto:${placeholderEmailAddress}`}
                    variant={ButtonVariant.Primary}
                >
                    {placeholderEmailAddress} <Icon source={mailIcon} />
                </LinkButton>
            </div>
            <Heading level={2} className="nx-contact-page__elsewhere">
                or find me here
            </Heading>
            <ContactLinkList />
        </Stack>
    </Page>
);
