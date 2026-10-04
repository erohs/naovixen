import type { FunctionComponent } from "react";
import { arrowRightIcon, Heading, Link, LinkVariant, Text, TextVariant } from "@naovixen/components";
import { InterestList } from "../../../../components/interest-list/InterestList.component";
import { interests } from "../../../../features/site/constants/Interests.const";
import { translate } from "../../../../translate/Translate.const";

export const AboutSummary: FunctionComponent = () => (
    <div className="nv-about-summary">
        <Heading level={2} id="about-title" className="nv-about-summary__heading">
            {translate("home.aboutHeading")}
        </Heading>
        <Text variant={TextVariant.Lead}>{translate("home.aboutLead")}</Text>
        <Text className="nv-about-summary__body">{translate("home.aboutBody")}</Text>
        <Heading level={3} className="nv-about-summary__subheading">
            {translate("interests.heading")}
        </Heading>
        <InterestList interests={interests} />
        <p className="nv-about-summary__more">
            <Link href="/about" variant={LinkVariant.Standalone}>
                {translate("home.moreAboutMe")} <Link.Icon source={arrowRightIcon} />
            </Link>
        </p>
    </div>
);
