import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { AboutPage } from "../pages/about/AboutPage.component";
import { buildRouteHead } from "../functions/BuildRouteHead.function";
import { translate } from "../translate/Translate.const";

export const Route = createFileRoute("/about")({
    head: () =>
        buildRouteHead({
            title: translate("about.title"),
            description: translate("about.description"),
            path: "/about",
            type: OpenGraphType.Website,
        }),
    component: AboutPage,
});
