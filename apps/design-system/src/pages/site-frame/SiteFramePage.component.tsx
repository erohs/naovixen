import type { FunctionComponent } from "react";
import { FrameSection } from "./FrameSection.component";
import { NavigationSection } from "./NavigationSection.component";

export const SiteFramePage: FunctionComponent = () => (
    <>
        <NavigationSection />
        <FrameSection />
    </>
);
