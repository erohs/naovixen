import type { RenderResult } from '@testing-library/react';
import { act, render } from '@testing-library/react';
import {
    createMemoryHistory,
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
} from '@tanstack/react-router';
import type { ReactNode } from 'react';

/**
 * Renders `ui` inside a memory-history router, so router links build their hrefs and active
 * state as they would on the site. `paths` are the routes the links point at, and
 * `currentPath` is where the router starts.
 */
export async function renderWithRouter(
    ui: ReactNode,
    paths: readonly string[] = [],
    currentPath = '/',
): Promise<RenderResult> {
    const rootRoute = createRootRoute({ component: () => ui });
    const childRoutes = paths.map((path) => createRoute({ getParentRoute: () => rootRoute, path }));
    const router = createRouter({
        routeTree: rootRoute.addChildren(childRoutes),
        history: createMemoryHistory({ initialEntries: [currentPath] }),
    });

    await act(() => router.load());

    return render(<RouterProvider router={router} />);
}
