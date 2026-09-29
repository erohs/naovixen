import type { FunctionComponent } from 'react';
import { graduationCapIcon, Heading, Icon, Text, TextVariant } from '@naovixen/components';

import type { IEducationSummaryProps } from './interfaces/IEducationSummaryProps';

export const EducationSummary: FunctionComponent<IEducationSummaryProps> = ({ education }) => (
    <div className="nx-education-summary">
        <Icon source={graduationCapIcon} className="nx-education-summary__icon" />
        <div className="nx-education-summary__details">
            <Heading level={3} className="nx-education-summary__degree">
                {education.degree}
            </Heading>
            <Text variant={TextVariant.Meta}>{education.dates}</Text>
            <Text>
                {education.institution} · <strong>{education.grade}</strong>
            </Text>
            <Text variant={TextVariant.Small}>{education.note}</Text>
        </div>
    </div>
);
