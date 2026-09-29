import { describe, expect, test } from 'vitest';

import { joinClassNames } from '../functions/JoinClassNames.function';

describe('Using joinClassNames', () => {
    describe('when given several class names', () => {
        test('then it should join them with spaces', () => {
            expect(joinClassNames('nx-button', 'nx-button--primary')).toBe(
                'nx-button nx-button--primary',
            );
        });
    });

    describe('when some entries are false or undefined', () => {
        test('then it should leave them out', () => {
            expect(joinClassNames('nx-card', false, undefined, 'extra')).toBe('nx-card extra');
        });
    });
});
