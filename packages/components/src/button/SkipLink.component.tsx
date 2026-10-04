import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { ButtonVariant } from "./enums/ButtonVariant";
import { jumpToFragment } from "./functions/JumpToFragment.function";
import { LinkButton } from "./LinkButton.component";
import type { SkipLinkProps } from "./types/SkipLinkProps";

/**
 * A LinkButton shown only while it has focus. Render it first in the body. It points at the main content,
 * `#main`, unless given another `href`; the target needs `tabIndex={-1}` to take focus. Following it
 * leaves the address alone.
 */
export const SkipLink: FunctionComponent<SkipLinkProps> = ({
    href = "#main",
    className,
    children,
    ...linkButtonProps
}) => (
    <LinkButton
        {...linkButtonProps}
        href={href}
        variant={ButtonVariant.Primary}
        className={joinClassNames("nv-skip-link", className)}
        onClick={jumpToFragment}>
        {children}
    </LinkButton>
);
