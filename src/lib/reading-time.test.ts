import { describe, expect, it } from "vitest";
import { readingTime } from "./reading-time";

const words = (count: number): string => Array.from({ length: count }, () => "word").join(" ");

describe("readingTime", () => {
    it("rounds up to whole minutes", () => {
        expect(readingTime(words(201))).toBe(2);
    });

    it("is never less than a minute", () => {
        expect(readingTime("")).toBe(1);
    });

    it("leaves out code blocks and component tags", () => {
        const body = `${words(200)}\n\n\`\`\`ts\n${words(400)}\n\`\`\`\n\n<Callout label="tip!" title="Note">`;
        expect(readingTime(body)).toBe(1);
    });
});
