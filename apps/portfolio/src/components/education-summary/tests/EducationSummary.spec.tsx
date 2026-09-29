import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import type { IEducation } from '../../../interfaces/IEducation';
import { EducationSummary } from '../EducationSummary.component';

const education: IEducation = {
    degree: 'Example degree',
    institution: 'Example University',
    dates: '2019 – 2023',
    grade: 'Example grade',
    note: 'An example note.',
};

describe('Using EducationSummary', () => {
    describe('given an education', () => {
        describe('when it renders', () => {
            test('then it should name the degree in a level 3 heading', () => {
                render(<EducationSummary education={education} />);

                expect(
                    screen.getByRole('heading', { level: 3, name: 'Example degree' }),
                ).toBeDefined();
            });

            test('then it should show the dates', () => {
                render(<EducationSummary education={education} />);

                expect(screen.getByText('2019 – 2023')).toBeDefined();
            });

            test('then it should show the institution with the grade', () => {
                render(<EducationSummary education={education} />);

                expect(screen.getByText('Example grade').parentElement?.textContent).toBe(
                    'Example University · Example grade',
                );
            });

            test('then it should show the note', () => {
                render(<EducationSummary education={education} />);

                expect(screen.getByText('An example note.')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(<EducationSummary education={education} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
