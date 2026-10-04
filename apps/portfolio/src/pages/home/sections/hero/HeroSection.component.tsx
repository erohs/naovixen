import type { FunctionComponent } from "react";
import { Heading, HeadingSize, Icon, pawIcon, Text, TextVariant } from "@naovixen/components";
import { ExclamationBubble } from "../../../../components/speech-bubble/ExclamationBubble.component";
import { translate } from "../../../../translate/Translate.const";
import { HeroActions } from "./HeroActions.component";
import type { IHeroSectionProps } from "./interfaces/IHeroSectionProps";

export const HeroSection: FunctionComponent<IHeroSectionProps> = ({ hasFeaturedProjects }) => (
    <section aria-labelledby="hero-title" className="nv-hero-section">
        <ExclamationBubble>{translate("home.greeting")}</ExclamationBubble>
        <Heading level={1} size={HeadingSize.Display} id="hero-title">
            {translate("home.givenName")}{" "}
            <span className="nv-hero-section__surname">
                <span className="nv-hero-section__highlight">{translate("home.familyName")}</span>
                <Icon source={pawIcon} className="nv-hero-section__paw" />
            </span>
        </Heading>
        <Text variant={TextVariant.Lead} className="nv-hero-section__summary">
            {translate("home.summary")}
        </Text>
        <HeroActions hasFeaturedProjects={hasFeaturedProjects} />
    </section>
);
