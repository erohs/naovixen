import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { translate } from "../../translate/Translate.const";
import type { IPhotoPlaceholderProps } from "./interfaces/IPhotoPlaceholderProps";

/**
 * Stands in for Naomi's portrait until there is one. Drawn with CSS rather than an image file, so its
 * stripes follow the theme.
 */
export const PhotoPlaceholder: FunctionComponent<IPhotoPlaceholderProps> = ({ className }) => (
    <div
        role="img"
        aria-label={translate("photoPlaceholder.portrait")}
        className={joinClassNames("nv-photo-placeholder", className)}>
        <span className="nv-photo-placeholder__label" aria-hidden="true">
            {translate("photoPlaceholder.label")}
        </span>
    </div>
);
