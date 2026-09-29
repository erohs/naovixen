import type { SkillLevel } from '../enums/SkillLevel';

export interface ISkill {
    readonly name: string;
    /** What it is used for, such as "APIs and tooling". */
    readonly use: string;
    readonly yearsOfExperience: number;
    readonly level: SkillLevel;
}
