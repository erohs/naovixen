import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Input } from '../../input/Input.component';
import { Label } from '../Label.component';

describe('Using Label', () => {
    describe('given the id of a control', () => {
        describe('when it renders', () => {
            test('then it should name that control', () => {
                render(
                    <>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" />
                    </>,
                );

                expect(screen.getByRole('textbox', { name: 'Name' })).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" />
                    </>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
