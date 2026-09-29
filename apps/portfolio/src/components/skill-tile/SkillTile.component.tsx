import type { FunctionComponent } from 'react';
import { Icon } from '@naovixen/components';

import type { ISkillTileProps } from './interfaces/ISkillTileProps';

/** The logo repeats the name written beneath it, so the icon stays hidden from screen readers. */
export const SkillTile: FunctionComponent<ISkillTileProps> = ({ skill }) => (
    <li className="nx-skill-tile">
        <span className="nx-skill-tile__logo">
            <Icon source={skill.logo} />
        </span>
        <span>{skill.name}</span>
    </li>
);
