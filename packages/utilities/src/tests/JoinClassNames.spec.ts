import { describe, expect, test } from 'vitest';

import { joinClassNames } from '../functions/JoinClassNames.function';

describe('Using joinClassNames, when given several class names', () => {
    test('then it should join them with spaces', () => {
        expect(joinClassNames('nv-button', 'nv-button--primary')).toBe(
            'nv-button nv-button--primary',
        );
    });
});

describe('Using joinClassNames, when some entries are false or undefined', () => {
    test('then it should leave them out', () => {
        expect(joinClassNames('nv-card', false, undefined, 'extra')).toBe('nv-card extra');
    });
});
