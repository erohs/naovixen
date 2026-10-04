import type { IMessageElement } from "../interfaces/IMessageElement";
import type { MessageNode } from "../types/MessageNode";

interface IOpenElement {
    readonly tag: string;
    readonly children: MessageNode[];
}

const tagPattern = /<(\/?)([a-zA-Z][\w-]*)>/g;

const append = (stack: readonly IOpenElement[], node: MessageNode): void => {
    if (node !== "") {
        stack.at(-1)?.children.push(node);
    }
};

const closeElement = (stack: IOpenElement[], tag: string, source: string): void => {
    const open = stack.at(-1);

    if (stack.length < 2 || open?.tag !== tag) {
        append(stack, source);

        return;
    }

    stack.pop();
    append(stack, { tag, children: open.children } satisfies IMessageElement);
};

const flattenUnclosed = (stack: readonly IOpenElement[]): readonly MessageNode[] =>
    stack.flatMap((open, depth) => (depth === 0 ? open.children : [`<${open.tag}>`, ...open.children]));

/**
 * Splits a translated message into text and the elements it marks up, such as
 * `"Graduated with <strong>First Class Honours</strong>"`. Only tags named in `allowedTags` become
 * elements, and only when properly paired; anything else stays as the text it was, so a placeholder
 * value can never add markup it was not allowed.
 */
export const parseMessageMarkup = (message: string, allowedTags: ReadonlySet<string>): readonly MessageNode[] => {
    const stack: IOpenElement[] = [{ tag: "", children: [] }];
    let textStart = 0;

    for (const match of message.matchAll(tagPattern)) {
        const [source, closingSlash, tag = ""] = match;
        append(stack, message.slice(textStart, match.index));
        textStart = match.index + source.length;

        if (!allowedTags.has(tag)) {
            append(stack, source);
        } else if (closingSlash === "") {
            stack.push({ tag, children: [] });
        } else {
            closeElement(stack, tag, source);
        }
    }

    append(stack, message.slice(textStart));

    return flattenUnclosed(stack);
};
