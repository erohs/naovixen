import type { FunctionComponent } from "react";
import { arrowRightIcon, Link, LinkVariant } from "@naovixen/components";
import { placeholderCvPath } from "../../constants/PlaceholderCvPath.const";
import { translate } from "../../translate/Translate.const";
import { EducationSummary } from "./EducationSummary.component";
import { EmployerHistory } from "./EmployerHistory.component";
import { HomeSection } from "./HomeSection.component";

export const ExperienceSection: FunctionComponent = () => (
    <HomeSection
        id="experience"
        heading={translate("experience.heading")}
        headingId="experience-title"
        intro={translate("experience.intro")}
        action={
            <Link
                href={placeholderCvPath}
                download
                variant={LinkVariant.Standalone}
                aria-label={translate("cv.fullWithFileType")}>
                {translate("cv.full")} <Link.Icon source={arrowRightIcon} />
            </Link>
        }>
        <div className="nv-experience-section">
            <EmployerHistory />
            <EducationSummary />
        </div>
    </HomeSection>
);
