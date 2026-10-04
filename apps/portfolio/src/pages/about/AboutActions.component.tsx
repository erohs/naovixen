import type { FunctionComponent } from "react";
import { arrowRightIcon, ButtonVariant, downloadIcon, LinkButton } from "@naovixen/components";
import { placeholderCvPath } from "../../constants/PlaceholderCvPath.const";
import { translate } from "../../translate/Translate.const";

export const AboutActions: FunctionComponent = () => (
    <div className="nv-about-page__actions">
        <LinkButton href={placeholderCvPath} download variant={ButtonVariant.Primary}>
            {translate("cv.download")} <LinkButton.Icon source={downloadIcon} />
        </LinkButton>
        <LinkButton href="/contact">
            {translate("about.getInTouch")} <LinkButton.Icon source={arrowRightIcon} />
        </LinkButton>
    </div>
);
