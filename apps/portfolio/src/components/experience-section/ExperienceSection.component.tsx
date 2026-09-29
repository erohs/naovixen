import type { FunctionComponent } from 'react';
import { arrowRightIcon, LinkIcon, VisuallyHidden } from '@naovixen/components';

import { education } from '../../constants/Education.const';
import { employer } from '../../constants/Employer.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { EducationSummary } from '../education-summary/EducationSummary.component';
import { EmployerHistory } from '../employer-history/EmployerHistory.component';
import { HomeSection } from '../home-section/HomeSection.component';

export const ExperienceSection: FunctionComponent = () => (
    <HomeSection
        id="experience"
        heading="Experience"
        headingId="experience-title"
        intro={placeholderHomePage.experienceIntro}
        action={
            <LinkIcon href={placeholderCvPath} download icon={arrowRightIcon}>
                Full CV<VisuallyHidden> (PDF)</VisuallyHidden>
            </LinkIcon>
        }
    >
        <div className="nx-experience-section">
            <EmployerHistory employer={employer} />
            <EducationSummary education={education} />
        </div>
    </HomeSection>
);
