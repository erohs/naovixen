import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { ContactPage } from "../pages/contact/ContactPage.component";
import { buildRouteHead } from "../functions/BuildRouteHead.function";
import { translate } from "../translate/Translate.const";

export const Route = createFileRoute("/contact")({
    head: () =>
        buildRouteHead({
            title: translate("contact.title"),
            description: translate("contact.description"),
            path: "/contact",
            type: OpenGraphType.Website,
        }),
    component: ContactPage,
});
