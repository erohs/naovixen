import type { FunctionComponent } from "react";
import { FrameSection } from "./sections/frame/FrameSection.component";
import { NavigationSection } from "./sections/navigation/NavigationSection.component";

export const SiteFramePage: FunctionComponent = () => (
    <>
        <NavigationSection />
        <FrameSection />
    </>
);
