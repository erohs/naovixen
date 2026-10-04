import type { FunctionComponent } from "react";
import { FormattedMessage, Text } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import { skillGroups } from "./constants/SkillGroups.const";
import { HomeSection } from "./HomeSection.component";
import { SkillGroup } from "./SkillGroup.component";

export const SkillsSection: FunctionComponent = () => (
    <HomeSection heading={translate("skills.heading")} headingId="skills-title" intro={translate("skills.intro")}>
        <div className="nv-skills-section__groups">
            {skillGroups.map((group) => (
                <SkillGroup key={group.label} group={group} />
            ))}
        </div>
        <Text className="nv-skills-section__also">
            <FormattedMessage message={translate("skills.also")} />
        </Text>
    </HomeSection>
);
