import type { FunctionComponent } from "react";
import { Breadcrumb, gitHubIcon, LinkTile } from "@naovixen/components";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";

export const WayfindingSection: FunctionComponent = () => (
    <>
        <Example name={translate("actionsAndLinks.linkTile")}>
            <LinkTile
                href="#actions-and-links"
                label={translate("actionsAndLinks.linkTileLabel")}
                detail={translate("actionsAndLinks.linkTileDetail")}
                icon={gitHubIcon}
            />
        </Example>
        <Example name={translate("actionsAndLinks.breadcrumb")}>
            <Breadcrumb
                trail={[{ label: translate("actionsAndLinks.home"), href: "#actions-and-links" }]}
                currentLabel={translate("pages.actionsAndLinks")}
            />
        </Example>
    </>
);
