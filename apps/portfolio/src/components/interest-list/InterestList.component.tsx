import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { IInterestListProps } from './interfaces/IInterestListProps';

export const InterestList: FunctionComponent<IInterestListProps> = ({
    interests,
    className,
    ...listProps
}) => (
    <ul {...listProps} className={joinClassNames('nx-interest-list', className)}>
        {interests.map((interest) => (
            <li key={interest}>{interest}</li>
        ))}
    </ul>
);
