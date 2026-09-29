import type { FunctionComponent } from 'react';
import { Heading, Text, TextVariant } from '@naovixen/components';

import type { IEmployerRoleProps } from './interfaces/IEmployerRoleProps';

/** A step on the employer's timeline. The dot and the line to the next step are drawn by the stylesheet. */
export const EmployerRole: FunctionComponent<IEmployerRoleProps> = ({ role }) => (
    <li className="nx-employer-role">
        <div className="nx-employer-role__header">
            <Heading level={4} className="nx-employer-role__title">
                {role.title}
            </Heading>
            <Text variant={TextVariant.Meta}>{role.dates}</Text>
        </div>
        <Text className="nx-employer-role__summary">{role.summary}</Text>
    </li>
);
