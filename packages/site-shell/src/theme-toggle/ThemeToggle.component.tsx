import type { FunctionComponent } from 'react';
import type { IToggleButtonProps } from '@naovixen/components';
import { Icon, moonIcon, sunIcon, ToggleButton, VisuallyHidden } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';
import { ResolvedTheme, ThemePreference } from '@naovixen/theming';

import { useTheme } from '../theme-provider/functions/UseTheme.hook';
import { useThemeController } from '../theme-provider/functions/UseThemeController.hook';

/**
 * Pressed while the page is dark, whether the reader chose dark or their system did.
 * Pressing it chooses the opposite theme explicitly. Needs a ThemeProvider above it.
 */
export const ThemeToggle: FunctionComponent<
    Omit<IToggleButtonProps, 'isPressed' | 'onClick' | 'children'>
> = ({ className, ...buttonProps }) => {
    const { resolvedTheme } = useTheme();
    const themeController = useThemeController();
    const isDark = resolvedTheme === ResolvedTheme.Dark;

    const onClick = (): void => {
        themeController.setPreference(isDark ? ThemePreference.Light : ThemePreference.Dark);
    };

    return (
        <ToggleButton
            {...buttonProps}
            className={joinClassNames('nx-theme-toggle', className)}
            isPressed={isDark}
            onClick={onClick}
        >
            <Icon source={isDark ? sunIcon : moonIcon} />
            <VisuallyHidden>Dark mode</VisuallyHidden>
        </ToggleButton>
    );
};
