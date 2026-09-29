import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { ButtonVariant, Heading, Icon, LinkButton, mailIcon, Text } from '@naovixen/components';

import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderContactPage } from '../../constants/PlaceholderContactPage.const';
import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { ContactLinkList } from '../contact-link-list/ContactLinkList.component';
import { ExclamationBubble } from '../exclamation-bubble/ExclamationBubble.component';
import { GreetingHeading } from '../greeting-heading/GreetingHeading.component';
import { Page } from '../page/Page.component';
import { RoutedLink } from '../routed-link/RoutedLink.component';

export const ContactPage: FunctionComponent = () => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="Contact" linkComponent={RoutedLink} />
        <div className="nx-contact-page">
            <GreetingHeading
                greeting={<ExclamationBubble>{placeholderContactPage.greeting}</ExclamationBubble>}
            >
                Let's talk
            </GreetingHeading>
            <Text className="nx-contact-page__body">{placeholderContactPage.body}</Text>
            <LinkButton href={`mailto:${placeholderEmailAddress}`} variant={ButtonVariant.Primary}>
                {placeholderEmailAddress} <Icon source={mailIcon} />
            </LinkButton>
            <Heading level={2} className="nx-contact-page__elsewhere">
                or find me here
            </Heading>
            <ContactLinkList />
        </div>
    </Page>
);
