/** Renders as SectionHeading. */
export interface ISectionHeadingBlock {
    readonly _type: 'sectionHeading';
    readonly _key: string;
    readonly text: string;
    /** Its place among the body's section headings, counting from one. */
    readonly number: number;
}
