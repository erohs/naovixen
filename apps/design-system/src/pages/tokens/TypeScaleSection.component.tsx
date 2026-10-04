import type { FunctionComponent } from "react";
import { Example } from "../../components/example/Example.component";
import { translate } from "../../translate/Translate.const";
import { specimenStyle } from "./functions/SpecimenStyle.function";
import { tokensStartingWith } from "./functions/TokensStartingWith.function";

export const TypeScaleSection: FunctionComponent = () => (
    <Example name={translate("tokens.typeScale")}>
        <div className="nv-tokens-page__column">
            {tokensStartingWith("--font-size-").map((token) => (
                <p key={token} style={specimenStyle("fontSize", token)}>
                    {token}
                </p>
            ))}
        </div>
    </Example>
);
