import { buttonGroupType } from './ButtonGroupType.const';
import { calloutType } from './CalloutType.const';
import { factListType } from './FactListType.const';
import { figureType } from './FigureType.const';
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
    buttonGroupType,
];
