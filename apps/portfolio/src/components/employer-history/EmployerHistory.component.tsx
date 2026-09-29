import type { FunctionComponent } from 'react';
import { Heading, Text, TextVariant } from '@naovixen/components';

import { EmployerRole } from '../employer-role/EmployerRole.component';
import type { IEmployerHistoryProps } from './interfaces/IEmployerHistoryProps';

export const EmployerHistory: FunctionComponent<IEmployerHistoryProps> = ({ employer }) => (
    <div className="nx-employer-history">
        <div className="nx-employer-history__header">
            <div>
                <Heading level={3}>
                    {employer.name}
                    <span className="nx-employer-history__place">, {employer.place}</span>
                </Heading>
                <Text variant={TextVariant.Small}>{employer.description}</Text>
            </div>
            <Text variant={TextVariant.Meta}>{employer.dates}</Text>
        </div>
        <ol className="nx-employer-history__roles">
            {employer.roles.map((role) => (
                <EmployerRole key={role.title} role={role} />
            ))}
        </ol>
    </div>
);
