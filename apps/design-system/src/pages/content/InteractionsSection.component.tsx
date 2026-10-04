import type { FunctionComponent } from "react";
import { DisclosureDemo } from "../../components/disclosure-demo/DisclosureDemo.component";
import { Example } from "../../components/example/Example.component";
import { LiveRegionDemo } from "../../components/live-region-demo/LiveRegionDemo.component";
import { translate } from "../../translate/Translate.const";

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
