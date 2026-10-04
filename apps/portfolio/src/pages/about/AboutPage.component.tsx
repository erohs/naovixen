import type { FunctionComponent } from "react";
import { Breadcrumb } from "@naovixen/components";
import { homeBreadcrumbTrail } from "../../features/site/constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import { AboutActions } from "./sections/actions/AboutActions.component";
import { AboutDetails } from "./sections/details/AboutDetails.component";
import { AboutIntroduction } from "./sections/introduction/AboutIntroduction.component";

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
