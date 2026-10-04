export interface SkillGroup {
    label: string;
    /** Each skill names its icon in src/icons; one with no logo of its own takes a generic icon. */
    skills: { name: string; icon: string }[];
}

/** From Naomi's CV. */
export const skillGroups: SkillGroup[] = [
    {
        label: "languages & frameworks",
        skills: [
            { name: "TypeScript", icon: "typescript" },
            { name: "JavaScript", icon: "javascript" },
            { name: "React", icon: "react" },
            { name: "C#", icon: "csharp" },
            { name: ".NET", icon: "dotnet" },
            { name: "AngularJS", icon: "angular" },
            { name: "RxJS", icon: "rxjs" },
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
        ],
    },
    {
        label: "data & cloud",
        skills: [
            { name: "AWS", icon: "aws" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "SQL", icon: "database" },
        ],
    },
    {
        label: "accessibility",
        skills: [
            { name: "WCAG 2.2", icon: "accessibility" },
            { name: "ARIA", icon: "code-xml" },
            { name: "Assistive tech testing", icon: "keyboard" },
            { name: "Inclusive design", icon: "contrast" },
        ],
    },
    {
        label: "AI & delivery",
        skills: [
            { name: "Claude Code", icon: "claude" },
            { name: "Agentic workflows", icon: "network" },
            { name: "Jest", icon: "jest" },
            { name: "Git", icon: "git" },
            { name: "Azure DevOps", icon: "azure-devops" },
            { name: "CI/CD", icon: "workflow" },
        ],
    },
];
