import { describe, expect, test } from "vitest";
import { searchPosts, type ISearchablePost } from "./search-posts";

const post = (id: string, fields: Partial<ISearchablePost>): ISearchablePost => ({
    id,
    title: "",
    excerpt: "",
    body: "",
    topics: [],
    published: "2026-01-01",
    ...fields,
});

const posts = [
    post("in-body", { body: "Radios and forced colours", published: "2026-03-01" }),
    post("in-title", { title: "Radio buttons", published: "2026-01-01" }),
    post("in-excerpt", { excerpt: "About radios", published: "2026-02-01", topics: ["Forms"] }),
    post("elsewhere", { title: "Agentic coding", topics: ["AI"] }),
];

describe("Using searchPosts, when nothing is asked for", () => {
    test("then it should find every post, newest first", () => {
        expect(searchPosts(posts, { query: "", topics: [] })).toEqual([
            "in-body",
            "in-excerpt",
            "in-title",
            "elsewhere",
        ]);
    });
});

describe("Using searchPosts, when a word is typed", () => {
    test("then it should match the start of words and rank title over excerpt over body", () => {
        expect(searchPosts(posts, { query: "radi", topics: [] })).toEqual(["in-title", "in-excerpt", "in-body"]);
    });
});

describe("Using searchPosts, when several words are typed", () => {
    test("then it should find only posts holding every one", () => {
        expect(searchPosts(posts, { query: "radios forced", topics: [] })).toEqual(["in-body"]);
    });
});

describe("Using searchPosts, when a word appears only inside other words", () => {
    test("then it should not match", () => {
        expect(searchPosts(posts, { query: "adio", topics: [] })).toEqual([]);
    });
});

describe("Using searchPosts, when topics are chosen", () => {
    test("then it should find posts with any of them", () => {
        expect(searchPosts(posts, { query: "", topics: ["AI", "Forms"] })).toEqual(["in-excerpt", "elsewhere"]);
    });
});

describe("Using searchPosts, when a word and a topic are both given", () => {
    test("then it should find posts that satisfy both", () => {
        expect(searchPosts(posts, { query: "radio", topics: ["Forms"] })).toEqual(["in-excerpt"]);
    });
});

describe("Using searchPosts, when a word names a topic", () => {
    test("then it should match the post's topics too", () => {
        expect(searchPosts(posts, { query: "ai", topics: [] })).toEqual(["elsewhere"]);
    });
});
