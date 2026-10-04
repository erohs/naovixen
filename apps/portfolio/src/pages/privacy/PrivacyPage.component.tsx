import type { FunctionComponent } from "react";
import { Breadcrumb, FormattedMessage, Heading, HeadingSize, Text, TextVariant } from "@naovixen/components";
import { RichContent } from "@naovixen/rich-content";
import { formatDate } from "@naovixen/utilities";
import { homeBreadcrumbTrail } from "../../features/site/constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import type { IPrivacyPageProps } from "./interfaces/IPrivacyPageProps";

/** Written in the Studio, so Naomi can change it without a release. */
export const PrivacyPage: FunctionComponent<IPrivacyPageProps> = ({ notice }) => (
    <article aria-labelledby="privacy-title" className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("navigation.privacy")} />
        <div className="nv-privacy-page">
            <header className="nv-privacy-page__header">
                <Heading level={1} size={HeadingSize.Title} id="privacy-title">
                    {notice.title}
                </Heading>
                <Text variant={TextVariant.Meta}>
                    <FormattedMessage
                        message={translate("privacy.lastUpdated", { date: formatDate(notice.lastUpdated) })}
                        elements={{ date: (children) => <time dateTime={notice.lastUpdated}>{children}</time> }}
                    />
                </Text>
                <Text variant={TextVariant.Lead}>{notice.intro}</Text>
            </header>
            <RichContent body={notice.body} />
        </div>
    </article>
);
