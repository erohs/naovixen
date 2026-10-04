import type { FunctionComponent } from "react";
import { arrowRightIcon, ButtonVariant, downloadIcon, externalLinkIcon, LinkButton } from "@naovixen/components";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";

export const LinkButtonsSection: FunctionComponent = () => (
    <Example name={translate("actionsAndLinks.linkButton")}>
        <LinkButton href="#actions-and-links" variant={ButtonVariant.Primary}>
            {translate("actionsAndLinks.primary")} <LinkButton.Icon source={arrowRightIcon} />
        </LinkButton>
        <LinkButton href="#actions-and-links">
            <LinkButton.Icon source={downloadIcon} /> {translate("actionsAndLinks.download")}
        </LinkButton>
        <LinkButton href="https://example.com">
            {translate("actionsAndLinks.anotherSite")} <LinkButton.Icon source={externalLinkIcon} />
        </LinkButton>
    </Example>
);
