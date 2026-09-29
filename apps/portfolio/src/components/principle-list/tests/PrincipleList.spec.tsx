import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import type { IPrinciple } from '../../../interfaces/IPrinciple';
import { PrincipleList } from '../PrincipleList.component';

const principles: readonly IPrinciple[] = [
    { title: 'First principle', description: 'The first description.' },
    { title: 'Second principle', description: 'The second description.' },
];

describe('Using PrincipleList', () => {
    describe('given some principles', () => {
        describe('when it renders', () => {
            test('then it should give each principle as a term', () => {
                render(<PrincipleList principles={principles} />);

                expect(screen.getAllByRole('term').map((term) => term.textContent)).toEqual([
                    'First principle',
                    'Second principle',
                ]);
            });

            test('then it should define each term with its description', () => {
                render(<PrincipleList principles={principles} />);

                expect(
                    screen.getAllByRole('definition').map((definition) => definition.textContent),
                ).toEqual(['The first description.', 'The second description.']);
            });

            test('then it should have no accessibility violations', async () => {
                render(<PrincipleList principles={principles} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
