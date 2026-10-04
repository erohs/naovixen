import type { FunctionComponent } from "react";
import { Heading, Text, TextVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import type { IEmployerRoleProps } from "./interfaces/IEmployerRoleProps";

/** A step on the employer's timeline. The dot and the line to the next step are drawn by the stylesheet. */
export const EmployerRole: FunctionComponent<IEmployerRoleProps> = ({ role }) => (
    <li className="nv-employer-role">
        <div className="nv-employer-role__header">
            <Heading level={4} className="nv-employer-role__title">
                {translate(role.title)}
            </Heading>
            <Text variant={TextVariant.Meta}>{translate(role.dates)}</Text>
        </div>
        <Text className="nv-employer-role__summary">{translate(role.summary)}</Text>
    </li>
);
