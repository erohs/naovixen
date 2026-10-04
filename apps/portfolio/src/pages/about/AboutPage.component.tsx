import type { FunctionComponent } from "react";
import { Breadcrumb } from "@naovixen/components";
import { homeBreadcrumbTrail } from "../../constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import { AboutActions } from "./AboutActions.component";
import { AboutDetails } from "./AboutDetails.component";
import { AboutIntroduction } from "./AboutIntroduction.component";

export const AboutPage: FunctionComponent = () => (
    <div className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("navigation.about")} />
        <div className="nv-about-page__content">
            <AboutIntroduction />
            <AboutDetails />
            <AboutActions />
        </div>
    </div>
);
