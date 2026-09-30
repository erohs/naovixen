import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderSkillGroups } from '../../../constants/PlaceholderSkillGroups.const';
import { SkillsSection } from '../SkillsSection.component';

describe('Using SkillsSection', () => {
    describe('when it renders', () => {
        test('then it should be a section named by its heading', () => {
            render(<SkillsSection />);

            expect(screen.getByRole('region', { name: 'Skills' })).toBeDefined();
        });

        test('then it should have a level 2 heading', () => {
            render(<SkillsSection />);

            expect(screen.getByRole('heading', { level: 2, name: 'Skills' })).toBeDefined();
        });

        test('then it should head each group of skills at level 3', () => {
            render(<SkillsSection />);

            expect(
                screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
            ).toEqual(placeholderSkillGroups.map((group) => group.label));
        });

        test('then it should have no accessibility violations', async () => {
            render(<SkillsSection />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
