import { describe, expect, test } from "vitest";
import { describeResults, describeSelectedTopics } from "./describe-search";

describe("Using describeResults, when nothing narrows the posts", () => {
    test("then it should count them, singular for one", () => {
        expect(describeResults(1, 1, { query: "", topics: [] })).toBe("1 post");
    });

    test("then it should count them, plural for more", () => {
        expect(describeResults(6, 6, { query: "", topics: [] })).toBe("6 posts");
    });
});

describe("Using describeResults, when words are typed", () => {
    test("then it should say what they matched, out of how many", () => {
        expect(describeResults(0, 3, { query: " zebra ", topics: [] })).toBe("Showing 0 of 3 posts matching “zebra”");
    });
});

describe("Using describeResults, when topics are chosen", () => {
    test("then it should list them as alternatives", () => {
        expect(describeResults(2, 6, { query: "", topics: ["CSS", "Forms", "AI"] })).toBe(
            "Showing 2 of 6 posts tagged CSS, Forms or AI",
        );
    });
});

describe("Using describeResults, when words and topics are both given", () => {
    test("then it should say both", () => {
        expect(describeResults(1, 6, { query: "radio", topics: ["Forms"] })).toBe(
            "Showing 1 of 6 posts tagged Forms matching “radio”",
        );
    });
});

describe("Using describeSelectedTopics, when given the selection", () => {
    test.each([
        [[], "All topics"],
        [["CSS"], "CSS"],
        [["CSS", "AI"], "2 topics selected"],
    ])("then it should describe %j as %s", (topics, description) => {
        expect(describeSelectedTopics(topics)).toBe(description);
    });
});
