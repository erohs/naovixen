import type { FunctionComponent } from "react";
import { NavigationLayout, NavigationList } from "@naovixen/components";
import { Example } from "../../components/example/Example.component";
import { exampleNavigationItems } from "../../constants/ExampleNavigationItems.const";
import { exampleSocialLinks } from "../../constants/ExampleSocialLinks.const";
import { translate } from "../../translate/Translate.const";

export const NavigationSection: FunctionComponent = () => (
    <>
        <Example name={translate("siteFrame.navigationList")}>
            {Object.values(NavigationLayout).map((layout) => (
                <NavigationList
                    key={layout}
                    items={exampleNavigationItems}
                    currentHref="/about"
                    layout={layout}
                    aria-label={layout}
                />
            ))}
        </Example>
        <Example name={translate("siteFrame.navigationListElsewhere")}>
            <NavigationList items={exampleSocialLinks} aria-label={translate("siteFrame.elsewhere")} />
        </Example>
    </>
);
