import type { FunctionComponent } from "react";
import { sharedTokens } from "@naovixen/theming";
import { Example } from "../../../../components/example/Example.component";
import { translate } from "../../../../translate/Translate.const";
import { layerUseKeys } from "./constants/LayerUseKeys.const";

export const LayersSection: FunctionComponent = () => (
    <Example name={translate("tokens.layers")}>
        <table className="nv-tokens-page__layers">
            <caption>{translate("tokens.layersCaption")}</caption>
            <thead>
                <tr>
                    <th scope="col">{translate("tokens.layer")}</th>
                    <th scope="col">{translate("tokens.layerValue")}</th>
                    <th scope="col">{translate("tokens.layerUse")}</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(layerUseKeys).map(([token, useKey]) => (
                    <tr key={token}>
                        <th scope="row">{token}</th>
                        <td>{sharedTokens[token as keyof typeof layerUseKeys]}</td>
                        <td>{translate(useKey)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Example>
);
