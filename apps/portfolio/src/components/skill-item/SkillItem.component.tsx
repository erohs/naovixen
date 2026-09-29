import type { FunctionComponent } from 'react';
import { Heading, Text, TextVariant } from '@naovixen/components';

import { levelDotPositions } from './constants/LevelDotPositions.const';
import { countLevelDots } from './functions/CountLevelDots.function';
import { formatYearsOfExperience } from './functions/FormatYearsOfExperience.function';
import type { ISkillItemProps } from './interfaces/ISkillItemProps';

/** The dots repeat the level that is written out beside them, so they are hidden. */
export const SkillItem: FunctionComponent<ISkillItemProps> = ({ skill }) => {
    const filledDots = countLevelDots(skill.level);

    return (
        <li className="nx-skill-item">
            <div>
                <Heading level={3} className="nx-skill-item__name">
                    {skill.name}
                </Heading>
                <Text variant={TextVariant.Small}>{skill.use}</Text>
            </div>
            <div className="nx-skill-item__level">
                <span className="nx-skill-item__dots" aria-hidden="true">
                    {levelDotPositions.map((position) => (
                        <span key={position} data-filled={position <= filledDots} />
                    ))}
                </span>
                <Text variant={TextVariant.Meta}>
                    {formatYearsOfExperience(skill.yearsOfExperience)} · {skill.level}
                </Text>
            </div>
        </li>
    );
};
