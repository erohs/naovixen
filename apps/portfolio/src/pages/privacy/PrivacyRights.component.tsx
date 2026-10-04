import type { FunctionComponent } from "react";
import { FormattedMessage, Heading, HeadingSize, Link, Text } from "@naovixen/components";
import { placeholderEmailAddress } from "../../constants/PlaceholderEmailAddress.const";
import { translate } from "../../translate/Translate.const";

export const PrivacyRights: FunctionComponent = () => (
    <>
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
