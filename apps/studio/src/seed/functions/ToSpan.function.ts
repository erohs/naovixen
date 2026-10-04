import type { PortableNode } from "../types/PortableNode";

export const toSpan = (text: string, key: string, marks: readonly string[] = []): PortableNode => ({
    _type: "span",
    _key: key,
    text,
    marks,
});
