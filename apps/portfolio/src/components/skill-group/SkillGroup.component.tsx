import type { FunctionComponent } from 'react';
import { useId } from 'react';
import { Heading } from '@naovixen/components';

import { SkillTile } from '../skill-tile/SkillTile.component';
import type { ISkillGroupProps } from './interfaces/ISkillGroupProps';

export const SkillGroup: FunctionComponent<ISkillGroupProps> = ({ group }) => {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="nx-skill-group">
            <Heading level={3} id={headingId} className="nx-skill-group__label">
                {group.label}
            </Heading>
            <ul className="nx-skill-group__skills">
                {group.skills.map((skill) => (
                    <SkillTile key={skill.name} skill={skill} />
                ))}
            </ul>
        </section>
    );
};
