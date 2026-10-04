import type { FunctionComponent } from "react";
import { Checkbox, TextField } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";

export const FieldsSection: FunctionComponent = () => (
    <>
        <Example name={translate("actionsAndLinks.textField")}>
            <TextField label={translate("actionsAndLinks.searchLabel")} type="search" />
        </Example>
        <Example name={translate("actionsAndLinks.checkbox")}>
            <Checkbox defaultChecked>{translate("actionsAndLinks.checked")}</Checkbox>
            <Checkbox>{translate("actionsAndLinks.unchecked")}</Checkbox>
        </Example>
    </>
);
