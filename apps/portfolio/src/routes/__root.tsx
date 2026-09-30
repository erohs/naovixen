import type { ReactNode } from 'react';
import {
    createRootRouteWithContext,
    HeadContent,
    Scripts,
    ScriptOnce,
} from '@tanstack/react-router';
import { themeBootScript } from '@naovixen/theming';

import { NotFoundPage } from '../pages/not-found/NotFoundPage.component';
import { SiteLayout } from '../components/site-layout/SiteLayout.component';
import { headingFontPreload } from '../constants/HeadingFontPreload.const';
import { site } from '../constants/Site.const';
import { blogFeedChannel } from '../constants/BlogFeedChannel.const';
import { publicCacheControl } from '../constants/PublicCacheControl.const';
import { isNotFoundPage } from '../functions/IsNotFoundPage.function';
import type { IRouterContext } from '../interfaces/IRouterContext';

/** Order matters: theming declares the cascade layers that the other stylesheets are filed into. */
import '@naovixen/theming/styles.css';
import '@naovixen/components/styles.css';
import '@naovixen/blocks/styles.css';
import '@naovixen/blog-content/styles.css';
import '../index.css';

/**
 * The document itself. As the shell, it also wraps the not-found and error pages. The boot
 * script sets the theme on `<html>` before React hydrates, hence `suppressHydrationWarning`.
 */
const RootDocument = ({ children }: { readonly children: ReactNode }): ReactNode => {
    const { year } = Route.useLoaderData();

    return (
        <html lang="en-GB" suppressHydrationWarning>
            <head>
                <ScriptOnce>{themeBootScript}</ScriptOnce>
                <HeadContent />
            </head>
            <body>
                <SiteLayout year={year}>{children}</SiteLayout>
                <Scripts />
            </body>
        </html>
    );
};

export const Route = createRootRouteWithContext<IRouterContext>()({
    loader: () => ({ year: new Date().getFullYear() }),
    /** Every page sets its own title; this one stands only when none matched. */
    head: ({ matches }) => ({
        meta: [
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { title: isNotFoundPage(matches) ? `Page not found — ${site.name}` : site.name },
        ],
        links: [
            { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
            {
                rel: 'alternate',
                type: 'application/rss+xml',
                title: blogFeedChannel.title,
                href: blogFeedChannel.feedPath,
            },
            headingFontPreload,
        ],
    }),
    headers: () => ({ 'Cache-Control': publicCacheControl }),
    shellComponent: RootDocument,
    notFoundComponent: NotFoundPage,
});
