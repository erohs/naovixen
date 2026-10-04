import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { PrivacyPage } from "../pages/privacy/PrivacyPage.component";
import { loadPrivacyPage } from "../pages/privacy/functions/LoadPrivacyPage.function";
import { buildRouteHead } from "../features/seo/functions/BuildRouteHead.function";

const PrivacyComponent = (): ReactNode => <PrivacyPage notice={Route.useLoaderData()} />;

export const Route = createFileRoute("/privacy")({
    loader: ({ context }) => loadPrivacyPage(context.privacyNoticeRepository),
    /** Without loader data, as on a 404, the root's title stands. */
    head: ({ loaderData }) =>
        loaderData
            ? buildRouteHead({
                  title: loaderData.title,
                  description: loaderData.intro,
                  path: "/privacy",
                  type: OpenGraphType.Website,
              })
            : {},
    component: PrivacyComponent,
});
