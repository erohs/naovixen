import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { BlogPage } from "../../pages/blog/BlogPage.component";
import { buildRouteHead } from "../../functions/BuildRouteHead.function";
import { translate } from "../../translate/Translate.const";

const BlogComponent = (): ReactNode => <BlogPage posts={Route.useLoaderData()} />;

export const Route = createFileRoute("/blog/")({
    loader: ({ context }) => context.blogRepository.listPosts(),
    head: () =>
        buildRouteHead({
            title: translate("blog.title"),
            description: translate("blog.description"),
            path: "/blog",
            type: OpenGraphType.Website,
        }),
    component: BlogComponent,
});
