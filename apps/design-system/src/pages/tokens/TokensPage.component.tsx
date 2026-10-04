import type { FunctionComponent } from "react";
import { ContrastTable } from "./sections/contrast-table/ContrastTable.component";
import { ColoursSection } from "./sections/colours/ColoursSection.component";
import { FontFamiliesSection } from "./sections/font-families/FontFamiliesSection.component";
import { LayersSection } from "./sections/layers/LayersSection.component";
import { RadiiAndShadowsSection } from "./sections/radii-and-shadows/RadiiAndShadowsSection.component";
import { SpacingSection } from "./sections/spacing/SpacingSection.component";
import { TypeScaleSection } from "./sections/type-scale/TypeScaleSection.component";

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
