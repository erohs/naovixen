import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useLocation, useRouter } from "@tanstack/react-router";
import { BackToTop, Header, LinkProvider, LiveRegion, SkipLink, ThemeToggle } from "@naovixen/components";
import { navigationItems } from "../../constants/NavigationItems.const";
import { themeController } from "../../constants/ThemeController.const";
import { translate } from "../../translate/Translate.const";
import { Logo } from "../logo/Logo.component";
import { RoutedLink } from "../routed-link/RoutedLink.component";
import { SiteFooter } from "../site-footer/SiteFooter.component";
import { globalAnnouncer } from "../../constants/GlobalAnnouncer.const";
import { watchNavigation } from "./functions/WatchNavigation.function";
import type { ISiteLayoutProps } from "./interfaces/ISiteLayoutProps";
import { MenuFooter } from "./MenuFooter.component";

export const SiteLayout: FunctionComponent<ISiteLayoutProps> = ({ year, children }) => {
    const router = useRouter();
    const currentPath = useLocation({ select: (location) => location.pathname });
    useEffect(() => watchNavigation(router), [router]);

    return (
        <LinkProvider linkComponent={RoutedLink}>
            <div className="nv-site-layout">
                <SkipLink href="#main">{translate("site.skipToContent")}</SkipLink>
                <Header
                    logo={<Logo />}
                    items={navigationItems}
                    currentHref={currentPath}
                    actions={<ThemeToggle themeController={themeController} />}
                    menuFooter={<MenuFooter />}
                />
                <main id="main" tabIndex={-1} className="nv-site-layout__main">
                    {children}
                </main>
                <SiteFooter currentPath={currentPath} year={year} />
                <BackToTop />
                <LiveRegion announcer={globalAnnouncer} />
            </div>
        </LinkProvider>
    );
};
