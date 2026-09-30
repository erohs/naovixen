import type { FunctionComponent, MouseEvent } from 'react';
import { ResolvedTheme, ThemePreference } from '@naovixen/theming';
import { joinClassNames } from '@naovixen/utilities';

import type { IButtonProps } from '../button/interfaces/IButtonProps';
import { Button } from '../button/Button.component';
import { Icon } from '../icon/Icon.component';
import { moonIcon } from '../icon/icons/Moon.icon';
import { sunIcon } from '../icon/icons/Sun.icon';
import { useTheme } from '../theme-provider/functions/UseTheme.hook';
import { useThemeController } from '../theme-provider/functions/UseThemeController.hook';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import { revealThemeChange } from './functions/RevealThemeChange.function';

/**
 * Pressed while the page is dark, whether the reader chose dark or their system did. It looks
 * like any other button: the sun or moon shows the state, so it does not stay pushed in.
 * Pressing it chooses the opposite theme explicitly, revealed in a circle from the toggle.
 * Needs a ThemeProvider above it.
 */
export const ThemeToggle: FunctionComponent<
    Omit<IButtonProps, 'aria-pressed' | 'onClick' | 'children'>
> = ({ className, ...buttonProps }) => {
    const { resolvedTheme } = useTheme();
    const themeController = useThemeController();
    const isDark = resolvedTheme === ResolvedTheme.Dark;

    const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
        revealThemeChange(event.currentTarget, () => {
            themeController.setPreference(isDark ? ThemePreference.Light : ThemePreference.Dark);
        });
    };

    return (
        <Button
            {...buttonProps}
            className={joinClassNames('nv-theme-toggle', className)}
            aria-pressed={isDark}
            onClick={onClick}
        >
            <Icon source={isDark ? sunIcon : moonIcon} />
            <VisuallyHidden>Dark mode</VisuallyHidden>
        </Button>
    );
};
