import { findAxeViolations } from '@naovixen/component-testing';
import { gitIcon, typeScriptIcon } from '@naovixen/components';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SkillGroup } from '../SkillGroup.component';

const group = {
    label: 'languages',
    skills: [
        { name: 'TypeScript', logo: typeScriptIcon },
        { name: 'Git', logo: gitIcon },
    ],
};

describe('Using SkillGroup', () => {
    describe('given a group of two skills', () => {
        describe('when it renders', () => {
            test('then it should be a section named by its label', () => {
                render(<SkillGroup group={group} />);

                expect(screen.getByRole('region', { name: 'languages' })).toBeDefined();
            });

            test('then it should head the group at level 3', () => {
                render(<SkillGroup group={group} />);

                expect(screen.getByRole('heading', { level: 3, name: 'languages' })).toBeDefined();
            });

            test('then it should list each skill', () => {
                render(<SkillGroup group={group} />);

                expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual([
                    'TypeScript',
                    'Git',
                ]);
            });

            test('then it should have no accessibility violations', async () => {
                render(<SkillGroup group={group} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
