import { describe, expect, test } from "vitest";
import { parseMessageMarkup } from "../functions/ParseMessageMarkup.function";

const strongOnly = new Set(["strong"]);

describe("Using parseMessageMarkup, when given plain text", () => {
    test("then it should return the text alone", () => {
        expect(parseMessageMarkup("Last updated today", strongOnly)).toStrictEqual(["Last updated today"]);
    });
});

describe("Using parseMessageMarkup, when given an allowed tag", () => {
    test("then it should return the text around an element holding the marked words", () => {
        expect(parseMessageMarkup("Leeds · <strong>First</strong> class", strongOnly)).toStrictEqual([
            "Leeds · ",
            { tag: "strong", children: ["First"] },
            " class",
        ]);
    });
});

describe("Using parseMessageMarkup, when given nested allowed tags", () => {
    test("then it should nest the elements", () => {
        expect(parseMessageMarkup("<em>a <strong>b</strong></em>", new Set(["em", "strong"]))).toStrictEqual([
            { tag: "em", children: ["a ", { tag: "strong", children: ["b"] }] },
        ]);
    });
});

describe("Using parseMessageMarkup, when given a tag that is not allowed", () => {
    test("then it should keep the tag as text", () => {
        expect(parseMessageMarkup("<script>x</script>", strongOnly)).toStrictEqual(["<script>", "x", "</script>"]);
    });
});

describe("Using parseMessageMarkup, when given an allowed tag that is never closed", () => {
    test("then it should keep the tag as text", () => {
        expect(parseMessageMarkup("a <strong>b", strongOnly)).toStrictEqual(["a ", "<strong>", "b"]);
    });
});
