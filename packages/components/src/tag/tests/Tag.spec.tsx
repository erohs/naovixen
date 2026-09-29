import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Tag } from '../Tag.component';

describe('Using Tag', () => {
    describe('when it renders in a list', () => {
        test('then it should show its text', () => {
            render(
                <ul aria-label="Topics">
                    <li>
                        <Tag>Accessibility</Tag>
                    </li>
                </ul>,
            );

            expect(screen.getByRole('listitem')).toHaveProperty('textContent', 'Accessibility');
        });

        test('then it should have no accessibility violations', async () => {
            render(<Tag>Accessibility</Tag>);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
