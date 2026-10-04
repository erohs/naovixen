import type { IBlogPostSummary } from "@naovixen/cms";
import { describe, expect, test } from "vitest";
import { findNewerPost } from "../functions/FindNewerPost.function";

const createSummary = (slug: string): IBlogPostSummary => ({
    slug,
    title: slug,
    excerpt: "",
    publishedAt: "2026-01-01",
    readingTimeInMinutes: 1,
    tags: [],
});

const posts = [createSummary("newest"), createSummary("middle"), createSummary("oldest")];

describe("Using findNewerPost, when asked for the post before one in the middle", () => {
    test("then it should return the next newest", () => {
        expect(findNewerPost(posts, "middle")?.slug).toBe("newest");
    });
});

describe("Using findNewerPost, when asked for the post before the newest", () => {
    test("then it should return nothing", () => {
        expect(findNewerPost(posts, "newest")).toBeUndefined();
    });
});

describe("Using findNewerPost, when asked about a slug that is not listed", () => {
    test("then it should return nothing", () => {
        expect(findNewerPost(posts, "missing")).toBeUndefined();
    });
});
