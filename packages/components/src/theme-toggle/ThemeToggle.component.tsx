import type { FunctionComponent } from 'react';
import { ResolvedTheme, ThemePreference } from '@naovixen/theming';

import { ButtonVariant } from '../enums/ButtonVariant';
import { IconName } from '../enums/IconName';
import { buildButtonClassName } from '../functions/BuildButtonClassName.function';
import { joinClassNames } from '../functions/JoinClassNames.function';
import { useTheme } from '../functions/UseTheme.hook';
import { useThemeController } from '../functions/UseThemeController.hook';
import { Icon } from '../icon/Icon.component';

/** A toggle button: its name stays "Dark mode" and its pressed state says whether it is on. */
export const ThemeToggle: FunctionComponent = () => {
  const { resolvedTheme } = useTheme();
  const themeController = useThemeController();
  const isDark = resolvedTheme === ResolvedTheme.Dark;

  const onClick = (): void => {
    themeController.setPreference(isDark ? ThemePreference.Light : ThemePreference.Dark);
  };

  return (
    <button
      type="button"
      className={joinClassNames(buildButtonClassName(ButtonVariant.Secondary), 'nx-theme-toggle')}
      aria-label="Dark mode"
      aria-pressed={isDark}
      onClick={onClick}
    >
      <Icon name={isDark ? IconName.Sun : IconName.Moon} />
    </button>
  );
};
