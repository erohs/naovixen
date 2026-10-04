import { useSyncExternalStore } from "react";
import type { FunctionComponent, MouseEvent } from "react";
import { ResolvedTheme, ThemePreference } from "@naovixen/theming";
import { Button } from "../button/Button.component";
import { moonIcon } from "../icon/icons/Moon.icon";
import { sunIcon } from "../icon/icons/Sun.icon";
import { translate } from "../translate/Translate.const";
import { getServerRenderedThemeState } from "./functions/GetServerRenderedThemeState.function";
import { revealThemeChange } from "./functions/RevealThemeChange.function";
import type { IThemeToggleProps } from "./interfaces/IThemeToggleProps";

/**
 * Pressed while the page is dark, whether the reader chose dark or their system did. The sun or moon
 * shows the state, so it does not stay pushed in. Pressing it chooses the opposite theme explicitly,
 * revealed in a circle from the toggle. Hydrates against what the server rendered, then moves to the
 * reader's real theme.
 */
export const ThemeToggle: FunctionComponent<IThemeToggleProps> = ({ themeController, ...buttonProps }) => {
    const { resolvedTheme } = useSyncExternalStore(
        themeController.subscribe,
        themeController.getState,
        getServerRenderedThemeState,
    );
    const isDark = resolvedTheme === ResolvedTheme.Dark;

    const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
        revealThemeChange(event.currentTarget, () => {
            themeController.setPreference(isDark ? ThemePreference.Light : ThemePreference.Dark);
        });
    };

    return (
        <Button {...buttonProps} aria-pressed={isDark} onClick={onClick}>
            <Button.Icon source={isDark ? sunIcon : moonIcon} label={translate("darkMode")} />
        </Button>
    );
};
