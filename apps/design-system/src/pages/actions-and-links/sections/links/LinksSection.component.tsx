import type { FunctionComponent } from "react";
import { arrowLeftIcon, arrowRightIcon, Link, LinkVariant } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";

export const LinksSection: FunctionComponent = () => (
    <>
        <Example name={translate("actionsAndLinks.link")}>
            <Link href="#actions-and-links">{translate("actionsAndLinks.linkInContent")}</Link>
            <Link href="#actions-and-links" variant={LinkVariant.Navigation}>
                {translate("actionsAndLinks.navigationLink")}
            </Link>
        </Example>
        <Example name={translate("actionsAndLinks.linkWithIcon")}>
            <Link href="#actions-and-links" variant={LinkVariant.Standalone}>
                {translate("actionsAndLinks.standaloneIconAtEnd")} <Link.Icon source={arrowRightIcon} />
            </Link>
            <Link href="#actions-and-links">
                <Link.Icon source={arrowLeftIcon} /> {translate("actionsAndLinks.iconAtStart")}
            </Link>
        </Example>
        <Example name={translate("actionsAndLinks.linkToAnotherSite")}>
            <Link href="https://example.com">{translate("actionsAndLinks.opensInNewTab")}</Link>
            <Link href="https://example.com" opensInNewTab={false}>
                {translate("actionsAndLinks.opensInPlace")}
            </Link>
        </Example>
    </>
);
