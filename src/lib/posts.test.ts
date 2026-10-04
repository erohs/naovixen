import { describe, expect, test } from "vitest";
import { adjacentPosts, newestFirst, relatedPosts, topicsOf, type IPostSummary } from "./posts";

const post = (id: string, published: string, topics: string[]): IPostSummary => ({
    id,
    data: { title: id, published: new Date(published), topics },
});

const posts = newestFirst([
    post("oldest", "2026-01-01", ["CSS"]),
    post("newest", "2026-03-01", ["CSS", "Forms"]),
    post("middle", "2026-02-01", ["Forms"]),
    post("unrelated", "2025-12-01", ["AI"]),
]);

describe("Using newestFirst, when given posts in any order", () => {
    test("then it should order them by publication date, latest first", () => {
        expect(posts.map((each) => each.id)).toEqual(["newest", "middle", "oldest", "unrelated"]);
    });
});

describe("Using adjacentPosts, when asked about a post in the middle", () => {
    test("then it should find the newer neighbour", () => {
        expect(adjacentPosts(posts, "middle").newer?.id).toBe("newest");
    });

    test("then it should find the older neighbour", () => {
        expect(adjacentPosts(posts, "middle").older?.id).toBe("oldest");
    });
});

describe("Using adjacentPosts, when asked about the posts at either end", () => {
    test("then it should find nothing newer than the newest", () => {
        expect(adjacentPosts(posts, "newest").newer).toBeUndefined();
    });

    test("then it should find nothing older than the oldest", () => {
        expect(adjacentPosts(posts, "unrelated").older).toBeUndefined();
    });
});

describe("Using relatedPosts, when other posts share topics", () => {
    test("then it should rank by topics shared, then by date, leaving out the post itself", () => {
        const subject = post("subject", "2026-04-01", ["CSS", "Forms"]);
        expect(relatedPosts([...posts, subject], subject).map((each) => each.id)).toEqual(["newest", "middle"]);
    });
});

describe("Using relatedPosts, when no topic is shared", () => {
    test("then it should find nothing", () => {
        expect(relatedPosts(posts, post("lonely", "2026-04-01", ["Rust"]))).toEqual([]);
    });
});

describe("Using topicsOf, when given posts", () => {
    test("then it should count each topic, most used first, then alphabetically", () => {
        expect(topicsOf(posts)).toEqual([
            { name: "CSS", slug: "css", count: 2 },
            { name: "Forms", slug: "forms", count: 2 },
            { name: "AI", slug: "ai", count: 1 },
        ]);
    });
});
