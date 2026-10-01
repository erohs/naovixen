import { calloutType } from './CalloutType.const';
import { factListType } from './FactListType.const';
import { figureType } from './FigureType.const';
import { linkButtonsType } from './LinkButtonsType.const';
import { sectionHeadingType } from './SectionHeadingType.const';

/**
 * The site's own blocks, each named after the component that renders it. Listed once: the
 * schema registers them and the body field offers them, in this order.
 */
export const bodyBlockTypes = [
    sectionHeadingType,
    calloutType,
    figureType,
    factListType,
    linkButtonsType,
];
