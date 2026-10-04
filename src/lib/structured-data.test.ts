import { describe, expect, it } from "vitest";
import { blogPostingData, breadcrumbData, serialise } from "./structured-data";

describe("blogPostingData", () => {
    it("describes the post with absolute URLs and a plain date", () => {
        const data = blogPostingData({
            path: "/blog/hello/",
            title: "Hello",
            excerpt: "A first post.",
            published: new Date("2026-10-04"),
            topics: ["CSS"],
        });
        expect(data).toMatchObject({
            "@type": "BlogPosting",
            url: "https://naovixen.com/blog/hello/",
            datePublished: "2026-10-04",
            keywords: ["CSS"],
        });
    });
});

describe("breadcrumbData", () => {
    it("numbers each step from one", () => {
        const data = breadcrumbData([
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog/" },
        ]);
        expect(data["itemListElement"]).toEqual([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://naovixen.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://naovixen.com/blog/" },
        ]);
    });
});

describe("serialise", () => {
    it("escapes anything that could close the script element", () => {
        expect(serialise({ name: "</script>" })).toBe('{"name":"\\u003c/script>"}');
    });
});
