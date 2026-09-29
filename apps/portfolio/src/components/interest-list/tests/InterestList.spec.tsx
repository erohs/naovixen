import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { InterestList } from '../InterestList.component';

const interests = ['First interest', 'Second interest'];

describe('Using InterestList', () => {
    describe('given some interests', () => {
        describe('when it renders', () => {
            test('then it should list each interest', () => {
                render(<InterestList interests={interests} />);

                expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual([
                    'First interest',
                    'Second interest',
                ]);
            });

            test('then it should have no accessibility violations', async () => {
                render(<InterestList interests={interests} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic list props', () => {
        describe('when it renders', () => {
            test('then it should pass them through to the list', () => {
                render(<InterestList interests={interests} aria-label="Interests" />);

                expect(screen.getByRole('list', { name: 'Interests' })).toBeDefined();
            });
        });
    });
});
