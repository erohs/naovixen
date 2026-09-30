import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ThemeProvider } from '@naovixen/components';
import {
    NoOpThemeStorage,
    ResolvedTheme,
    StaticSystemThemeSource,
    ThemeController,
} from '@naovixen/theming';

import { designSystemPages } from '../constants/DesignSystemPages.const';
import { findAxeViolations } from './functions/FindAxeViolations.function';

/** jsdom has no `matchMedia`, so the system theme is fixed. */
function createTestThemeController(): ThemeController {
    return new ThemeController(
        new NoOpThemeStorage(),
        new StaticSystemThemeSource(ResolvedTheme.Light),
    );
}

describe.each(designSystemPages)(
    'Using the design system, when the $title page renders',
    (page) => {
        test('then it should have no accessibility violations', async () => {
            render(
                <ThemeProvider themeController={createTestThemeController()}>
                    <page.component />
                </ThemeProvider>,
            );

            expect(await findAxeViolations()).toEqual([]);
        });
    },
);
