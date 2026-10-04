import type { FunctionComponent } from "react";
import { Icon } from "@naovixen/components";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";
import { icons } from "./constants/Icons.const";

export const IconsSection: FunctionComponent = () => (
    <Example name={translate("textAndMedia.icon")}>
        {icons.map((icon) => (
            <span key={icon.name} className="nv-text-and-media-page__icon">
                <Icon source={icon.source} />
                {icon.name}
            </span>
        ))}
    </Example>
);
