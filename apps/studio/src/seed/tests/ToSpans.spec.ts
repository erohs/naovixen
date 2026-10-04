import { describe, expect, test } from "vitest";
import { toSpans } from "../functions/ToSpans.function";

describe("Using toSpans, when given text with a link in the middle", () => {
    const { children, markDefs } = toSpans("Email [me](mailto:a@b.c) today.", "b0");

    test("then it should split the text around the link", () => {
        expect(children.map((span) => span.text)).toEqual(["Email ", "me", " today."]);
    });

    test("then it should define the link", () => {
        expect(markDefs).toEqual([{ _type: "link", _key: "b0l0", href: "mailto:a@b.c" }]);
    });

    test("then it should mark the link's span with its definition", () => {
        expect(children[1]?.marks).toEqual(["b0l0"]);
    });
});

describe("Using toSpans, when given empty text", () => {
    test("then it should still write one empty span, as a block needs one", () => {
        expect(toSpans("", "b0").children).toMatchObject([{ text: "" }]);
    });
});
