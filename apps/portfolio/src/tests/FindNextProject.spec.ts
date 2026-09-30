import type { IProjectSummary } from '@naovixen/cms';
import { describe, expect, test } from 'vitest';

import { findNextProject } from '../functions/FindNextProject.function';

function createSummary(slug: string): IProjectSummary {
    return { slug, title: slug, summary: '', stack: [], isFeatured: false };
}

const projects = [createSummary('first'), createSummary('second'), createSummary('last')];

describe('Using findNextProject, when asked for the project after the first', () => {
    test('then it should return the second', () => {
        expect(findNextProject(projects, 'first')?.slug).toBe('second');
    });
});

describe('Using findNextProject, when asked for the project after the last', () => {
    test('then it should wrap round to the first', () => {
        expect(findNextProject(projects, 'last')?.slug).toBe('first');
    });
});

describe('Using findNextProject, when there is only one project', () => {
    test('then it should return nothing', () => {
        expect(findNextProject([createSummary('only')], 'only')).toBeUndefined();
    });
});
