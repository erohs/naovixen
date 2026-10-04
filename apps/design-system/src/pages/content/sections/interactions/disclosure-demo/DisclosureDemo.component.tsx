import type { FunctionComponent } from "react";
import { useState } from "react";
import { Disclosure, Text } from "@naovixen/components";
import { translate } from "../../../../../translate/Translate.const";
import type { IDisclosureDemoProps } from "./interfaces/IDisclosureDemoProps";

/** Disclosure leaves its state to the caller, so the demo holds it. */
export const DisclosureDemo: FunctionComponent<IDisclosureDemoProps> = ({ isInitiallyOpen }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <Disclosure label={translate("content.disclosureLabel")} isOpen={isOpen} onOpenChange={setIsOpen}>
            <Text>{translate("content.disclosurePanel")}</Text>
        </Disclosure>
    );
};
