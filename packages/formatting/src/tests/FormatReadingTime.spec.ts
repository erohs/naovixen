import { describe, expect, test } from 'vitest';

import { formatReadingTime } from '../functions/FormatReadingTime.function';

describe('Using formatReadingTime, when given a number of minutes', () => {
    test('then it should describe the reading time', () => {
        expect(formatReadingTime(6)).toBe('6 min read');
    });
});
