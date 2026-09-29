import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

/**
 * Builds the router for this app.
 *
 * TanStack Start calls this on both the server and the client, so it must return a fresh
 * router each time rather than a shared module-level instance — a router held across
 * server requests would leak one visitor's state into the next visitor's render.
 *
 * The return type is deliberately inferred: it is derived from the generated route tree,
 * so writing it out by hand would only go stale as routes are added.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types -- see above
export const getRouter = () =>
  createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
  });

declare module '@tanstack/react-router' {
  // `Register` is TanStack Router's own augmentation point. Its name is fixed by the
  // library, so the project's `I` prefix cannot apply here.
  // eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Router
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
