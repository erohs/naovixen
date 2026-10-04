import type { AnyRouter } from "@tanstack/react-router";
import { timeoutScheduler } from "@naovixen/components";
import { globalAnnouncer } from "../../../features/navigation/constants/GlobalAnnouncer.const";
import { DocumentPage } from "../../../features/navigation/document-page/DocumentPage";
import { NavigationFocuser } from "../../../features/navigation/navigation-focuser/NavigationFocuser";
import { PageLoadingAnnouncer } from "../../../features/navigation/page-loading-announcer/PageLoadingAnnouncer";
import { RouterNavigationProgress } from "../../../features/navigation/router-navigation-progress/RouterNavigationProgress";
import { RouterPageChangeSource } from "../../../features/navigation/router-page-change-source/RouterPageChangeSource";
import { translate } from "../../../translate/Translate.const";

/**
 * Focuses each new page's heading rather than announcing its title, which would be read twice. A slow
 * navigation says the page is loading. Returns a function that stops both.
 */
export const watchNavigation = (router: Pick<AnyRouter, "subscribe">): (() => void) => {
    const stopFocusing = new NavigationFocuser(new RouterPageChangeSource(router), new DocumentPage()).start();
    const stopAnnouncing = new PageLoadingAnnouncer(
        new RouterNavigationProgress(router),
        timeoutScheduler,
        globalAnnouncer,
        translate("site.pageLoading"),
    ).start();

    return () => {
        stopFocusing();
        stopAnnouncing();
    };
};
