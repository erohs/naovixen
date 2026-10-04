import type { FunctionComponent } from "react";
import type { IDesignSystemPageProps } from "../../interfaces/IDesignSystemPageProps";
import { ButtonsSection } from "./ButtonsSection.component";
import { ControlsSection } from "./ControlsSection.component";
import { LinkButtonsSection } from "./LinkButtonsSection.component";
import { LinksSection } from "./LinksSection.component";
import { WayfindingSection } from "./WayfindingSection.component";

export const ActionsAndLinksPage: FunctionComponent<IDesignSystemPageProps> = ({ themeController }) => (
    <>
        <ButtonsSection />
        <LinkButtonsSection />
        <ControlsSection themeController={themeController} />
        <LinksSection />
        <WayfindingSection />
    </>
);
