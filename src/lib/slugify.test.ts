import { describe, expect, it } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
    it.each([
        ["Accessibility", "accessibility"],
        ["Design tokens", "design-tokens"],
        ["C#", "csharp"],
        [".NET", "dotnet"],
        ["C++", "cplusplus"],
        ["GOV.UK", "gov-uk"],
    ])("turns %s into %s", (text, slug) => {
        expect(slugify(text)).toBe(slug);
    });
});
