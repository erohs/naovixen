import type { FunctionComponent } from "react";
import { Button } from "../button/Button.component";
import { VisuallyHidden } from "../visually-hidden/VisuallyHidden.component";
import type { IHeaderMenuButtonProps } from "./interfaces/IHeaderMenuButtonProps";

/**
 * Named by a Button's hidden name, which makes it round like a Button of one icon. Its lines are drawn
 * here rather than as an icon, so the stylesheet can fold them into a cross.
 */
export const HeaderMenuButton: FunctionComponent<IHeaderMenuButtonProps> = ({ label, ...buttonProps }) => (
    <Button {...buttonProps}>
        <span className="nv-header__menu-lines" aria-hidden="true">
            <span className="nv-header__menu-line" />
            <span className="nv-header__menu-line" />
            <span className="nv-header__menu-line" />
        </span>
        <VisuallyHidden className="nv-button__name">{label}</VisuallyHidden>
    </Button>
);
