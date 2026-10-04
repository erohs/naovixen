import type { FunctionComponent } from "react";
import { arrowRightIcon, ButtonVariant, Heading, HeadingSize, LinkButton, mailIcon, Text } from "@naovixen/components";
import { placeholderEmailAddress } from "../../../../features/site/constants/PlaceholderEmailAddress.const";
import { translate } from "../../../../translate/Translate.const";

export const ContactBanner: FunctionComponent = () => (
    <section aria-labelledby="contact-title" className="nv-contact-banner">
        <div className="nv-contact-banner__panel">
            <div className="nv-contact-banner__text">
                <Heading level={2} size={HeadingSize.H3} id="contact-title">
                    {translate("home.contactHeading")}
                </Heading>
                <Text>{translate("home.contactBody")}</Text>
            </div>
            <div className="nv-contact-banner__actions">
                <LinkButton href="/contact" variant={ButtonVariant.Primary}>
                    {translate("home.getInTouch")} <LinkButton.Icon source={arrowRightIcon} />
                </LinkButton>
                <LinkButton href={`mailto:${placeholderEmailAddress}`}>
                    {placeholderEmailAddress} <LinkButton.Icon source={mailIcon} />
                </LinkButton>
            </div>
        </div>
    </section>
);
