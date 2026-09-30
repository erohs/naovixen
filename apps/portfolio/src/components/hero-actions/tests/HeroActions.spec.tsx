import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderCvPath } from '../../../constants/PlaceholderCvPath.const';
import { HeroActions } from '../HeroActions.component';

describe('Using HeroActions', () => {
    describe('when it renders', () => {
        test('then it should link to the experience section', () => {
            render(<HeroActions />);

            expect(screen.getByRole('link', { name: 'See my work' }).getAttribute('href')).toBe(
                '#experience',
            );
        });

        test('then it should link to the CV', () => {
            render(<HeroActions />);

            expect(screen.getByRole('link', { name: 'Download CV PDF' }).getAttribute('href')).toBe(
                placeholderCvPath,
            );
        });

        test('then it should download the CV rather than open it', () => {
            render(<HeroActions />);

            expect(
                screen.getByRole('link', { name: 'Download CV PDF' }).hasAttribute('download'),
            ).toBe(true);
        });

        test('then it should have no accessibility violations', async () => {
            render(<HeroActions />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
