import type { FunctionComponent } from 'react';
import { Heading, HeadingSize, Icon, pawIcon, Text, TextVariant } from '@naovixen/components';
import { Container } from '@naovixen/layout';

import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { ExclamationBubble } from '../exclamation-bubble/ExclamationBubble.component';
import { HeroActions } from '../hero-actions/HeroActions.component';

export const HeroSection: FunctionComponent = () => (
    <Container as="section" aria-labelledby="hero-title" className="nx-hero-section">
        <ExclamationBubble>{placeholderHomePage.greeting}</ExclamationBubble>
        <Heading level={1} size={HeadingSize.Display} id="hero-title">
            Naomi{' '}
            <span className="nx-hero-section__surname">
                <span className="nx-hero-section__highlight">Shore</span>
                <Icon source={pawIcon} className="nx-hero-section__paw" />
            </span>
        </Heading>
        <Text variant={TextVariant.Lead} className="nx-hero-section__summary">
            {placeholderHomePage.summary}
        </Text>
        <HeroActions />
    </Container>
);
