import type { FunctionComponent } from "react";
import { heartIcon, Icon } from "@naovixen/components";
import { PhotoPlaceholder } from "../../components/photo-placeholder/PhotoPlaceholder.component";
import { AboutSummary } from "./AboutSummary.component";

export const AboutSection: FunctionComponent = () => (
    <section aria-labelledby="about-title" className="nv-about-section">
        <AboutSummary />
        <div className="nv-about-section__photo">
            <PhotoPlaceholder />
            <Icon source={heartIcon} className="nv-about-section__heart" />
        </div>
    </section>
);
