import { render } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { act } from 'react';
import { describe, expect, test } from 'vitest';
import { ResolvedTheme, ThemePreference } from '@naovixen/theming';

import { useDocumentTheme } from '../functions/UseDocumentTheme.hook';
import { ThemeProvider } from '../ThemeProvider.component';
import { createThemeControllerForTests } from './functions/CreateThemeControllerForTests.function';

const DocumentThemeSync: FunctionComponent = () => {
    useDocumentTheme();

    return null;
};

describe('Using useDocumentTheme', () => {
    describe('given a controller on a system in dark mode', () => {
        describe('when it is rendered', () => {
            test('then it should put the resolved theme on the html element', () => {
                render(
                    <ThemeProvider
                        themeController={createThemeControllerForTests(ResolvedTheme.Dark)}
                    >
                        <DocumentThemeSync />
                    </ThemeProvider>,
                );

                expect(document.documentElement.dataset.theme).toBe('dark');
            });

            describe('and the preference changes to light', () => {
                test('then it should record the choice on the html element', () => {
                    const themeController = createThemeControllerForTests(ResolvedTheme.Dark);
                    render(
                        <ThemeProvider themeController={themeController}>
                            <DocumentThemeSync />
                        </ThemeProvider>,
                    );

                    act(() => {
                        themeController.setPreference(ThemePreference.Light);
                    });

                    expect(document.documentElement.dataset.themePreference).toBe('light');
                });
            });
        });
    });
});
