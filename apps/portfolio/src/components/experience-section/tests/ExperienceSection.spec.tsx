import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { education } from '../../../constants/Education.const';
import { employer } from '../../../constants/Employer.const';
import { placeholderCvPath } from '../../../constants/PlaceholderCvPath.const';
import { ExperienceSection } from '../ExperienceSection.component';

/** jsdom trims the space inside the hidden span, which a browser keeps. */
const fullCvName = /^Full CV ?\(PDF\)$/;

describe('Using ExperienceSection', () => {
    describe('when it renders', () => {
        test('then it should be a section named by its heading', () => {
            render(<ExperienceSection />);

            expect(screen.getByRole('region', { name: 'Experience' })).toBeDefined();
        });

        test('then it should be the target of the hero link', () => {
            render(<ExperienceSection />);

            expect(screen.getByRole('region', { name: 'Experience' }).id).toBe('experience');
        });

        test('then it should have a level 2 heading', () => {
            render(<ExperienceSection />);

            expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeDefined();
        });

        test('then it should link to the full CV, saying it is a PDF', () => {
            render(<ExperienceSection />);

            expect(screen.getByRole('link', { name: fullCvName }).getAttribute('href')).toBe(
                placeholderCvPath,
            );
        });

        test('then it should download the CV rather than open it', () => {
            render(<ExperienceSection />);

            expect(screen.getByRole('link', { name: fullCvName }).hasAttribute('download')).toBe(
                true,
            );
        });

        test('then it should show the employer', () => {
            render(<ExperienceSection />);

            expect(
                screen.getByRole('heading', {
                    level: 3,
                    name: `${employer.name}, ${employer.place}`,
                }),
            ).toBeDefined();
        });

        test('then it should show the education', () => {
            render(<ExperienceSection />);

            expect(screen.getByRole('heading', { level: 3, name: education.degree })).toBeDefined();
        });

        test('then it should have no accessibility violations', async () => {
            render(<ExperienceSection />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
