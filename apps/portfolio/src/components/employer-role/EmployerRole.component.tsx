import type { FunctionComponent } from 'react';
import { Heading, Text, TextVariant } from '@naovixen/components';

import type { IEmployerRoleProps } from './interfaces/IEmployerRoleProps';

/** A step on the employer's timeline. The dot and line are drawn by the stylesheet. */
export const EmployerRole: FunctionComponent<IEmployerRoleProps> = ({ role }) => (
    <li className="nx-employer-role">
        <div className="nx-employer-role__header">
            <Heading level={4}>{role.title}</Heading>
            <Text variant={TextVariant.Meta}>{role.dates}</Text>
        </div>
        <Text variant={TextVariant.Small}>{role.summary}</Text>
    </li>
);
