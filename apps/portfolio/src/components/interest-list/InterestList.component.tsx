import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { translate } from "../../translate/Translate.const";
import type { IInterestListProps } from "./interfaces/IInterestListProps";

export const InterestList: FunctionComponent<IInterestListProps> = ({ interests, className, ...listProps }) => (
    <ul {...listProps} className={joinClassNames("nv-interest-list", className)}>
        {interests.map((interest) => (
            <li key={interest}>{translate(interest)}</li>
        ))}
    </ul>
);
