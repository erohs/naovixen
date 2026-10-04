import type { FunctionComponent } from "react";
import { Button, Footer, Header, Text } from "@naovixen/components";
import { Example } from "../../components/example/Example.component";
import { exampleNavigationItems } from "../../constants/ExampleNavigationItems.const";
import { exampleSocialLinks } from "../../constants/ExampleSocialLinks.const";
import { translate } from "../../translate/Translate.const";

export const FrameSection: FunctionComponent = () => (
    <>
        <Example name={translate("siteFrame.header")}>
            <Header
                logo={translate("siteName")}
                items={exampleNavigationItems}
                currentHref="/"
                actions={<Button>{translate("siteFrame.action")}</Button>}
                menuFooter={<Text>{translate("siteFrame.menuFooter")}</Text>}
                className="nv-site-frame-page__wide"
            />
        </Example>
        <Example name={translate("siteFrame.footer")}>
            <Footer smallPrint={<p>{translate("siteFrame.smallPrint")}</p>} className="nv-site-frame-page__wide">
                <Text>{translate("siteName")}</Text>
                <Footer.Column heading={translate("siteFrame.site")} links={exampleNavigationItems} currentHref="/" />
                <Footer.Column heading={translate("siteFrame.elsewhere")} links={exampleSocialLinks} />
            </Footer>
        </Example>
    </>
);
