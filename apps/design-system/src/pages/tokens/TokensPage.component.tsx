import type { FunctionComponent } from "react";
import { ContrastTable } from "../../components/contrast-table/ContrastTable.component";
import { ColoursSection } from "./ColoursSection.component";
import { FontFamiliesSection } from "./FontFamiliesSection.component";
import { LayersSection } from "./LayersSection.component";
import { RadiiAndShadowsSection } from "./RadiiAndShadowsSection.component";
import { SpacingSection } from "./SpacingSection.component";
import { TypeScaleSection } from "./TypeScaleSection.component";

export const TokensPage: FunctionComponent = () => (
    <>
        <ColoursSection />
        <ContrastTable />
        <TypeScaleSection />
        <FontFamiliesSection />
        <SpacingSection />
        <RadiiAndShadowsSection />
        <LayersSection />
    </>
);
