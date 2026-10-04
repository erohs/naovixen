import type { FunctionComponent } from "react";
import { AsidesSection } from "./sections/asides/AsidesSection.component";
import { CardsSection } from "./sections/cards/CardsSection.component";
import { InteractionsSection } from "./sections/interactions/InteractionsSection.component";

export const ContentPage: FunctionComponent = () => (
    <>
        <CardsSection />
        <AsidesSection />
        <InteractionsSection />
    </>
);
