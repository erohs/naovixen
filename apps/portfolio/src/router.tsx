import { createRouter } from "@tanstack/react-router";
import { blogRepository } from "./features/blog/constants/BlogRepository.const";
import { privacyNoticeRepository } from "./features/privacy/constants/PrivacyNoticeRepository.const";
import { projectRepository } from "./features/projects/constants/ProjectRepository.const";
import { routeTree } from "./routeTree.gen";

/**
 * A fresh router per call: one held across server requests would leak a visitor's state into
 * the next render.
 */
/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types -- inferred from the generated route tree */
export const getRouter = () =>
    createRouter({
        routeTree,
        context: { blogRepository, projectRepository, privacyNoticeRepository },
        scrollRestoration: true,
        /** A new page starts at its top straight away; only in-page links scroll smoothly. */
        scrollRestorationBehavior: "instant",
        defaultPreload: "intent",
    });

declare module "@tanstack/react-router" {
    /* eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Router */
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
