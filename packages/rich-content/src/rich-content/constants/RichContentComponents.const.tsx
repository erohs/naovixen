import type { PortableTextComponents } from "@portabletext/react";
import { richContentBlocks } from "./RichContentBlocks.const";
import { richContentMarks } from "./RichContentMarks.const";
import { richContentTypes } from "./RichContentTypes.const";

/**
 * Lists and the strong and em marks keep the library's plain HTML. Unknown types render
 * nothing and unknown marks keep their text, rather than writing warnings into the page.
 */
export const richContentComponents: PortableTextComponents = {
    block: richContentBlocks,
    types: richContentTypes,
    marks: richContentMarks,
    unknownType: () => null,
    unknownMark: ({ children }) => children,
};
