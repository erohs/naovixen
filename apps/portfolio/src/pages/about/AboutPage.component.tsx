import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    Breadcrumb,
    ButtonGroup,
    ButtonVariant,
    downloadIcon,
    HandDrawnRule,
    Icon,
    LinkButton,
    SectionHeading,
    SpeechBubble,
    Text,
    TextVariant,
} from '@naovixen/components';

import { GreetingHeading } from '../../components/greeting-heading/GreetingHeading.component';
import { InterestList } from '../../components/interest-list/InterestList.component';
import { Page } from '../../components/page/Page.component';
import { PhotoPlaceholder } from '../../components/photo-placeholder/PhotoPlaceholder.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { placeholderInterests } from '../../constants/PlaceholderInterests.const';
import { placeholderPhotoDescription } from '../../constants/PlaceholderPhotoDescription.const';
import { placeholderAboutPage } from './constants/PlaceholderAboutPage.const';

const AboutIntroduction: FunctionComponent = () => (
    <div className="nv-about-introduction">
        <div className="nv-about-introduction__text">
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
            className="nv-about-introduction__photo"
        />
    </div>
);

const PrincipleList: FunctionComponent = () => (
    <dl className="nv-principle-list">
        {placeholderAboutPage.principles.map((principle) => (
            <div key={principle.title} className="nv-principle-list__item">
                <dt className="nv-principle-list__title">{principle.title}</dt>
                <dd className="nv-principle-list__description">{principle.description}</dd>
            </div>
        ))}
    </dl>
);

const AboutDetails: FunctionComponent = () => (
    <div className="nv-about-details">
        <section aria-labelledby="how-i-work-title" className="nv-about-details__section">
            <SectionHeading headingId="how-i-work-title">How I work</SectionHeading>
            <PrincipleList />
        </section>
        <section aria-labelledby="interests-title" className="nv-about-details__section">
            <SectionHeading headingId="interests-title">Away from the keyboard</SectionHeading>
            <InterestList interests={placeholderInterests} />
        </section>
    </div>
);

const AboutActions: FunctionComponent = () => (
    <ButtonGroup>
        <LinkButton href={placeholderCvPath} download variant={ButtonVariant.Primary}>
            Download CV <Icon source={downloadIcon} />
        </LinkButton>
        <LinkButton href="/contact">
            Get in touch <Icon source={arrowRightIcon} />
        </LinkButton>
    </ButtonGroup>
);

export const AboutPage: FunctionComponent = () => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="About" />
        <div className="nv-about-page__content">
            <AboutIntroduction />
            <HandDrawnRule className="nv-about-page__rule" />
            <AboutDetails />
            <AboutActions />
        </div>
    </Page>
);
