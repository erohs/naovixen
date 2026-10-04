import type { FunctionComponent } from "react";
import { SectionHeading } from "@naovixen/components";
import type { IHomeSectionProps } from "./interfaces/IHomeSectionProps";

export const HomeSection: FunctionComponent<IHomeSectionProps> = ({
    id,
    heading,
    headingId,
    intro,
    action,
    children,
}) => (
    <section id={id} aria-labelledby={headingId} className="nv-home-section">
        <div className="nv-home-section__header">
            <SectionHeading headingId={headingId} intro={intro}>
                {heading}
            </SectionHeading>
            {action}
        </div>
        {children}
    </section>
);
