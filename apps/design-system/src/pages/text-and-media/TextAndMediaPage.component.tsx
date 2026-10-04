import type { FunctionComponent } from "react";
import { HeadingsSection } from "./sections/headings/HeadingsSection.component";
import { IconsSection } from "./sections/icons/IconsSection.component";
import { ListsSection } from "./sections/lists/ListsSection.component";
import { PicturesSection } from "./sections/pictures/PicturesSection.component";
import { TextsSection } from "./sections/texts/TextsSection.component";

export const TextAndMediaPage: FunctionComponent = () => (
    <>
        <HeadingsSection />
        <TextsSection />
        <ListsSection />
        <PicturesSection />
        <IconsSection />
    </>
);
