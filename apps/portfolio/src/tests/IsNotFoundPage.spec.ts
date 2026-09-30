import { notFound, rootRouteId } from '@tanstack/react-router';
import { describe, expect, test } from 'vitest';

import { isNotFoundPage } from '../functions/IsNotFoundPage.function';

describe('Using isNotFoundPage, when a page below the root matched and loaded', () => {
    test('then it should report a found page', () => {
        const matches = [
            { routeId: rootRouteId, error: undefined },
            { routeId: '/about', error: undefined },
        ];

        expect(isNotFoundPage(matches)).toBe(false);
    });
});

describe('Using isNotFoundPage, when nothing below the root matched', () => {
    test('then it should report a not-found page', () => {
        expect(isNotFoundPage([{ routeId: rootRouteId, error: undefined }])).toBe(true);
    });
});

describe('Using isNotFoundPage, when a loader threw not-found', () => {
    test('then it should report a not-found page', () => {
        const matches = [
            { routeId: rootRouteId, error: notFound() },
            { routeId: '/blog/$slug', error: undefined },
        ];

        expect(isNotFoundPage(matches)).toBe(true);
    });
});
