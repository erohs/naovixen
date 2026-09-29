import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { CardHalo } from '../enums/CardHalo';
import { CardTilt } from '../enums/CardTilt';
import { Card } from '../Card.component';

describe('Using Card', () => {
    describe('given a heading and some text', () => {
        describe('when it renders', () => {
            test('then it should be an article holding them', () => {
                render(
                    <Card aria-labelledby="example-heading">
                        <h3 id="example-heading">Example project</h3>
                        <p>Example summary.</p>
                    </Card>,
                );

                expect(screen.getByRole('article', { name: 'Example project' }).textContent).toBe(
                    'Example projectExample summary.',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Card tilt={CardTilt.Right} halo={CardHalo.Dotted}>
                        <h3>Example project</h3>
                    </Card>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a tilt, a halo and a class name', () => {
        describe('when it renders', () => {
            test('then it should keep the class name alongside its own', () => {
                render(
                    <Card tilt={CardTilt.Right} halo={CardHalo.Dotted} className="extra">
                        <h3>Example project</h3>
                    </Card>,
                );

                expect(screen.getByRole('article').className).toBe(
                    'nx-card nx-card--tilt-right nx-card--halo-dotted extra',
                );
            });
        });
    });

    describe('given a ref', () => {
        describe('when it renders', () => {
            test('then it should hand the article to the ref', () => {
                const ref = createRef<HTMLElement>();
                render(
                    <Card ref={ref}>
                        <h3>Example project</h3>
                    </Card>,
                );

                expect(ref.current).toBe(screen.getByRole('article'));
            });
        });
    });
});
