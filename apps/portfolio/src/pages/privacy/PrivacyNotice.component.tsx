import type { FunctionComponent } from "react";
import { FormattedMessage, Heading, HeadingSize, Text, TextVariant } from "@naovixen/components";
import { formatDate } from "@naovixen/utilities";
import { translate } from "../../translate/Translate.const";
import { privacyLastUpdated } from "./constants/PrivacyLastUpdated.const";
import { PrivacyRights } from "./PrivacyRights.component";

/** Placeholder from the prototype. Naomi should write or check the real notice herself. */
export const PrivacyNotice: FunctionComponent = () => (
    <>
        <Text variant={TextVariant.Meta}>
            <FormattedMessage
                message={translate("privacy.lastUpdated", { date: formatDate(privacyLastUpdated) })}
                elements={{ date: (children) => <time dateTime={privacyLastUpdated}>{children}</time> }}
            />
        </Text>
        <Text variant={TextVariant.Lead}>{translate("privacy.intro")}</Text>
        <Heading level={2} size={HeadingSize.H3} className="nv-privacy-page__heading">
            {translate("privacy.emailHeading")}
        </Heading>
        <Text>{translate("privacy.email")}</Text>
        <Heading level={2} size={HeadingSize.H3} className="nv-privacy-page__heading">
            {translate("privacy.cookiesHeading")}
        </Heading>
        <Text>{translate("privacy.cookies")}</Text>
        <PrivacyRights />
    </>
);
