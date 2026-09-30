import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Image } from '../Image.component';

describe('Using Image', () => {
    describe('given a source, alt text and size', () => {
        describe('when it renders', () => {
            test('then it should be named by its alt text', () => {
                render(
                    <Image src="/example.png" alt="Example picture" width={1600} height={900} />,
                );

                expect(screen.getByRole('img', { name: 'Example picture' })).toBeDefined();
            });

            test('then it should reserve its size', () => {
                render(
                    <Image src="/example.png" alt="Example picture" width={1600} height={900} />,
                );

                expect(screen.getByRole('img')).toMatchObject({ width: 1600, height: 900 });
            });

            test('then it should wait to load until it nears the screen', () => {
                render(
                    <Image src="/example.png" alt="Example picture" width={1600} height={900} />,
                );

                expect(screen.getByRole('img').getAttribute('loading')).toBe('lazy');
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Image src="/example.png" alt="Example picture" width={1600} height={900} />,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given it is the largest thing on the page', () => {
        describe('when it renders', () => {
            test('then it should load straight away when asked to', () => {
                render(
                    <Image
                        src="/hero.png"
                        alt="Example hero"
                        width={1600}
                        height={900}
                        loading="eager"
                    />,
                );

                expect(screen.getByRole('img').getAttribute('loading')).toBe('eager');
            });
        });
    });
});
