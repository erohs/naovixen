import type { IBlogPostSummary } from "@naovixen/cms";
import { describe, expect, test } from "vitest";
import { findRelatedPosts } from "../functions/FindRelatedPosts.function";

const createSummary = (slug: string, tags: readonly string[]): IBlogPostSummary => ({
    slug,
    title: slug,
    excerpt: "",
    publishedAt: "2026-01-01",
    readingTimeInMinutes: 1,
    tags,
});

const post = createSummary("this", ["CSS", "Accessibility"]);

const posts = [
    createSummary("newest-one-shared", ["CSS"]),
    post,
    createSummary("none-shared", ["Testing"]),
    createSummary("both-shared", ["Accessibility", "CSS"]),
    createSummary("oldest-one-shared", ["Accessibility"]),
];

describe("Using findRelatedPosts, given posts sharing different numbers of topics, when asked", () => {
    test("then it should put the post sharing most first, then the newest of the rest", () => {
        expect(findRelatedPosts(posts, post).map(({ slug }) => slug)).toEqual(["both-shared", "newest-one-shared"]);
    });
});

describe("Using findRelatedPosts, given no other post shares a topic, when asked", () => {
    test("then it should return nothing", () => {
        expect(findRelatedPosts([post, createSummary("none-shared", ["Testing"])], post)).toEqual([]);
    });
});
