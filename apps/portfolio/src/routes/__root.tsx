import type { ReactNode } from "react";
import { createRootRouteWithContext, HeadContent, Scripts, ScriptOnce } from "@tanstack/react-router";
import { themeBootScript } from "@naovixen/theming";
import { NotFoundPage } from "../pages/not-found/NotFoundPage.component";
import { SiteLayout } from "../components/site-layout/SiteLayout.component";
import { headingFontPreload } from "../features/seo/constants/HeadingFontPreload.const";
import { sanityImagePreconnect } from "../features/sanity/constants/SanityImagePreconnect.const";
import { site } from "../features/site/constants/Site.const";
import { blogFeedChannel } from "../features/blog/constants/BlogFeedChannel.const";
import { publicCacheControl } from "../features/cache-control/constants/PublicCacheControl.const";
import { isNotFoundPage } from "../features/seo/functions/IsNotFoundPage.function";
import type { IRootDocumentProps } from "../interfaces/IRootDocumentProps";
import type { IRouterContext } from "../interfaces/IRouterContext";
import { translate } from "../translate/Translate.const";

/** Order matters: theming declares the cascade layers that the other stylesheets are filed into. */
import "@naovixen/theming/styles.css";
import "@naovixen/components/styles.css";
import "@naovixen/rich-content/styles.css";
import "../index.css";

/**
 * The document itself. As the shell, it also wraps the not-found and error pages. The boot
 * script sets the theme on `<html>` before React hydrates, hence `suppressHydrationWarning`.
 */
const RootDocument = ({ children }: IRootDocumentProps): ReactNode => {
    const { year } = Route.useLoaderData();

    return (
        <html lang={site.locale} suppressHydrationWarning>
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
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: isNotFoundPage(matches) ? translate("site.notFoundTitle", { site: site.name }) : site.name },
        ],
        links: [
            { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
            {
                rel: "alternate",
                type: "application/rss+xml",
                title: blogFeedChannel.title,
                href: blogFeedChannel.feedPath,
            },
            headingFontPreload,
            sanityImagePreconnect,
        ],
    }),
    headers: () => ({ "Cache-Control": publicCacheControl }),
    shellComponent: RootDocument,
    notFoundComponent: NotFoundPage,
});
