import type { FunctionComponent } from "react";
import { arrowRightIcon, Button, ButtonVariant, closeIcon, downloadIcon } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";

export const ButtonsSection: FunctionComponent = () => (
    <>
        <Example name={translate("actionsAndLinks.button")}>
            <Button variant={ButtonVariant.Primary}>{translate("actionsAndLinks.primary")}</Button>
            <Button>{translate("actionsAndLinks.secondary")}</Button>
            <Button disabled>{translate("actionsAndLinks.disabled")}</Button>
        </Example>
        <Example name={translate("actionsAndLinks.buttonWithIcon")}>
            <Button>
                <Button.Icon source={downloadIcon} /> {translate("actionsAndLinks.iconAtStart")}
            </Button>
            <Button>
                {translate("actionsAndLinks.iconAtEnd")} <Button.Icon source={arrowRightIcon} />
            </Button>
            <Button>
                <Button.Icon source={downloadIcon} label={translate("actionsAndLinks.iconOnly")} />
            </Button>
        </Example>
        <Example name={translate("actionsAndLinks.chip")}>
            <Button variant={ButtonVariant.Chip}>
                {translate("actionsAndLinks.removableChip")} <Button.Icon source={closeIcon} />
            </Button>
        </Example>
    </>
);
