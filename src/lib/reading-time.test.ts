import { describe, expect, test } from "vitest";
import { readingTime } from "./reading-time";

const words = (count: number): string => Array.from({ length: count }, () => "word").join(" ");

describe("Using readingTime, when given a body just over a minute long", () => {
    test("then it should round up to whole minutes", () => {
        expect(readingTime(words(201))).toBe(2);
    });
});

describe("Using readingTime, when given an empty body", () => {
    test("then it should still say a minute", () => {
        expect(readingTime("")).toBe(1);
    });
});

describe("Using readingTime, when given a body with code and components", () => {
    test("then it should count only the prose", () => {
        const body = `${words(200)}\n\n\`\`\`ts\n${words(400)}\n\`\`\`\n\n<Callout label="tip!" title="Note">`;
        expect(readingTime(body)).toBe(1);
    });
});
