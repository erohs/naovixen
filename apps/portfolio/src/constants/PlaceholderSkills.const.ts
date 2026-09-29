import { SkillLevel } from '../enums/SkillLevel';
import type { ISkill } from '../interfaces/ISkill';

/**
 * Placeholder from the prototype, not Naomi's skills: several are not on her CV, and the years
 * and levels are invented.
 */
export const placeholderSkills: readonly ISkill[] = [
    {
        name: 'TypeScript',
        use: 'Everything, front to back',
        yearsOfExperience: 5,
        level: SkillLevel.Expert,
    },
    {
        name: 'React',
        use: 'Interfaces and design systems',
        yearsOfExperience: 5,
        level: SkillLevel.Expert,
    },
    { name: 'Node.js', use: 'APIs and tooling', yearsOfExperience: 4, level: SkillLevel.Advanced },
    {
        name: 'PostgreSQL',
        use: 'Data that needs to last',
        yearsOfExperience: 4,
        level: SkillLevel.Advanced,
    },
    {
        name: 'AI-assisted development',
        use: 'Agentic workflows and LLM APIs',
        yearsOfExperience: 2,
        level: SkillLevel.Advanced,
    },
    {
        name: 'Python',
        use: 'Data work and scripts',
        yearsOfExperience: 3,
        level: SkillLevel.Confident,
    },
    {
        name: 'Playwright',
        use: 'End-to-end and a11y tests',
        yearsOfExperience: 3,
        level: SkillLevel.Advanced,
    },
    {
        name: 'Docker',
        use: 'Local dev and deploys',
        yearsOfExperience: 3,
        level: SkillLevel.Confident,
    },
];
