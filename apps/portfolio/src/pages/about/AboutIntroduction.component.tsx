import type { FunctionComponent } from "react";
import { SpeechBubble, Text, TextVariant } from "@naovixen/components";
import { GreetingHeading } from "../../components/greeting-heading/GreetingHeading.component";
import { PhotoPlaceholder } from "../../components/photo-placeholder/PhotoPlaceholder.component";
import { translate } from "../../translate/Translate.const";

export const AboutIntroduction: FunctionComponent = () => (
    <div className="nv-about-introduction">
        <div className="nv-about-introduction__text">
            <GreetingHeading greeting={<SpeechBubble>{translate("about.greeting")}</SpeechBubble>}>
                {translate("about.heading")}
            </GreetingHeading>
            <Text variant={TextVariant.Lead}>{translate("about.lead")}</Text>
            <Text>{translate("about.apprenticeship")}</Text>
            <Text>{translate("about.nowadays")}</Text>
            <Text>{translate("about.aiAdoption")}</Text>
        </div>
        <PhotoPlaceholder className="nv-about-introduction__photo" />
    </div>
);
