import type { FunctionComponent } from "react";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";
import { specimenStyle } from "./functions/SpecimenStyle.function";
import { tokensStartingWith } from "./functions/TokensStartingWith.function";

export const RadiiAndShadowsSection: FunctionComponent = () => (
    <Example name={translate("tokens.radiiAndShadows")}>
        {tokensStartingWith("--radius-").map((token) => (
            <div key={token} className="nv-tokens-page__box" style={specimenStyle("borderRadius", token)}>
                {token}
            </div>
        ))}
        {tokensStartingWith("--shadow-").map((token) => (
            <div key={token} className="nv-tokens-page__box" style={specimenStyle("boxShadow", token)}>
                {token}
            </div>
        ))}
    </Example>
);
