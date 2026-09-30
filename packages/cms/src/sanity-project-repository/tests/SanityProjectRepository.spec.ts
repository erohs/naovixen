import { describe, expect, test } from 'vitest';
import { createImageUrlBuilder } from '@sanity/image-url';

import type { IGroqClient } from '../../interfaces/IGroqClient';
import { SanityProjectRepository } from '../SanityProjectRepository';

const imageUrls = createImageUrlBuilder({ projectId: 'fixture', dataset: 'test' });

const projectFields = {
    slug: 'habit-tracker',
    title: 'Habit tracker',
    summary: 'A summary.',
    isFeatured: true,
    screenshot: null,
    stack: ['TypeScript'],
    body: [
        { _type: 'block', _key: 'a' },
        { _type: 'sectionHeading', _key: 'b', text: 'The problem' },
    ],
};

function createRepositoryAnswering(result: unknown): SanityProjectRepository {
    const client: IGroqClient = {
        fetch: <Result>() => Promise.resolve(result as Result),
    };

    return new SanityProjectRepository(client, imageUrls);
}

describe('Using SanityProjectRepository, given a project with no screenshot, when it is asked for', () => {
    const repository = createRepositoryAnswering(projectFields);

    test('then it should leave the screenshot undefined', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.screenshot).toBeUndefined();
    });

    test('then it should prepare text blocks for rendering', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.body[0]).toMatchObject({ children: [] });
    });

    test('then it should number a section heading', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.body[1]).toStrictEqual({ ...projectFields.body[1], number: 1 });
    });
});

describe('Using SanityProjectRepository, given no project has the slug, when it is asked for', () => {
    const repository = createRepositoryAnswering(null);

    test('then it should resolve to undefined', async () => {
        expect(await repository.getProjectBySlug('missing')).toBeUndefined();
    });
});

describe('Using SanityProjectRepository, given a project with two section headings, when it is asked for', () => {
    const repository = createRepositoryAnswering({
        ...projectFields,
        body: [
            { _type: 'sectionHeading', _key: 'a', text: 'The problem' },
            { _type: 'block', _key: 'b' },
            { _type: 'sectionHeading', _key: 'c', text: 'The approach' },
        ],
    });

    test('then it should number the headings by their order', async () => {
        const project = await repository.getProjectBySlug('habit-tracker');

        expect(project?.body.map((node) => ('number' in node ? node.number : null))).toEqual([
            1,
            null,
            2,
        ]);
    });
});
