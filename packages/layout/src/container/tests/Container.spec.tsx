import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { Container } from '../Container.component';

describe('Using Container', () => {
    describe('given it is rendered as a header', () => {
        describe('when it renders', () => {
            test('then it should be the page banner', () => {
                render(
                    <Container as="header">
                        <p>Example header</p>
                    </Container>,
                );

                expect(screen.getByRole('banner')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Container as="header">
                        <p>Example header</p>
                    </Container>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic props', () => {
        describe('when it renders', () => {
            test('then it should keep a class name it is given alongside its own', () => {
                render(
                    <Container as="main" className="extra">
                        <p>Example content</p>
                    </Container>,
                );

                expect(screen.getByRole('main').className).toBe('nx-container extra');
            });
        });
    });

    describe('given a ref', () => {
        describe('when it renders', () => {
            test('then it should hand its element to the ref', () => {
                const ref = createRef<HTMLElement>();
                render(
                    <Container as="main" ref={ref}>
                        <p>Example content</p>
                    </Container>,
                );

                expect(ref.current).toBe(screen.getByRole('main'));
            });
        });
    });
});
