import type { FunctionComponent } from "react";
import { Link, LinkVariant } from "@naovixen/components";
import { privacyLink } from "../../features/site/constants/PrivacyLink.const";
import { site } from "../../features/site/constants/Site.const";
import { translate } from "../../translate/Translate.const";
import type { ISmallPrintProps } from "./interfaces/ISmallPrintProps";

export const SmallPrint: FunctionComponent<ISmallPrintProps> = ({ year }) => (
    <>
        <p>{translate("footer.copyright", { year, name: site.name })}</p>
        <Link href={privacyLink.href} variant={LinkVariant.Navigation}>
            {privacyLink.label}
        </Link>
    </>
);
