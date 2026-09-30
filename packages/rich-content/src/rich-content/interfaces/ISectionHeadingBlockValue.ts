import type { TypedObject } from '@portabletext/types';

export interface ISectionHeadingBlockValue extends TypedObject {
    readonly _type: 'sectionHeading';
    readonly text: string;
    /** Set by `RichContent` from the heading's place among the others. */
    readonly number?: number | undefined;
}
