import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { LogoProps } from "./types/LogoProps";

/**
 * The `< naovixen />` wordmark, sized from the text around it. The brackets are drawing, so only the
 * name is read out. Inside a link, a cursor blinks after it while the link is hovered or focused.
 */
export const Logo: FunctionComponent<LogoProps> = ({ className, ...spanProps }) => (
    <span {...spanProps} className={joinClassNames("nv-logo", className)}>
        <span className="nv-logo__wordmark">
            <span className="nv-logo__bracket" aria-hidden="true">
                &lt;
            </span>
            <span>naovixen</span>
            <span className="nv-logo__bracket" aria-hidden="true">
                /&gt;
            </span>
        </span>
        <span className="nv-logo__cursor" aria-hidden="true" />
    </span>
);
