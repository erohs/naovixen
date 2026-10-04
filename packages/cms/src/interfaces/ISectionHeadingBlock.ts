/** Renders as SectionHeading. */
export interface ISectionHeadingBlock {
    readonly _type: "sectionHeading";
    readonly _key: string;
    readonly text: string;
    readonly isNumbered: boolean;
    /** Its place among the body's numbered section headings, counting from one. Unnumbered ones have none. */
    readonly number: number | undefined;
}
