import { calloutType } from "../../blocks/constants/CalloutType.const";
import { factListType } from "../../blocks/constants/FactListType.const";
import { figureType } from "../../blocks/constants/FigureType.const";
import { linkButtonsType } from "../../blocks/constants/LinkButtonsType.const";
import { sectionHeadingType } from "../../blocks/constants/SectionHeadingType.const";

/**
 * The site's own blocks, each named after the component that renders it. Listed once: the
 * schema registers them and the body field offers them, in this order.
 */
export const bodyBlockTypes = [sectionHeadingType, calloutType, figureType, factListType, linkButtonsType];
