import type { FunctionComponent } from "react";
import type { IDesignSystemPageProps } from "../../interfaces/IDesignSystemPageProps";
import { ButtonsSection } from "./sections/buttons/ButtonsSection.component";
import { ControlsSection } from "./sections/controls/ControlsSection.component";
import { LinkButtonsSection } from "./sections/link-buttons/LinkButtonsSection.component";
import { LinksSection } from "./sections/links/LinksSection.component";
import { WayfindingSection } from "./sections/wayfinding/WayfindingSection.component";

export const ActionsAndLinksPage: FunctionComponent<IDesignSystemPageProps> = ({ themeController }) => (
    <>
        <ButtonsSection />
        <LinkButtonsSection />
        <ControlsSection themeController={themeController} />
        <LinksSection />
        <WayfindingSection />
    </>
);
