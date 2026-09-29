import type { FunctionComponent } from 'react';
import { Grid, Space } from '@naovixen/layout';

import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { placeholderSkills } from '../../constants/PlaceholderSkills.const';
import { HomeSection } from '../home-section/HomeSection.component';
import { SkillItem } from '../skill-item/SkillItem.component';

export const SkillsSection: FunctionComponent = () => (
    <HomeSection heading="Skills" headingId="skills-title" intro={placeholderHomePage.skillsIntro}>
        <Grid as="ul" gap={Space.BetweenGroups} className="nx-skills-section__list">
            {placeholderSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
            ))}
        </Grid>
    </HomeSection>
);
