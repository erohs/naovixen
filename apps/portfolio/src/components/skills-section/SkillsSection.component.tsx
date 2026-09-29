import type { FunctionComponent } from 'react';

import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { placeholderSkillGroups } from '../../constants/PlaceholderSkillGroups.const';
import { HomeSection } from '../home-section/HomeSection.component';
import { SkillGroup } from '../skill-group/SkillGroup.component';

export const SkillsSection: FunctionComponent = () => (
    <HomeSection heading="Skills" headingId="skills-title" intro={placeholderHomePage.skillsIntro}>
        <div className="nx-skills-section__groups">
            {placeholderSkillGroups.map((group) => (
                <SkillGroup key={group.label} group={group} />
            ))}
        </div>
    </HomeSection>
);
