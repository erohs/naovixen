import { describe, expect, test } from "vitest";
import { numberSectionHeadings } from "../functions/NumberSectionHeadings.function";
import type { BodyNode } from "../types/BodyNode";

const heading = (key: string, isNumbered: boolean): BodyNode => ({
    _type: "sectionHeading",
    _key: key,
    text: key,
    isNumbered,
    number: undefined,
});

describe("Using numberSectionHeadings, when given numbered headings around an unnumbered one", () => {
    const numbers = numberSectionHeadings([heading("a", true), heading("b", false), heading("c", true)]).map((node) =>
        node._type === "sectionHeading" ? node.number : null,
    );

    test("then it should count only the numbered headings", () => {
        expect(numbers).toStrictEqual([1, undefined, 2]);
    });
});
