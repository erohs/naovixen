import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { arrowUpIcon } from "../icon/icons/ArrowUp.icon";
import { translate } from "../translate/Translate.const";
import { ButtonVariant } from "./enums/ButtonVariant";
import { jumpToFragment } from "./functions/JumpToFragment.function";
import { showPastFirstScreen } from "./functions/ShowPastFirstScreen.function";
import { LinkButton } from "./LinkButton.component";
import type { BackToTopProps } from "./types/BackToTopProps";

/**
 * A LinkButton of one icon, shown once the reader has scrolled a full screen down. A plain in-page link,
 * not a router link: following it scrolls to `#main` and moves focus there, leaving the address alone.
 * The page's main element must carry `id="main"`, or pass another fragment as `href`.
 */
export const BackToTop: FunctionComponent<BackToTopProps> = ({ href = "#main", className, ...linkButtonProps }) => (
    <LinkButton
        {...linkButtonProps}
        ref={showPastFirstScreen}
        href={href}
        variant={ButtonVariant.Primary}
        className={joinClassNames("nv-back-to-top", className)}
        onClick={jumpToFragment}>
        <LinkButton.Icon source={arrowUpIcon} label={translate("backToTop")} />
    </LinkButton>
);
