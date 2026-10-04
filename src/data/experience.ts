export interface IExperienceEntry {
    title: string;
    organisation: string;
    dates: string;
    note: string;
    /** Marks a milestone on the timeline with an icon in place of the plain dot. */
    icon?: string;
}

/** Newest first. From Naomi's CV. */
export const experience: IExperienceEntry[] = [
    {
        title: "Software Engineer II",
        organisation: "PebblePad",
        dates: "Oct 2025 – present",
        note: "Delivered closed captions and transcription for uploaded audio and video across 3 products, and resolved 100+ WCAG 2.2 issues in a dedicated accessibility team.",
    },
    {
        title: "Software Engineer I",
        organisation: "PebblePad",
        dates: "Aug 2023 – Oct 2025",
        note: "Engineered the front end of a self-service settings capability spanning 3 products, and introduced the first automated tests for the authorisation layer.",
    },
    {
        title: "BSc (Hons) Digital and Technology Solutions Professional (Software Engineering)",
        organisation: "University of Wolverhampton · First Class Honours",
        dates: "2019 – 2023",
        note: "Degree apprenticeship, alongside full-time delivery.",
        icon: "graduation-cap",
    },
    {
        title: "Apprentice Software Engineer",
        organisation: "PebblePad",
        dates: "Jul 2019 – Aug 2023",
        note: "Built in-product messaging, and a pdf.js document viewer that replaced commercially licensed libraries to cut recurring costs.",
    },
];
