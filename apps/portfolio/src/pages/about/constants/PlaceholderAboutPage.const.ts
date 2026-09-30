import type { IPrinciple } from '../interfaces/IPrinciple';

/** Placeholder copy from the prototype, for the about page. Replace before Phase 9. */
export const placeholderAboutPage = {
    greeting: 'the longer version!',
    lead: "I'm Naomi, a software engineer who likes turning fuzzy problems into tidy, well-tested software.",
    paragraphs: [
        'I joined PebblePad as an apprentice in 2019 and earned a first-class BSc through a degree apprenticeship, studying and shipping production code in the same week. That taught me to learn fast and to explain my thinking clearly. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'These days I work mostly between the front end and the API: TypeScript, React and Node.js, plus a growing amount of work with LLM APIs. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    principles: [
        {
            title: 'Small, reviewable changes',
            description:
                'Short pull requests, clear commit messages and tests that explain intent.',
        },
        {
            title: 'Accessible by default',
            description:
                'Keyboard, screen reader and contrast checks are part of done, not a later ticket.',
        },
        {
            title: 'Write it down',
            description: 'Decision records and READMEs so the next person, often me, has context.',
        },
    ] satisfies readonly IPrinciple[],
};
