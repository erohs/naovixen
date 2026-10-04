import type { AnyRouter } from "@tanstack/react-router";
import { timeoutScheduler } from "@naovixen/components";
import { globalAnnouncer } from "../../../constants/GlobalAnnouncer.const";
import { DocumentPage } from "../../../services/document-page/DocumentPage";
import { NavigationFocuser } from "../../../services/navigation-focuser/NavigationFocuser";
import { PageLoadingAnnouncer } from "../../../services/page-loading-announcer/PageLoadingAnnouncer";
import { RouterNavigationProgress } from "../../../services/router-navigation-progress/RouterNavigationProgress";
import { RouterPageChangeSource } from "../../../services/router-page-change-source/RouterPageChangeSource";
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
