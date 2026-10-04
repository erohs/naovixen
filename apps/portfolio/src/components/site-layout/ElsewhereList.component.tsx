import type { FunctionComponent } from "react";
import { downloadIcon, LinkButton } from "@naovixen/components";
import { placeholderContactLinks } from "../../constants/PlaceholderContactLinks.const";
import { placeholderCvPath } from "../../constants/PlaceholderCvPath.const";
import { translate } from "../../translate/Translate.const";

/** Profiles on other sites and the CV, each a round button named by its icon's label. */
export const ElsewhereList: FunctionComponent = () => (
    <ul aria-label={translate("site.elsewhere")} className="nv-site-layout__elsewhere">
        {placeholderContactLinks.map((contactLink) => (
            <li key={contactLink.url}>
                <LinkButton href={contactLink.url}>
                    <LinkButton.Icon source={contactLink.icon} label={contactLink.label} />
                </LinkButton>
            </li>
        ))}
        <li>
            <LinkButton href={placeholderCvPath} download>
                <LinkButton.Icon source={downloadIcon} label={translate("cv.downloadWithFileType")} />
            </LinkButton>
        </li>
    </ul>
);
