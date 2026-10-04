import { describe, expect, it } from "vitest";
import { adjacentPosts, newestFirst, relatedPosts, topicsOf, type PostSummary } from "./posts";

const post = (id: string, published: string, topics: string[]): PostSummary => ({
    id,
    data: { title: id, published: new Date(published), topics },
});

const posts = newestFirst([
    post("oldest", "2026-01-01", ["CSS"]),
    post("newest", "2026-03-01", ["CSS", "Forms"]),
    post("middle", "2026-02-01", ["Forms"]),
    post("unrelated", "2025-12-01", ["AI"]),
]);

describe("newestFirst", () => {
    it("orders by publication date, latest first", () => {
        expect(posts.map((each) => each.id)).toEqual(["newest", "middle", "oldest", "unrelated"]);
    });
});

describe("adjacentPosts", () => {
    it("finds the newer and older neighbours", () => {
        const { newer, older } = adjacentPosts(posts, "middle");
        expect([newer?.id, older?.id]).toEqual(["newest", "oldest"]);
    });

    it("does not wrap at either end", () => {
        expect(adjacentPosts(posts, "newest").newer).toBeUndefined();
        expect(adjacentPosts(posts, "unrelated").older).toBeUndefined();
    });
});

describe("relatedPosts", () => {
    it("ranks by shared topics, then by date, and leaves out the post itself", () => {
        const subject = post("subject", "2026-04-01", ["CSS", "Forms"]);
        expect(relatedPosts([...posts, subject], subject).map((each) => each.id)).toEqual(["newest", "middle"]);
    });

    it("finds nothing when no topic is shared", () => {
        expect(relatedPosts(posts, post("lonely", "2026-04-01", ["Rust"]))).toEqual([]);
    });
});

describe("topicsOf", () => {
    it("counts each topic, most used first, then alphabetically", () => {
        expect(topicsOf(posts)).toEqual([
            { name: "CSS", slug: "css", count: 2 },
            { name: "Forms", slug: "forms", count: 2 },
            { name: "AI", slug: "ai", count: 1 },
        ]);
    });
});
