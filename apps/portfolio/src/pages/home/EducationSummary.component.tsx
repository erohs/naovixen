import type { FunctionComponent } from "react";
import { FormattedMessage, graduationCapIcon, Heading, Icon, Text, TextVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";

export const EducationSummary: FunctionComponent = () => (
    <div className="nv-education-summary">
        <Icon source={graduationCapIcon} className="nv-education-summary__icon" />
        <div className="nv-education-summary__header">
            <Heading level={3} className="nv-education-summary__degree">
                {translate("experience.degree")}
            </Heading>
            <Text variant={TextVariant.Meta}>{translate("experience.degreeDates")}</Text>
        </div>
        <Text>
            <FormattedMessage message={translate("experience.education")} />
        </Text>
        <Text className="nv-education-summary__note">{translate("experience.degreeNote")}</Text>
    </div>
);
