import type { FunctionComponent } from "react";
import { SectionHeading } from "@naovixen/components";
import { InterestList } from "../../components/interest-list/InterestList.component";
import { placeholderInterests } from "../../constants/PlaceholderInterests.const";
import { translate } from "../../translate/Translate.const";
import { PrincipleList } from "./PrincipleList.component";

export const AboutDetails: FunctionComponent = () => (
    <div className="nv-about-details">
        <section aria-labelledby="how-i-work-title" className="nv-about-details__section">
            <SectionHeading headingId="how-i-work-title">{translate("about.howIWork")}</SectionHeading>
            <PrincipleList />
        </section>
        <section aria-labelledby="interests-title" className="nv-about-details__section">
            <SectionHeading headingId="interests-title">{translate("interests.heading")}</SectionHeading>
            <InterestList interests={placeholderInterests} />
        </section>
    </div>
);
