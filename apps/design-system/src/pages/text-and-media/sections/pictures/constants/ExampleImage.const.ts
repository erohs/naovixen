import type { IFigureProps } from "@naovixen/components";
import { translate } from "../../../../../translate/Translate.const";

export const exampleImage: IFigureProps["image"] = {
    src: "/example.svg",
    alt: translate("textAndMedia.imageAlt"),
    width: 800,
    height: 450,
};
