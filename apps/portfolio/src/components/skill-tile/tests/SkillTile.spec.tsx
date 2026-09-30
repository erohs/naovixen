import { findAxeViolations } from '@naovixen/nvpack/testing';
import { typeScriptIcon } from '@naovixen/components';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SkillTile } from '../SkillTile.component';

const renderInList = (): void => {
    render(
        <ul>
            <SkillTile skill={{ name: 'TypeScript', logo: typeScriptIcon }} />
        </ul>,
    );
};

describe('Using SkillTile', () => {
    describe('given a skill', () => {
        describe('when it renders', () => {
            test('then it should be a list item named by the skill', () => {
                renderInList();

                expect(screen.getByRole('listitem').textContent).toBe('TypeScript');
            });

            test('then it should keep the logo out of the accessibility tree', () => {
                renderInList();

                expect(screen.queryByRole('img')).toBeNull();
            });

            test('then it should have no accessibility violations', async () => {
                renderInList();

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
