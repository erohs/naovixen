import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ButtonVariant } from '../../button/enums/ButtonVariant';
import { LinkButton } from '../LinkButton.component';

describe('Using LinkButton', () => {
    describe('when it renders', () => {
        test('then it should be a link, because it navigates', () => {
            render(
                <LinkButton href="/work" variant={ButtonVariant.Primary}>
                    See my work
                </LinkButton>,
            );

            expect(screen.getByRole('link', { name: 'See my work' })).toHaveProperty(
                'pathname',
                '/work',
            );
        });

        test('then it should have no accessibility violations', async () => {
            render(<LinkButton href="/work">See my work</LinkButton>);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
