import { describe, expect, test } from 'vitest';
import { createImageUrlBuilder } from '@sanity/image-url';

import type { IGroqClient } from '../../interfaces/IGroqClient';
import { SanityProjectRepository } from '../SanityProjectRepository';

const imageUrls = createImageUrlBuilder({ projectId: 'fixture', dataset: 'test' });

const projectFields = {
    slug: 'habit-tracker',
    title: 'Habit tracker',
    summary: 'A summary.',
    tags: ['React'],
    isFeatured: true,
    screenshot: null,
    tldr: 'In short.',
    role: 'Lead engineer',
    timeline: '12 weeks',
    stack: ['TypeScript'],
    liveUrl: null,
    repositoryUrl: 'https://github.com/example/habit-tracker',
    sections: [{ heading: 'The problem', body: [{ _type: 'block', _key: 'a' }] }],
};

function createRepositoryAnswering(result: unknown): SanityProjectRepository {
    const client: IGroqClient = {
        fetch: <Result>() => Promise.resolve(result as Result),
    };

    return new SanityProjectRepository(client, imageUrls);
}

describe('Using SanityProjectRepository, given a project with a repository but no demo, when it is asked for', () => {
    const repository = createRepositoryAnswering(projectFields);

    test('then it should leave the demo link undefined', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.liveUrl).toBeUndefined();
    });

    test('then it should leave the screenshot undefined', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.screenshot).toBeUndefined();
    });

    test('then it should prepare each section body for rendering', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.sections[0]?.body[0]).toMatchObject({ children: [] });
    });
});

describe('Using SanityProjectRepository, given no project has the slug, when it is asked for', () => {
    const repository = createRepositoryAnswering(null);

    test('then it should resolve to undefined', async () => {
        expect(await repository.getProjectBySlug('missing')).toBeUndefined();
    });
});
