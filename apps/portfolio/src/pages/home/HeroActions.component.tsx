import type { FunctionComponent } from "react";
import { arrowDownIcon, ButtonVariant, downloadIcon, LinkButton } from "@naovixen/components";
import { placeholderCvPath } from "../../constants/PlaceholderCvPath.const";
import { translate } from "../../translate/Translate.const";
import type { IHeroSectionProps } from "./interfaces/IHeroSectionProps";

export const HeroActions: FunctionComponent<IHeroSectionProps> = ({ hasFeaturedProjects }) => (
    <div className="nv-hero-section__actions">
        <LinkButton href={hasFeaturedProjects ? "#work" : "#experience"} variant={ButtonVariant.Primary}>
            {translate("home.seeMyWork")} <LinkButton.Icon source={arrowDownIcon} />
        </LinkButton>
        <LinkButton href={placeholderCvPath} download>
            {translate("cv.download")} <span className="nv-hero-section__file-type">{translate("cv.fileType")}</span>
            <LinkButton.Icon source={downloadIcon} />
        </LinkButton>
    </div>
);
