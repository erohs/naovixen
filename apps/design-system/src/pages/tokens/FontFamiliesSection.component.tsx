import type { FunctionComponent } from "react";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";
import { specimenStyle } from "./functions/SpecimenStyle.function";
import { tokensStartingWith } from "./functions/TokensStartingWith.function";

export const FontFamiliesSection: FunctionComponent = () => (
    <Example name={translate("tokens.fontFamilies")}>
        <div className="nv-tokens-page__column">
            {tokensStartingWith("--font-family-").map((token) => (
                <p key={token} style={specimenStyle("fontFamily", token)}>
                    {translate("tokens.fontSpecimen", { token })}
                </p>
            ))}
        </div>
    </Example>
);
