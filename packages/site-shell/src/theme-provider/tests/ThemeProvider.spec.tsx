import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { act } from 'react';
import { describe, expect, test } from 'vitest';
import { ResolvedTheme, ThemePreference } from '@naovixen/theming';

import { useTheme } from '../functions/UseTheme.hook';
import { ThemeProvider } from '../ThemeProvider.component';
import { createThemeControllerForTests } from './functions/CreateThemeControllerForTests.function';

const ResolvedThemeReport: FunctionComponent = () => {
    const { resolvedTheme } = useTheme();

    return <p>{resolvedTheme}</p>;
};

describe('Using ThemeProvider', () => {
    describe('given a controller on a system in light mode', () => {
        describe('when a component below reads the theme', () => {
            test('then it should see the resolved theme', () => {
                render(
                    <ThemeProvider
                        themeController={createThemeControllerForTests(ResolvedTheme.Light)}
                    >
                        <ResolvedThemeReport />
                    </ThemeProvider>,
                );

                expect(screen.getByText(ResolvedTheme.Light)).toBeDefined();
            });

            describe('and the preference changes to dark', () => {
                test('then it should see the new theme', () => {
                    const themeController = createThemeControllerForTests(ResolvedTheme.Light);
                    render(
                        <ThemeProvider themeController={themeController}>
                            <ResolvedThemeReport />
                        </ThemeProvider>,
                    );

                    act(() => {
                        themeController.setPreference(ThemePreference.Dark);
                    });

                    expect(screen.getByText(ResolvedTheme.Dark)).toBeDefined();
                });
            });
        });
    });

    describe('given no provider', () => {
        describe('when a component reads the theme', () => {
            test('then it should say a ThemeProvider is missing', () => {
                expect(() => render(<ResolvedThemeReport />)).toThrow(/ThemeProvider/u);
            });
        });
    });
});
