import type { IBlogPostSummary, IPostSearchResult } from "@naovixen/cms";
import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithRouter } from "../../../tests/functions/RenderWithRouter.function";
import { BlogPage } from "../BlogPage.component";
import type { IBlogPageProps } from "../interfaces/IBlogPageProps";

const post: IBlogPostSummary = {
    slug: "example-post",
    title: "Example post",
    excerpt: "An example excerpt.",
    publishedAt: "2026-01-15",
    readingTimeInMinutes: 6,
    tags: ["Example topic"],
};

const paths = ["/", "/blog", "/blog/example-post"];

const renderBlogPage = async (result: IPostSearchResult, query = ""): Promise<void> => {
    const props: IBlogPageProps = {
        criteria: { query, topics: [] },
        result,
        topics: [{ title: "Example topic", postCount: 1 }],
        onSearch: () => undefined,
    };

    await renderWithRouter(<BlogPage {...props} />, paths, "/blog");
};

describe("Using BlogPage, given some posts, when it renders", () => {
    test("then it should title each post card at level 2", async () => {
        await renderBlogPage({ posts: [post], totalCount: 1 });

        expect(screen.getByRole("heading", { level: 2, name: "Example post" })).toBeDefined();
    });
});

describe("Using BlogPage, given a search that matches nothing, when it renders", () => {
    test("then it should say how many it found out of all the posts", async () => {
        await renderBlogPage({ posts: [], totalCount: 3 }, "zebra");

        expect(screen.getByText("Showing 0 of 3 posts matching “zebra”")).toBeDefined();
    });

    test("then it should suggest searching differently", async () => {
        await renderBlogPage({ posts: [], totalCount: 3 }, "zebra");

        expect(screen.getByText("No posts match that. Try a different word or topic.")).toBeDefined();
    });
});

describe("Using BlogPage, given no posts at all, when it renders", () => {
    test("then it should say there are no posts yet", async () => {
        await renderBlogPage({ posts: [], totalCount: 0 });

        expect(screen.getByText("There are no posts yet.")).toBeDefined();
    });

    test("then it should offer no search", async () => {
        await renderBlogPage({ posts: [], totalCount: 0 });

        expect(screen.queryByRole("search")).toBeNull();
    });
});
