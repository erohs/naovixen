import { describe, expect, test } from "vitest";
import { buildSeedDocuments } from "../functions/BuildSeedDocuments.function";
import type { ISeedContent } from "../interfaces/ISeedContent";

const content: ISeedContent = {
    posts: [
        {
            slug: "first",
            title: "First",
            excerpt: "",
            publishedAt: "2026-01-01",
            tags: ["C#", "CSS"],
            body: [{ type: "list", items: ["one", "two"] }],
        },
        { slug: "second", title: "Second", excerpt: "", publishedAt: "2026-01-02", tags: ["CSS"], body: [] },
    ],
    projects: [],
    privacyNotice: { title: "Privacy", intro: "", lastUpdated: "2026-01-01", body: [] },
};

const documents = buildSeedDocuments(content);
const firstPost = documents.find((document) => document._id === "post-first");

describe("Using buildSeedDocuments, when given posts sharing a tag", () => {
    test("then it should create each tag once, before the posts", () => {
        expect(documents.slice(0, 2).map((document) => document._id)).toEqual(["tag-csharp", "tag-css"]);
    });

    test("then it should reference the tags by their ids", () => {
        expect(firstPost?.tags).toMatchObject([{ _ref: "tag-csharp" }, { _ref: "tag-css" }]);
    });
});

describe("Using buildSeedDocuments, when given a list", () => {
    test("then it should write one bulleted block per item", () => {
        expect(firstPost?.body).toMatchObject([
            { listItem: "bullet", children: [{ text: "one" }] },
            { listItem: "bullet", children: [{ text: "two" }] },
        ]);
    });
});

describe("Using buildSeedDocuments, when given the privacy notice", () => {
    test("then it should write it to the singleton's id", () => {
        expect(documents.at(-1)?._id).toBe("privacyNotice");
    });
});
