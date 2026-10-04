import type { FunctionComponent } from "react";
import { Link } from "@naovixen/components";
import { privacyLink } from "../../features/site/constants/PrivacyLink.const";
import { site } from "../../features/site/constants/Site.const";
import { translate } from "../../translate/Translate.const";
import { ElsewhereList } from "../elsewhere-list/ElsewhereList.component";
import { Logo } from "../logo/Logo.component";
import type { ISmallPrintProps } from "./interfaces/ISmallPrintProps";

export const SmallPrint: FunctionComponent<ISmallPrintProps> = ({ year }) => (
    <>
        <div className="nv-site-footer__details">
            <Logo className="nv-site-footer__logo" />
            <p>{translate("footer.copyright", { year, name: site.name })}</p>
            <Link href={privacyLink.href}>{privacyLink.label}</Link>
        </div>
        <ElsewhereList />
    </>
);
