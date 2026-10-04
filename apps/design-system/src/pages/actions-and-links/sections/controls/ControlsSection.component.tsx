import type { FunctionComponent } from "react";
import { BackToTop, SkipLink, Text, ThemeToggle } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import type { IDesignSystemPageProps } from "../../../../interfaces/IDesignSystemPageProps";
import { translate } from "../../../../translate/Translate.const";

export const ControlsSection: FunctionComponent<IDesignSystemPageProps> = ({ themeController }) => (
    <>
        <Example name={translate("actionsAndLinks.themeToggle")}>
            <ThemeToggle themeController={themeController} />
        </Example>
        <Example name={translate("actionsAndLinks.backToTop")}>
            <Text>{translate("actionsAndLinks.backToTopDescription")}</Text>
            <BackToTop />
        </Example>
        <Example name={translate("actionsAndLinks.skipLink")}>
            <SkipLink href="#actions-and-links">{translate("actionsAndLinks.skipLinkText")}</SkipLink>
        </Example>
    </>
);
