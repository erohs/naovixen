import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { PrivacyPage } from "../pages/privacy/PrivacyPage.component";
import { buildRouteHead } from "../functions/BuildRouteHead.function";
import { translate } from "../translate/Translate.const";

export const Route = createFileRoute("/privacy")({
    head: () =>
        buildRouteHead({
            title: translate("privacy.title"),
            description: translate("privacy.description"),
            path: "/privacy",
            type: OpenGraphType.Website,
        }),
    component: PrivacyPage,
});
