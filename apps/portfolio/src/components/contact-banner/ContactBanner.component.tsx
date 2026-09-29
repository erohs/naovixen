import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    ButtonVariant,
    Heading,
    Icon,
    LinkButton,
    mailIcon,
    Text,
} from '@naovixen/components';
import { Cluster, Container, Space } from '@naovixen/layout';

import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { RouterLinkButton } from '../router-link-button/RouterLinkButton.component';

export const ContactBanner: FunctionComponent = () => (
    <Container as="section" aria-labelledby="contact-title" className="nx-contact-banner">
        <div className="nx-contact-banner__panel">
            <div className="nx-contact-banner__text">
                <Heading level={2} id="contact-title">
                    {placeholderHomePage.contactHeading}
                </Heading>
                <Text>{placeholderHomePage.contactBody}</Text>
            </div>
            <Cluster gap={Space.BetweenContent}>
                <RouterLinkButton to="/contact" variant={ButtonVariant.Primary}>
                    Get in touch <Icon source={arrowRightIcon} />
                </RouterLinkButton>
                <LinkButton href={`mailto:${placeholderEmailAddress}`}>
                    {placeholderEmailAddress} <Icon source={mailIcon} />
                </LinkButton>
            </Cluster>
        </div>
    </Container>
);
