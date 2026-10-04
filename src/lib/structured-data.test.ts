import { describe, expect, test } from "vitest";
import { blogPostingData, breadcrumbData, serialise } from "./structured-data";

describe("Using blogPostingData, when given a post", () => {
    test("then it should describe it with an absolute URL and a plain date", () => {
        const data = blogPostingData({
            path: "/blog/hello/",
            title: "Hello",
            excerpt: "A first post.",
            published: new Date("2026-10-04"),
            topics: ["CSS"],
        });
        expect(data).toMatchObject({ url: "https://naovixen.com/blog/hello/", datePublished: "2026-10-04" });
    });
});

describe("Using breadcrumbData, when given steps", () => {
    test("then it should number them from one, with absolute URLs", () => {
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

describe("Using serialise, when a value holds a closing script tag", () => {
    test("then it should escape it so the element cannot close early", () => {
        expect(serialise({ name: "</script>" })).toBe('{"name":"\\u003c/script>"}');
    });
});
