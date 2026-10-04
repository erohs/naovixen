import type { FunctionComponent } from "react";
import { Heading, HeadingSize, Icon, Text, TextVariant } from "@naovixen/components";
import { translate } from "../../translate/Translate.const";
import type { IExperienceEntryProps } from "./interfaces/IExperienceEntryProps";

/** A step on the timeline. The plain dot and the line to the next step are drawn by the stylesheet. */
export const ExperienceEntry: FunctionComponent<IExperienceEntryProps> = ({ entry }) => (
    <li className="nv-experience-entry">
        {entry.icon && <Icon source={entry.icon} className="nv-experience-entry__icon" />}
        <Text variant={TextVariant.Meta}>{translate(entry.dates)}</Text>
        <Heading level={3} size={HeadingSize.H4}>
            {translate(entry.title)}
        </Heading>
        <Text className="nv-experience-entry__organisation">{translate(entry.organisation)}</Text>
        <Text className="nv-experience-entry__note">{translate(entry.note)}</Text>
    </li>
);
