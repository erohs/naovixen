import type { FunctionComponent } from "react";
import { translate } from "../../../../translate/Translate.const";
import { principles } from "./constants/Principles.const";

export const PrincipleList: FunctionComponent = () => (
    <dl className="nv-principle-list">
        {principles.map((principle) => (
            <div key={principle.title} className="nv-principle-list__item">
                <dt className="nv-principle-list__title">{translate(principle.title)}</dt>
                <dd className="nv-principle-list__description">{translate(principle.description)}</dd>
            </div>
        ))}
    </dl>
);
