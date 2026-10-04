import type { FunctionComponent } from "react";
import { Breadcrumb, ButtonVariant, Heading, LinkButton, mailIcon, Text } from "@naovixen/components";
import { GreetingHeading } from "../../components/greeting-heading/GreetingHeading.component";
import { ExclamationBubble } from "../../components/speech-bubble/ExclamationBubble.component";
import { homeBreadcrumbTrail } from "../../features/site/constants/HomeBreadcrumbTrail.const";
import { placeholderEmailAddress } from "../../features/site/constants/PlaceholderEmailAddress.const";
import { translate } from "../../translate/Translate.const";
import { ContactLinks } from "./sections/contact-links/ContactLinks.component";

export const ContactPage: FunctionComponent = () => (
    <div className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("navigation.contact")} />
        <div className="nv-contact-page">
            <GreetingHeading greeting={<ExclamationBubble>{translate("contact.greeting")}</ExclamationBubble>}>
                {translate("contact.heading")}
            </GreetingHeading>
            <Text className="nv-contact-page__body">{translate("contact.body")}</Text>
            <LinkButton href={`mailto:${placeholderEmailAddress}`} variant={ButtonVariant.Primary}>
                {placeholderEmailAddress} <LinkButton.Icon source={mailIcon} />
            </LinkButton>
            <Heading level={2} className="nv-contact-page__elsewhere">
                {translate("contact.elsewhere")}
            </Heading>
            <ContactLinks />
        </div>
    </div>
);
