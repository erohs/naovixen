import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { IFactListProps } from './interfaces/IFactListProps';

/** Labelled facts, such as a role and a timeline, side by side where they fit. */
export const FactList: FunctionComponent<IFactListProps> = ({ facts, className, ...listProps }) => (
    <dl {...listProps} className={joinClassNames('nv-fact-list', className)}>
        {facts.map((fact) => (
            <div key={fact.label}>
                <dt className="nv-fact-list__label">{fact.label}</dt>
                <dd className="nv-fact-list__value">{fact.value}</dd>
            </div>
        ))}
    </dl>
);
