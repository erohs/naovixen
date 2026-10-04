import type { FunctionComponent } from "react";
import { FactList, TagList } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";

export const ListsSection: FunctionComponent = () => (
    <>
        <Example name={translate("textAndMedia.tagList")}>
            <TagList
                tags={[
                    translate("textAndMedia.accessibility"),
                    translate("textAndMedia.typeScript"),
                    translate("textAndMedia.css"),
                ]}
                label={translate("textAndMedia.topics")}
            />
        </Example>
        <Example name={translate("textAndMedia.factList")}>
            <FactList
                facts={[
                    { label: translate("textAndMedia.roleLabel"), value: translate("textAndMedia.roleValue") },
                    { label: translate("textAndMedia.timelineLabel"), value: translate("textAndMedia.timelineValue") },
                ]}
            />
        </Example>
    </>
);
