import type { FunctionComponent } from 'react';
import { Breadcrumb, HandDrawnRule, SectionHeading, SpeechBubble } from '@naovixen/blocks';
import {
    arrowRightIcon,
    ButtonVariant,
    downloadIcon,
    Icon,
    LinkButton,
    Text,
    TextVariant,
} from '@naovixen/components';

import { GreetingHeading } from '../../components/greeting-heading/GreetingHeading.component';
import { InterestList } from '../../components/interest-list/InterestList.component';
import { Page } from '../../components/page/Page.component';
import { PhotoPlaceholder } from '../../components/photo-placeholder/PhotoPlaceholder.component';
import { RoutedLink } from '../../components/routed-link/RoutedLink.component';
import { RouterLinkButton } from '../../components/router-link-button/RouterLinkButton.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { placeholderInterests } from '../../constants/PlaceholderInterests.const';
import { placeholderPhotoDescription } from '../../constants/PlaceholderPhotoDescription.const';
import { placeholderAboutPage } from './constants/PlaceholderAboutPage.const';

const AboutIntroduction: FunctionComponent = () => (
    <div className="nx-about-introduction">
        <div className="nx-about-introduction__text">
            <GreetingHeading
                greeting={<SpeechBubble>{placeholderAboutPage.greeting}</SpeechBubble>}
            >
                About me
            </GreetingHeading>
            <Text variant={TextVariant.Lead}>{placeholderAboutPage.lead}</Text>
            {placeholderAboutPage.paragraphs.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
            ))}
        </div>
        <PhotoPlaceholder
            description={placeholderPhotoDescription}
            className="nx-about-introduction__photo"
        />
    </div>
);

const PrincipleList: FunctionComponent = () => (
    <dl className="nx-principle-list">
        {placeholderAboutPage.principles.map((principle) => (
            <div key={principle.title} className="nx-principle-list__item">
                <dt className="nx-principle-list__title">{principle.title}</dt>
                <dd className="nx-principle-list__description">{principle.description}</dd>
            </div>
        ))}
    </dl>
);

const AboutDetails: FunctionComponent = () => (
    <div className="nx-about-details">
        <section aria-labelledby="how-i-work-title" className="nx-about-details__section">
            <SectionHeading headingId="how-i-work-title">How I work</SectionHeading>
            <PrincipleList />
        </section>
        <section aria-labelledby="interests-title" className="nx-about-details__section">
            <SectionHeading headingId="interests-title">Away from the keyboard</SectionHeading>
            <InterestList interests={placeholderInterests} />
        </section>
    </div>
);

const AboutActions: FunctionComponent = () => (
    <div className="nx-about-actions">
        <LinkButton href={placeholderCvPath} download variant={ButtonVariant.Primary}>
            Download CV <Icon source={downloadIcon} />
        </LinkButton>
        <RouterLinkButton to="/contact">
            Get in touch <Icon source={arrowRightIcon} />
        </RouterLinkButton>
    </div>
);

export const AboutPage: FunctionComponent = () => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="About" linkComponent={RoutedLink} />
        <div className="nx-about-page__content">
            <AboutIntroduction />
            <HandDrawnRule className="nx-about-page__rule" />
            <AboutDetails />
            <AboutActions />
        </div>
    </Page>
);
