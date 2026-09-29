import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import type { IRole } from '../../../interfaces/IRole';
import { EmployerRole } from '../EmployerRole.component';

const role: IRole = {
    title: 'Example title',
    dates: 'Jan 2020 – present',
    summary: 'An example summary.',
};

function renderEmployerRole(): void {
    render(
        <ol>
            <EmployerRole role={role} />
        </ol>,
    );
}

describe('Using EmployerRole', () => {
    describe('given a role', () => {
        describe('when it renders', () => {
            test('then it should be a list item', () => {
                renderEmployerRole();

                expect(screen.getByRole('listitem')).toBeDefined();
            });

            test('then it should name the role in a level 4 heading', () => {
                renderEmployerRole();

                expect(
                    screen.getByRole('heading', { level: 4, name: 'Example title' }),
                ).toBeDefined();
            });

            test('then it should show the dates', () => {
                renderEmployerRole();

                expect(screen.getByText('Jan 2020 – present')).toBeDefined();
            });

            test('then it should show the summary', () => {
                renderEmployerRole();

                expect(screen.getByText('An example summary.')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                renderEmployerRole();

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
