import type { ReactNode } from "react";
import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import type { IPostSearchCriteria } from "@naovixen/cms";
import { OpenGraphType } from "@naovixen/seo";
import { BlogPage } from "../../pages/blog/BlogPage.component";
import { emptyPostSearchCriteria } from "../../pages/blog/constants/EmptyPostSearchCriteria.const";
import { loadBlogPage } from "../../pages/blog/functions/LoadBlogPage.function";
import { parsePostSearchCriteria } from "../../pages/blog/functions/ParsePostSearchCriteria.function";
import { buildRouteHead } from "../../features/seo/functions/BuildRouteHead.function";
import { translate } from "../../translate/Translate.const";

/** Each search replaces the last in the history, so Back leaves the blog rather than undoing a letter. */
const BlogComponent = (): ReactNode => {
    const navigate = Route.useNavigate();

    const onSearch = (criteria: IPostSearchCriteria): void => {
        void navigate({ search: criteria, replace: true, resetScroll: false });
    };

    return <BlogPage {...Route.useLoaderData()} onSearch={onSearch} />;
};

export const Route = createFileRoute("/blog/")({
    validateSearch: parsePostSearchCriteria,
    search: { middlewares: [stripSearchParams(emptyPostSearchCriteria)] },
    loaderDeps: ({ search }) => search,
    loader: ({ context, deps }) => loadBlogPage(context.blogRepository, deps),
    head: () =>
        buildRouteHead({
            title: translate("blog.title"),
            description: translate("blog.description"),
            path: "/blog",
            type: OpenGraphType.Website,
        }),
    component: BlogComponent,
});
