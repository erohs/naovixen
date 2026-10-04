import type { FunctionComponent } from "react";
import { Link, LinkVariant } from "@naovixen/components";
import { placeholderEmailAddress } from "../../features/site/constants/PlaceholderEmailAddress.const";
import { translate } from "../../translate/Translate.const";
import { ExclamationBubble } from "../speech-bubble/ExclamationBubble.component";
import { ElsewhereList } from "./ElsewhereList.component";

/** Ways to get in touch, beneath the links in the narrow-screen menu. */
export const MenuFooter: FunctionComponent = () => (
    <div className="nv-site-layout__menu-footer">
        <ExclamationBubble>{translate("contact.greeting")}</ExclamationBubble>
        <Link
            href={`mailto:${placeholderEmailAddress}`}
            variant={LinkVariant.Standalone}
            className="nv-site-layout__email">
            {placeholderEmailAddress}
        </Link>
        <ElsewhereList />
    </div>
);
