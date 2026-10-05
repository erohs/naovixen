import { describe, expect, test } from "vitest";
import { isExternal } from "./is-external";

describe("Using isExternal, when given a link", () => {
    test.each([
        ["https://www.linkedin.com/in/naomi-shore", true],
        ["//cdn.example.com/file", true],
        ["/blog/", false],
        ["#main", false],
        ["mailto:hello@example.com", false],
    ])("then it should say whether %s leads to another site", (href, expected) => {
        expect(isExternal(href)).toBe(expected);
    });
});
