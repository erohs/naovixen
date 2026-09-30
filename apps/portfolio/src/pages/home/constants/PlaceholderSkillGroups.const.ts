import {
    accessibilityIcon,
    angularIcon,
    awsIcon,
    claudeIcon,
    cSharpIcon,
    cssIcon,
    dockerIcon,
    dotNetIcon,
    gitHubCopilotIcon,
    gitIcon,
    htmlIcon,
    javaScriptIcon,
    nodeJsIcon,
    playwrightIcon,
    reactIcon,
    typeScriptIcon,
} from '@naovixen/components';

import type { ISkillGroup } from '../interfaces/ISkillGroup';

/**
 * Placeholder from the prototype. Most are on Naomi's CV; Node.js, Docker, Playwright and
 * GitHub Copilot are not, so she should confirm the list.
 */
export const placeholderSkillGroups: readonly ISkillGroup[] = [
    {
        label: 'languages',
        skills: [
            { name: 'TypeScript', logo: typeScriptIcon },
            { name: 'JavaScript', logo: javaScriptIcon },
            { name: 'C#', logo: cSharpIcon },
            { name: 'HTML', logo: htmlIcon },
            { name: 'CSS', logo: cssIcon },
        ],
    },
    {
        label: 'front end',
        skills: [
            { name: 'React', logo: reactIcon },
            { name: 'AngularJS', logo: angularIcon },
            { name: 'Accessibility', logo: accessibilityIcon },
        ],
    },
    {
        label: 'back end & cloud',
        skills: [
            { name: '.NET', logo: dotNetIcon },
            { name: 'Node.js', logo: nodeJsIcon },
            { name: 'AWS', logo: awsIcon },
            { name: 'Docker', logo: dockerIcon },
        ],
    },
    {
        label: 'tooling & AI',
        skills: [
            { name: 'Playwright', logo: playwrightIcon },
            { name: 'Git', logo: gitIcon },
            { name: 'GitHub Copilot', logo: gitHubCopilotIcon },
            { name: 'Claude', logo: claudeIcon },
        ],
    },
];
