import type { FunctionComponent } from "react";
import { Callout, CodeBlock, Text } from "@naovixen/components";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";

export const AsidesSection: FunctionComponent = () => (
    <>
        <Example name={translate("content.callout")}>
            <Callout label={translate("content.calloutLabel")} title={translate("content.calloutTitle")}>
                <Text>{translate("content.calloutText")}</Text>
            </Callout>
        </Example>
        <Example name={translate("content.codeBlock")}>
            <CodeBlock code="const answer = 42;" language="TypeScript" />
            <CodeBlock code="pnpm --filter design-system dev" language="Shell" filename="terminal" />
        </Example>
    </>
);
