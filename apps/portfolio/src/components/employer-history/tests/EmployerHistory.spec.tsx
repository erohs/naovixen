import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import type { IEmployer } from '../../../interfaces/IEmployer';
import { EmployerHistory } from '../EmployerHistory.component';

const employer: IEmployer = {
    name: 'Example Company',
    place: 'Example Place',
    description: 'An example description.',
    dates: '2019 – present',
    roles: [
        { title: 'Newer role', dates: '2023 – present', summary: 'The newer summary.' },
        { title: 'Older role', dates: '2019 – 2023', summary: 'The older summary.' },
    ],
};

describe('Using EmployerHistory', () => {
    describe('given an employer', () => {
        describe('when it renders', () => {
            test('then it should name the employer and place in a level 3 heading', () => {
                render(<EmployerHistory employer={employer} />);

                expect(
                    screen.getByRole('heading', {
                        level: 3,
                        name: 'Example Company, Example Place',
                    }),
                ).toBeDefined();
            });

            test('then it should show the description', () => {
                render(<EmployerHistory employer={employer} />);

                expect(screen.getByText('An example description.')).toBeDefined();
            });

            test('then it should show the dates', () => {
                render(<EmployerHistory employer={employer} />);

                expect(screen.getByText('2019 – present')).toBeDefined();
            });

            test('then it should list each role', () => {
                render(<EmployerHistory employer={employer} />);

                expect(screen.getAllByRole('listitem')).toHaveLength(2);
            });

            test('then it should keep the roles in the order given', () => {
                render(<EmployerHistory employer={employer} />);

                expect(
                    screen
                        .getAllByRole('heading', { level: 4 })
                        .map((heading) => heading.textContent),
                ).toEqual(['Newer role', 'Older role']);
            });

            test('then it should have no accessibility violations', async () => {
                render(<EmployerHistory employer={employer} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
