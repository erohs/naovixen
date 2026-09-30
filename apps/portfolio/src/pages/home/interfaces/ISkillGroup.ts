import type { ISkill } from './ISkill';

export interface ISkillGroup {
    /** Written in lower case, as the handwritten label shows it. */
    readonly label: string;
    readonly skills: readonly ISkill[];
}
