import { linkPattern } from "../constants/LinkPattern.const";
import type { ISpans } from "../interfaces/ISpans";
import type { PortableNode } from "../types/PortableNode";
import { toSpan } from "./ToSpan.function";

/** Splits text around its `[text](url)` links, each link a span marked with its own definition. */
export const toSpans = (text: string, key: string): ISpans => {
    const children: PortableNode[] = [];
    const markDefs: PortableNode[] = [];
    let readTo = 0;

    for (const { 0: whole, 1: label = "", 2: href = "", index } of text.matchAll(linkPattern)) {
        if (index > readTo) {
            children.push(toSpan(text.slice(readTo, index), `${key}s${String(children.length)}`));
        }

        const linkKey = `${key}l${String(markDefs.length)}`;
        markDefs.push({ _type: "link", _key: linkKey, href });
        children.push(toSpan(label, `${key}s${String(children.length)}`, [linkKey]));
        readTo = index + whole.length;
    }

    if (readTo < text.length || children.length === 0) {
        children.push(toSpan(text.slice(readTo), `${key}s${String(children.length)}`));
    }

    return { children, markDefs };
};
