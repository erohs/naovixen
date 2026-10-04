import type { FunctionComponent } from "react";
import { FormattedMessage, Heading, HeadingSize, Link, Text, TextVariant } from "@naovixen/components";
import { formatDate } from "@naovixen/utilities";
import { placeholderEmailAddress } from "../../constants/PlaceholderEmailAddress.const";
import { translate } from "../../translate/Translate.const";
import { privacyLastUpdated } from "./constants/PrivacyLastUpdated.const";

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
            {translate("privacy.cookiesHeading")}
        </Heading>
        <Text>{translate("privacy.cookies")}</Text>
        <Heading level={2} size={HeadingSize.H3} className="nv-privacy-page__heading">
            {translate("privacy.rightsHeading")}
        </Heading>
        <Text>
            <FormattedMessage
                message={translate("privacy.rights", { email: placeholderEmailAddress })}
                elements={{ email: (children) => <Link href={`mailto:${placeholderEmailAddress}`}>{children}</Link> }}
            />
        </Text>
    </>
);
