import type { FunctionComponent } from "react";
import { RichContent } from "@naovixen/rich-content";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";
import { exampleRichContentBody } from "./constants/ExampleRichContentBody.const";

export const RichContentPage: FunctionComponent = () => (
    <Example name={translate("richContent.richContent")}>
        <RichContent body={exampleRichContentBody} />
    </Example>
);
