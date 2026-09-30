import type { FunctionComponent } from 'react';
import {
    Breadcrumb,
    ButtonVariant,
    downloadIcon,
    ExclamationBubble,
    ExternalLink,
    externalLinkIcon,
    Heading,
    Icon,
    LinkButton,
    LinkTile,
    mailIcon,
    Text,
} from '@naovixen/components';

import { GreetingHeading } from '../../components/greeting-heading/GreetingHeading.component';
import { Page } from '../../components/page/Page.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { placeholderContactLinks } from './constants/PlaceholderContactLinks.const';
import { placeholderContactPage } from './constants/PlaceholderContactPage.const';

const CvTile: FunctionComponent = () => (
    <LinkTile
        href={placeholderCvPath}
        download
        label="Download CV"
        detail="PDF"
        icon={downloadIcon}
        trailingIcon={downloadIcon}
    />
);

/** Profiles on other sites open in a new tab; the CV downloads. */
const ContactLinks: FunctionComponent = () => (
    <ul className="nv-contact-page__links">
        {placeholderContactLinks.map((contactLink) => (
            <li key={contactLink.url}>
                <LinkTile
                    href={contactLink.url}
                    label={contactLink.label}
                    detail={contactLink.detail}
                    icon={contactLink.icon}
                    trailingIcon={externalLinkIcon}
                    linkComponent={ExternalLink}
                />
            </li>
        ))}
        <li>
            <CvTile />
        </li>
    </ul>
);

export const ContactPage: FunctionComponent = () => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="Contact" />
        <div className="nv-contact-page">
            <GreetingHeading
                greeting={<ExclamationBubble>{placeholderContactPage.greeting}</ExclamationBubble>}
            >
                Let's talk
            </GreetingHeading>
            <Text className="nv-contact-page__body">{placeholderContactPage.body}</Text>
            <LinkButton href={`mailto:${placeholderEmailAddress}`} variant={ButtonVariant.Primary}>
                {placeholderEmailAddress} <Icon source={mailIcon} />
            </LinkButton>
            <Heading level={2} className="nv-contact-page__elsewhere">
                or find me here
            </Heading>
            <ContactLinks />
        </div>
    </Page>
);
