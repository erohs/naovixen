import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { HeadingSize } from "./enums/HeadingSize";
import { Heading } from "./Heading.component";
import type { ISectionHeadingProps } from "./interfaces/ISectionHeadingProps";

/**
 * A heading and the line that introduces its section, grouped so the line is not taken for a subheading.
 * The number sits inside the heading because a heading group may hold only headings and paragraphs.
 */
export const SectionHeading: FunctionComponent<ISectionHeadingProps> = ({
    level = 2,
    headingId,
    number,
    intro,
    className,
    children,
    ...headingGroupProps
}) => (
    <hgroup {...headingGroupProps} className={joinClassNames("nv-section-heading", className)}>
        <Heading level={level} size={HeadingSize.H2} id={headingId} className="nv-section-heading__heading">
            {number && (
                <span className="nv-section-heading__number" aria-hidden="true">
                    {number}
                </span>
            )}
            {children}
        </Heading>
        {intro && <p className="nv-section-heading__intro">{intro}</p>}
    </hgroup>
);
