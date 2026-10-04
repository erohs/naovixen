import { toTextBlock } from "../functions/ToTextBlock.function";
import type { SeedBlockConverters } from "../types/SeedBlockConverters";

/** Each block in the shape its schema type stores. A list becomes one block per item. */
export const seedBlockConverters: SeedBlockConverters = {
    paragraph: (block, key) => [toTextBlock(block.text, key, "normal")],
    heading: (block, key) => [toTextBlock(block.text, key, "h2")],
    sectionHeading: (block, key) => [
        { _type: "sectionHeading", _key: key, text: block.text, isNumbered: block.isNumbered ?? true },
    ],
    list: (block, key) =>
        block.items.map((item, index) => toTextBlock(item, `${key}i${String(index)}`, "normal", "bullet")),
    code: (block, key) => [
        { _type: "code", _key: key, language: block.language, filename: block.filename, code: block.code },
    ],
    callout: (block, key) => [
        { _type: "callout", _key: key, label: block.label, title: block.title, text: block.text },
    ],
    facts: (block, key) => [
        {
            _type: "factList",
            _key: key,
            facts: block.facts.map((fact, index) => ({ _type: "fact", _key: `${key}f${String(index)}`, ...fact })),
        },
    ],
};
