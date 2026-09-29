import { SkillLevel } from '../../../enums/SkillLevel';

/** How many of the four dots a level fills: one for learning, four for expert. */
export function countLevelDots(level: SkillLevel): number {
    return Object.values(SkillLevel).indexOf(level) + 1;
}
