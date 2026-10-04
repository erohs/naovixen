import type { IThemeController } from "@naovixen/theming";
import type { IButtonProps } from "../../button/interfaces/IButtonProps";

export interface IThemeToggleProps extends Omit<IButtonProps, "aria-pressed" | "onClick" | "children"> {
    readonly themeController: IThemeController;
}
