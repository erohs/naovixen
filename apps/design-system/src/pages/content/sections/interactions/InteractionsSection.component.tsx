import type { FunctionComponent } from "react";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";
import { DisclosureDemo } from "./disclosure-demo/DisclosureDemo.component";
import { LiveRegionDemo } from "./live-region-demo/LiveRegionDemo.component";

export const InteractionsSection: FunctionComponent = () => (
    <>
        <Example name={translate("content.disclosure")}>
            <DisclosureDemo isInitiallyOpen={false} />
            <DisclosureDemo isInitiallyOpen />
        </Example>
        <Example name={translate("content.liveRegion")}>
            <LiveRegionDemo />
        </Example>
    </>
);
