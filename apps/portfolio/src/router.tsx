import { createRouter } from '@tanstack/react-router';

import { blogRepository } from './constants/BlogRepository.const';
import { projectRepository } from './constants/ProjectRepository.const';
import { routeTree } from './routeTree.gen';

/**
 * A fresh router per call: one held across server requests would leak a visitor's state into
 * the next render. The return type is inferred from the generated route tree.
 */
/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
export const getRouter = () =>
    createRouter({
        routeTree,
        context: { blogRepository, projectRepository },
        scrollRestoration: true,
        /** A new page starts at its top straight away; only in-page links scroll smoothly. */
        scrollRestorationBehavior: 'instant',
        defaultPreload: 'intent',
    });

declare module '@tanstack/react-router' {
    /* eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Router */
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
