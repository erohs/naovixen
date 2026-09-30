import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Input } from '../../input/Input.component';
import { TextArea } from '../../text-area/TextArea.component';
import { FormField } from '../FormField.component';

describe('Using FormField', () => {
    describe('given a label and an input', () => {
        describe('when it renders', () => {
            test('then it should name the input by the label', () => {
                render(
                    <FormField label="Email">
                        {(control) => <Input type="email" {...control} />}
                    </FormField>,
                );

                expect(screen.getByRole('textbox', { name: 'Email' })).toBeDefined();
            });

            test('then it should not mark the input invalid', () => {
                render(<FormField label="Email">{(control) => <Input {...control} />}</FormField>);

                expect(screen.getByRole('textbox')).toHaveProperty('ariaInvalid', null);
            });

            test('then it should have no accessibility violations', async () => {
                render(<FormField label="Email">{(control) => <Input {...control} />}</FormField>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a hint', () => {
        describe('when it renders', () => {
            test('then it should describe the control with the hint', () => {
                render(
                    <FormField label="Message" hint="A few lines is plenty.">
                        {(control) => <TextArea {...control} />}
                    </FormField>,
                );

                expect(
                    screen.getByRole('textbox', {
                        name: 'Message',
                        description: 'A few lines is plenty.',
                    }),
                ).toBeDefined();
            });
        });
    });

    describe('given an error', () => {
        describe('when it renders', () => {
            test('then it should mark the control invalid', () => {
                render(
                    <FormField label="Email" error="Enter an email address.">
                        {(control) => <Input {...control} />}
                    </FormField>,
                );

                expect(
                    screen.getByRole('textbox', { name: 'Email' }).getAttribute('aria-invalid'),
                ).toBe('true');
            });

            test('then it should read the error with the control', () => {
                render(
                    <FormField
                        label="Email"
                        hint="We reply within a week."
                        error="Enter an email address."
                    >
                        {(control) => <Input {...control} />}
                    </FormField>,
                );

                expect(
                    screen.getByRole('textbox', {
                        description: 'We reply within a week. Enter an email address.',
                    }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <FormField label="Email" error="Enter an email address.">
                        {(control) => <Input {...control} />}
                    </FormField>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
