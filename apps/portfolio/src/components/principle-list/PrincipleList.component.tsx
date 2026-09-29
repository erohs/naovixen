import type { FunctionComponent } from 'react';

import type { IPrincipleListProps } from './interfaces/IPrincipleListProps';

export const PrincipleList: FunctionComponent<IPrincipleListProps> = ({ principles }) => (
    <dl className="nx-principle-list">
        {principles.map((principle) => (
            <div key={principle.title} className="nx-principle-list__item">
                <dt className="nx-principle-list__title">{principle.title}</dt>
                <dd className="nx-principle-list__description">{principle.description}</dd>
            </div>
        ))}
    </dl>
);
