import type { IBlogPost } from '@naovixen/models';

import { placeholderBlogPostBody } from './PlaceholderBlogPostBody.const';

/** Placeholder from the prototype. Naomi has no posts yet; Phase 7 loads real ones from Sanity. */
export const placeholderBlogPosts: readonly IBlogPost[] = [
    {
        slug: 'focus-states-that-dont-fight-your-design',
        title: "Focus states that don't fight your design",
        excerpt: 'How to make keyboard focus obvious without it clashing with shadows and borders.',
        publishedAt: '2026-09-02',
        readingTimeInMinutes: 6,
        tags: ['CSS', 'Accessibility'],
        body: placeholderBlogPostBody,
    },
    {
        slug: 'what-a-habit-tracker-taught-me-about-offline-sync',
        title: 'What a habit tracker taught me about offline sync',
        excerpt: 'Conflict resolution, queues and the rule I wish I had picked on day one.',
        publishedAt: '2026-08-14',
        readingTimeInMinutes: 8,
        tags: ['TypeScript', 'Sync'],
        body: placeholderBlogPostBody,
    },
    {
        slug: 'a-tiny-cli-start-to-finish',
        title: 'A tiny CLI, start to finish',
        excerpt: 'Designing a command-line tool that people can guess their way around.',
        publishedAt: '2026-07-03',
        readingTimeInMinutes: 7,
        tags: ['Node.js', 'Tooling'],
        body: placeholderBlogPostBody,
    },
    {
        slug: 'charts-people-can-actually-read',
        title: 'Charts people can actually read',
        excerpt: 'Labels over legends, fewer colours, and other small wins for clarity.',
        publishedAt: '2026-06-09',
        readingTimeInMinutes: 5,
        tags: ['Data viz', 'D3.js'],
        body: placeholderBlogPostBody,
    },
    {
        slug: 'my-code-review-checklist',
        title: 'My code review checklist',
        excerpt: 'The five questions I ask of every pull request, including my own.',
        publishedAt: '2026-05-20',
        readingTimeInMinutes: 4,
        tags: ['Process'],
        body: placeholderBlogPostBody,
    },
];
