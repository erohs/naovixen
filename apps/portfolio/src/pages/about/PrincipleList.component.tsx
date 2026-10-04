import type { FunctionComponent } from "react";
import { translate } from "../../translate/Translate.const";
import { placeholderPrinciples } from "./constants/PlaceholderPrinciples.const";

export const PrincipleList: FunctionComponent = () => (
    <dl className="nv-principle-list">
        {placeholderPrinciples.map((principle) => (
            <div key={principle.title} className="nv-principle-list__item">
                <dt className="nv-principle-list__title">{translate(principle.title)}</dt>
                <dd className="nv-principle-list__description">{translate(principle.description)}</dd>
            </div>
        ))}
    </dl>
);
