import type { FunctionComponent } from "react";
import { darkTheme, lightTheme } from "@naovixen/theming";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";
import { colorTokens } from "./constants/ColorTokens.const";
import { specimenStyle } from "./functions/SpecimenStyle.function";

export const ColoursSection: FunctionComponent = () => (
    <Example name={translate("tokens.colours")}>
        {colorTokens.map((token) => (
            <figure key={token} className="nv-tokens-page__swatch">
                <span className="nv-tokens-page__colour" style={specimenStyle("backgroundColor", token)} />
                <figcaption>
                    {token}
                    <br />
                    {translate("tokens.colourValues", { light: lightTheme[token], dark: darkTheme[token] })}
                </figcaption>
            </figure>
        ))}
    </Example>
);
