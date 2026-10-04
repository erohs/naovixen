import type { FunctionComponent } from "react";
import { Footer, Text, TextVariant } from "@naovixen/components";
import { navigationItems } from "../../features/site/constants/NavigationItems.const";
import { translate } from "../../translate/Translate.const";
import { Logo } from "../logo/Logo.component";
import { placeholderSocialLinks } from "./constants/PlaceholderSocialLinks.const";
import type { ISiteFooterProps } from "./interfaces/ISiteFooterProps";
import { SmallPrint } from "./SmallPrint.component";

export const SiteFooter: FunctionComponent<ISiteFooterProps> = ({ currentPath, year }) => (
    <Footer smallPrint={<SmallPrint year={year} />}>
        <div className="nv-site-footer__about">
            <Logo />
            <Text variant={TextVariant.Small}>{translate("footer.blurb")}</Text>
        </div>
        <Footer.Column heading={translate("footer.siteColumn")} links={navigationItems} currentHref={currentPath} />
        <Footer.Column heading={translate("footer.elsewhereColumn")} links={placeholderSocialLinks} />
    </Footer>
);
