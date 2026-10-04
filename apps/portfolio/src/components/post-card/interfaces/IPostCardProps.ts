import type { HeadingLevel, CardProps } from "@naovixen/components";
import type { IBlogPostSummary } from "@naovixen/cms";

export interface IPostCardProps extends Omit<CardProps, "children"> {
    readonly post: IBlogPostSummary;
    /** One below the heading above the list of cards. */
    readonly headingLevel: HeadingLevel;
}
