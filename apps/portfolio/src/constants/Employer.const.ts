import type { IEmployer } from '../interfaces/IEmployer';

/** From Naomi's CV. */
export const employer: IEmployer = {
    name: 'PebblePad',
    place: 'UK',
    description: 'Higher-education portfolio and assessment platform',
    dates: 'July 2019 – present',
    roles: [
        {
            title: 'Software Engineer II',
            dates: 'Oct 2025 – present',
            summary:
                'Delivered closed captions and transcription for uploaded audio and video across 3 products, and resolved 100+ WCAG 2.2 issues in a dedicated accessibility team.',
        },
        {
            title: 'Software Engineer I',
            dates: 'Aug 2023 – Oct 2025',
            summary:
                'Engineered the front end of a self-service settings capability spanning 3 products, and introduced the first automated tests for the authorisation layer.',
        },
        {
            title: 'Apprentice Software Engineer',
            dates: 'Jul 2019 – Aug 2023',
            summary:
                'Built in-product messaging, and a pdf.js document viewer that replaced commercially licensed libraries to cut recurring costs.',
        },
    ],
};
