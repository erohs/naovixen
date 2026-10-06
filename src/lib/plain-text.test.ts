import { describe, expect, test } from "vitest";
import { plainText } from "./plain-text";

describe("Using plainText, when given an MDX body", () => {
    test("then it should keep the prose and drop code, tags and markup", () => {
        const body =
            '## Keep it\n\nSee [the guide](https://example.com) **now**.\n\n```css\na {}\n```\n\n<Callout label="tip!" title="Hi">';
        expect(plainText(body)).toBe("Keep it See the guide now.");
    });
});
