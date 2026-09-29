import { describe, expect, test } from 'vitest';

import { serializeStructuredData } from '../functions/SerializeStructuredData.function';

describe('Using serializeStructuredData', () => {
    describe('when the data contains a closing script tag', () => {
        test('then it should not let the tag through', () => {
            expect(serializeStructuredData({ headline: '</script><script>' })).not.toContain(
                '</script>',
            );
        });

        test('then it should still parse back to the same data', () => {
            const structuredData = { headline: '</script><script>' };

            expect(JSON.parse(serializeStructuredData(structuredData))).toEqual(structuredData);
        });
    });
});
