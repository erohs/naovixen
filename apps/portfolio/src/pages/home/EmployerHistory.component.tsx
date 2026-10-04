import type { FunctionComponent } from "react";
import { FormattedMessage, Heading, HeadingSize, Text, TextVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import { employerRoles } from "./constants/EmployerRoles.const";
import { EmployerRole } from "./EmployerRole.component";

export const EmployerHistory: FunctionComponent = () => (
    <div className="nv-employer-history">
        <div className="nv-employer-history__header">
            <div className="nv-employer-history__name">
                <Heading level={3} size={HeadingSize.H4}>
                    <FormattedMessage
                        message={translate("experience.employer")}
                        elements={{
                            place: (children) => <span className="nv-employer-history__place">{children}</span>,
                        }}
                    />
                </Heading>
                <Text variant={TextVariant.Small}>{translate("experience.employerDescription")}</Text>
            </div>
            <Text variant={TextVariant.Meta}>{translate("experience.employerDates")}</Text>
        </div>
        <ol className="nv-employer-history__roles">
            {employerRoles.map((role) => (
                <EmployerRole key={role.title} role={role} />
            ))}
        </ol>
    </div>
);
