import type { CardProps, HeadingLevel } from "@naovixen/components";
import type { IProjectSummary } from "@naovixen/cms";

export interface IProjectCardProps extends Omit<CardProps, "children"> {
    readonly project: IProjectSummary;
    readonly headingLevel: HeadingLevel;
    /** Its screenshot is likely the largest thing in view on load, so it is fetched first. */
    readonly isAboveTheFold?: boolean | undefined;
}
