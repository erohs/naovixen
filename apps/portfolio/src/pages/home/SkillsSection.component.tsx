import type { FunctionComponent } from "react";
import { translate } from "../../translate/Translate.const";
import { placeholderSkillGroups } from "./constants/PlaceholderSkillGroups.const";
import { HomeSection } from "./HomeSection.component";
import { SkillGroup } from "./SkillGroup.component";

export const SkillsSection: FunctionComponent = () => (
    <HomeSection heading={translate("skills.heading")} headingId="skills-title" intro={translate("skills.intro")}>
        <div className="nv-skills-section__groups">
            {placeholderSkillGroups.map((group) => (
                <SkillGroup key={group.label} group={group} />
            ))}
        </div>
    </HomeSection>
);
