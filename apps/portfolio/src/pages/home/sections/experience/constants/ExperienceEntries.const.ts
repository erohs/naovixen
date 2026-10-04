import { graduationCapIcon } from "@naovixen/components";
import type { IExperienceEntry } from "../interfaces/IExperienceEntry";

/** From Naomi's CV, newest first, with the degree where it finished. */
export const experienceEntries: readonly IExperienceEntry[] = [
    {
        title: "experience.engineerTwo",
        organisation: "experience.pebblePad",
        dates: "experience.engineerTwoDates",
        note: "experience.engineerTwoNote",
    },
    {
        title: "experience.engineerOne",
        organisation: "experience.pebblePad",
        dates: "experience.engineerOneDates",
        note: "experience.engineerOneNote",
    },
    {
        title: "experience.degree",
        organisation: "experience.university",
        dates: "experience.degreeDates",
        note: "experience.degreeNote",
        icon: graduationCapIcon,
    },
    {
        title: "experience.apprentice",
        organisation: "experience.pebblePad",
        dates: "experience.apprenticeDates",
        note: "experience.apprenticeNote",
    },
];
