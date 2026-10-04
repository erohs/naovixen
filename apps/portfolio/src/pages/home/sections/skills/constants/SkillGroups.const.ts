import {
    accessibilityIcon,
    angularIcon,
    awsIcon,
    azureDevOpsIcon,
    claudeIcon,
    codeXmlIcon,
    contrastIcon,
    cSharpIcon,
    cssIcon,
    databaseIcon,
    dotNetIcon,
    gitIcon,
    htmlIcon,
    javaScriptIcon,
    jestIcon,
    keyboardIcon,
    mongoDbIcon,
    networkIcon,
    postgreSqlIcon,
    reactIcon,
    rxJsIcon,
    typeScriptIcon,
    workflowIcon,
} from "@naovixen/components";
import type { ISkillGroup } from "../interfaces/ISkillGroup";

/** From Naomi's CV. Skills with no logo of their own take a generic icon for the idea. */
export const skillGroups: readonly ISkillGroup[] = [
    {
        label: "skills.languagesAndFrameworks",
        skills: [
            { name: "skills.typeScript", logo: typeScriptIcon },
            { name: "skills.javaScript", logo: javaScriptIcon },
            { name: "skills.react", logo: reactIcon },
            { name: "skills.cSharp", logo: cSharpIcon },
            { name: "skills.dotNet", logo: dotNetIcon },
            { name: "skills.angularJs", logo: angularIcon },
            { name: "skills.rxJs", logo: rxJsIcon },
            { name: "skills.html", logo: htmlIcon },
            { name: "skills.css", logo: cssIcon },
        ],
    },
    {
        label: "skills.dataAndCloud",
        skills: [
            { name: "skills.aws", logo: awsIcon },
            { name: "skills.postgreSql", logo: postgreSqlIcon },
            { name: "skills.mongoDb", logo: mongoDbIcon },
            { name: "skills.sql", logo: databaseIcon },
        ],
    },
    {
        label: "skills.accessibility",
        skills: [
            { name: "skills.wcag", logo: accessibilityIcon },
            { name: "skills.aria", logo: codeXmlIcon },
            { name: "skills.assistiveTechTesting", logo: keyboardIcon },
            { name: "skills.inclusiveDesign", logo: contrastIcon },
        ],
    },
    {
        label: "skills.aiAndDelivery",
        skills: [
            { name: "skills.claudeCode", logo: claudeIcon },
            { name: "skills.agenticWorkflows", logo: networkIcon },
            { name: "skills.jest", logo: jestIcon },
            { name: "skills.git", logo: gitIcon },
            { name: "skills.azureDevOps", logo: azureDevOpsIcon },
            { name: "skills.ciCd", logo: workflowIcon },
        ],
    },
];
