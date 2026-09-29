import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '@naovixen/component-testing';
import { HandDrawnRule } from '../HandDrawnRule.component';

describe('Using HandDrawnRule', () => {
    describe('when it renders', () => {
        test('then it should have no accessibility violations', async () => {
            render(<HandDrawnRule />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
