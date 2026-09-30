import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { arrowLeftIcon } from '../../icon/icons/ArrowLeft.icon';
import { arrowRightIcon } from '../../icon/icons/ArrowRight.icon';
import { IconPosition } from '../enums/IconPosition';
import { LinkIcon } from '../LinkIcon.component';

describe('Using LinkIcon', () => {
    describe('given an icon at the end', () => {
        describe('when it renders', () => {
            test('then it should be named by its text alone', () => {
                render(
                    <LinkIcon href="/work" icon={arrowRightIcon}>
                        All projects
                    </LinkIcon>,
                );

                expect(screen.getByRole('link', { name: 'All projects' })).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <LinkIcon href="/work" icon={arrowRightIcon}>
                        All projects
                    </LinkIcon>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given an icon at the start', () => {
        describe('when it renders', () => {
            test('then it should still be named by its text alone', () => {
                render(
                    <LinkIcon href="/" icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
                        Back
                    </LinkIcon>,
                );

                expect(screen.getByRole('link', { name: 'Back' })).toBeDefined();
            });
        });
    });
});
