import type { FunctionComponent } from "react";
import { AsidesSection } from "./AsidesSection.component";
import { CardsSection } from "./CardsSection.component";
import { InteractionsSection } from "./InteractionsSection.component";

export const ContentPage: FunctionComponent = () => (
    <>
        <CardsSection />
        <AsidesSection />
        <InteractionsSection />
    </>
);
