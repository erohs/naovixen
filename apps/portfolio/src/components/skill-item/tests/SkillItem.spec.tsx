import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SkillLevel } from '../../../enums/SkillLevel';
import type { ISkill } from '../../../interfaces/ISkill';
import { SkillItem } from '../SkillItem.component';

const skill: ISkill = {
    name: 'Example skill',
    use: 'An example use',
    yearsOfExperience: 3,
    level: SkillLevel.Advanced,
};

function renderSkillItem(): void {
    render(
        <ul>
            <SkillItem skill={skill} />
        </ul>,
    );
}

describe('Using SkillItem', () => {
    describe('given a skill', () => {
        describe('when it renders', () => {
            test('then it should be a list item', () => {
                renderSkillItem();

                expect(screen.getByRole('listitem')).toBeDefined();
            });

            test('then it should name the skill in a level 3 heading', () => {
                renderSkillItem();

                expect(
                    screen.getByRole('heading', { level: 3, name: 'Example skill' }),
                ).toBeDefined();
            });

            test('then it should show what the skill is used for', () => {
                renderSkillItem();

                expect(screen.getByText('An example use')).toBeDefined();
            });

            test('then it should write out the years and the level', () => {
                renderSkillItem();

                expect(screen.getByText('3 years · Advanced')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                renderSkillItem();

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
