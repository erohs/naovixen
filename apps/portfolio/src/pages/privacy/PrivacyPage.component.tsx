import type { FunctionComponent } from "react";
import { Breadcrumb, Heading, HeadingSize } from "@naovixen/components";
import { homeBreadcrumbTrail } from "../../constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import { PrivacyNotice } from "./PrivacyNotice.component";

export const PrivacyPage: FunctionComponent = () => (
    <article aria-labelledby="privacy-title" className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("privacy.title")} />
        <div className="nv-privacy-page">
            <Heading level={1} size={HeadingSize.Title} id="privacy-title">
                {translate("privacy.title")}
            </Heading>
            <PrivacyNotice />
        </div>
    </article>
);
