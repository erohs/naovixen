import { describe, expect, test } from 'vitest';

import { isCurrentHref } from '../functions/IsCurrentHref.function';

describe('Using isCurrentHref', () => {
    describe('when the home page is shown', () => {
        test('then it should match the home item', () => {
            expect(isCurrentHref('/', '/')).toBe(true);
        });
    });

    describe('when a page inside a section is shown', () => {
        test('then it should not match the home item', () => {
            expect(isCurrentHref('/work', '/')).toBe(false);
        });

        test('then it should match its section', () => {
            expect(isCurrentHref('/work/example-project', '/work')).toBe(true);
        });
    });

    describe('when a section shares only the start of its name with another', () => {
        test('then it should not match the other', () => {
            expect(isCurrentHref('/workshop', '/work')).toBe(false);
        });
    });
});
