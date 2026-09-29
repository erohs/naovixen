import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

// Returns a fresh router per call: one held across server requests would leak a
// visitor's state into the next render. Return type is inferred from the generated
// route tree, which has no name worth writing out.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRouter = () =>
  createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
  });

declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Router
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
