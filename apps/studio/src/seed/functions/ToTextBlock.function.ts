import type { PortableNode } from "../types/PortableNode";
import { toSpans } from "./ToSpans.function";

/** A paragraph, an h2, or with `listItem` an item of a bulleted list. */
export const toTextBlock = (text: string, key: string, style: "normal" | "h2", listItem?: "bullet"): PortableNode => ({
    _type: "block",
    _key: key,
    style,
    ...(listItem === undefined ? {} : { listItem, level: 1 }),
    ...toSpans(text, key),
});
