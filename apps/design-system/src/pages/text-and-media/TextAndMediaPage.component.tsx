import type { FunctionComponent } from "react";
import { HeadingsSection } from "./HeadingsSection.component";
import { IconsSection } from "./IconsSection.component";
import { ListsSection } from "./ListsSection.component";
import { PicturesSection } from "./PicturesSection.component";
import { TextsSection } from "./TextsSection.component";

export const TextAndMediaPage: FunctionComponent = () => (
    <>
        <HeadingsSection />
        <TextsSection />
        <ListsSection />
        <PicturesSection />
        <IconsSection />
    </>
);
