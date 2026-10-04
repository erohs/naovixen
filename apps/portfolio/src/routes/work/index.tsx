import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OpenGraphType } from "@naovixen/seo";
import { WorkPage } from "../../pages/work/WorkPage.component";
import { buildRouteHead } from "../../features/seo/functions/BuildRouteHead.function";
import { translate } from "../../translate/Translate.const";

const WorkComponent = (): ReactNode => <WorkPage projects={Route.useLoaderData()} />;

export const Route = createFileRoute("/work/")({
    loader: ({ context }) => context.projectRepository.listProjects(),
    head: () =>
        buildRouteHead({
            title: translate("work.title"),
            description: translate("work.intro"),
            path: "/work",
            type: OpenGraphType.Website,
        }),
    component: WorkComponent,
});
