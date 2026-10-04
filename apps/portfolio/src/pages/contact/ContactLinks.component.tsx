import type { FunctionComponent } from "react";
import { downloadIcon, externalLinkIcon, LinkTile } from "@naovixen/components";
import { placeholderContactLinks } from "../../constants/PlaceholderContactLinks.const";
import { placeholderCvPath } from "../../constants/PlaceholderCvPath.const";
import { translate } from "../../translate/Translate.const";

/** Profiles on other sites open in a new tab; the CV downloads. */
export const ContactLinks: FunctionComponent = () => (
    <ul className="nv-contact-page__links">
        {placeholderContactLinks.map((contactLink) => (
            <li key={contactLink.url}>
                <LinkTile
                    href={contactLink.url}
                    label={contactLink.label}
                    detail={contactLink.detail}
                    icon={contactLink.icon}
                    trailingIcon={externalLinkIcon}
                />
            </li>
        ))}
        <li>
            <LinkTile
                href={placeholderCvPath}
                download
                label={translate("cv.download")}
                detail={translate("cv.fileType")}
                icon={downloadIcon}
                trailingIcon={downloadIcon}
            />
        </li>
    </ul>
);
