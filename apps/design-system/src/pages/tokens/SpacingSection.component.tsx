import type { FunctionComponent } from "react";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";
import { specimenStyle } from "./functions/SpecimenStyle.function";
import { tokensStartingWith } from "./functions/TokensStartingWith.function";

export const SpacingSection: FunctionComponent = () => (
    <Example name={translate("tokens.spacing")}>
        <div className="nv-tokens-page__column">
            {tokensStartingWith("--space-between-").map((token) => (
                <div key={token} className="nv-tokens-page__space">
                    <span className="nv-tokens-page__bar" style={specimenStyle("inlineSize", token)} />
                    {token}
                </div>
            ))}
        </div>
    </Example>
);
