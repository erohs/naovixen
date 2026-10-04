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
} from "@naovixen/components";
import type { ISkillGroup } from "../interfaces/ISkillGroup";

/**
 * Placeholder from the prototype. Most are on Naomi's CV; Node.js, Docker, Playwright and
 * GitHub Copilot are not, so she should confirm the list.
 */
export const placeholderSkillGroups: readonly ISkillGroup[] = [
    {
        label: "skills.languages",
        skills: [
            { name: "skills.typeScript", logo: typeScriptIcon },
            { name: "skills.javaScript", logo: javaScriptIcon },
            { name: "skills.cSharp", logo: cSharpIcon },
            { name: "skills.html", logo: htmlIcon },
            { name: "skills.css", logo: cssIcon },
        ],
    },
    {
        label: "skills.frontEnd",
        skills: [
            { name: "skills.react", logo: reactIcon },
            { name: "skills.angularJs", logo: angularIcon },
            { name: "skills.accessibility", logo: accessibilityIcon },
        ],
    },
    {
        label: "skills.backEndAndCloud",
        skills: [
            { name: "skills.dotNet", logo: dotNetIcon },
            { name: "skills.nodeJs", logo: nodeJsIcon },
            { name: "skills.aws", logo: awsIcon },
            { name: "skills.docker", logo: dockerIcon },
        ],
    },
    {
        label: "skills.toolingAndAi",
        skills: [
            { name: "skills.playwright", logo: playwrightIcon },
            { name: "skills.git", logo: gitIcon },
            { name: "skills.gitHubCopilot", logo: gitHubCopilotIcon },
            { name: "skills.claude", logo: claudeIcon },
        ],
    },
];
