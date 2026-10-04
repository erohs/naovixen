import { describe, expect, test } from "vitest";
import { slugify } from "./slugify";

describe("Using slugify, when given a topic name", () => {
    test.each([
        ["Accessibility", "accessibility"],
        ["Design tokens", "design-tokens"],
        ["C#", "csharp"],
        [".NET", "dotnet"],
        ["C++", "cplusplus"],
        ["GOV.UK", "gov-uk"],
    ])("then it should turn %s into %s", (text, slug) => {
        expect(slugify(text)).toBe(slug);
    });
});
