import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { buildPersonStructuredData, buildWebSiteStructuredData } from "@naovixen/seo";
import { HomePage } from "../pages/home/HomePage.component";
import { latestPostCount } from "../constants/LatestPostCount.const";
import { person } from "../constants/Person.const";
import { site } from "../constants/Site.const";
import { buildRouteHead } from "../functions/BuildRouteHead.function";
import { translate } from "../translate/Translate.const";

const HomeComponent = (): ReactNode => <HomePage {...Route.useLoaderData()} />;

export const Route = createFileRoute("/")({
    loader: async ({ context }) => {
        const [projects, posts] = await Promise.all([
            context.projectRepository.listProjects(),
            context.blogRepository.listPosts(),
        ]);

        return {
            featuredProjects: projects.filter((project) => project.isFeatured),
            latestPosts: posts.slice(0, latestPostCount),
        };
    },
    head: () =>
        buildRouteHead(
            {
                title: translate("home.title", { site: site.name }),
                description: translate("home.description"),
                path: "/",
                type: OpenGraphType.Website,
            },
            [buildPersonStructuredData(person, site), buildWebSiteStructuredData(site)],
        ),
    component: HomeComponent,
});
