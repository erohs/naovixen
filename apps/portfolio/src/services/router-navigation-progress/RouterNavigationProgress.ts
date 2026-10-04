import type { AnyRouter } from "@tanstack/react-router";
import type { INavigationProgress } from "../page-loading-announcer/interfaces/INavigationProgress";
import type { INavigationProgressListener } from "../page-loading-announcer/interfaces/INavigationProgressListener";

/**
 * `fromLocation` is missing on the first load, which the server has already rendered. A navigation
 * overtaken by another resolves only once, as the last one.
 */
export class RouterNavigationProgress implements INavigationProgress {
    private readonly _router: Pick<AnyRouter, "subscribe">;

    public constructor(router: Pick<AnyRouter, "subscribe">) {
        this._router = router;
    }

    public subscribe(listener: INavigationProgressListener): () => void {
        const stopListeningToStarts = this._router.subscribe("onBeforeLoad", (event) => {
            if (event.fromLocation !== undefined && event.pathChanged) {
                listener.onStart();
            }
        });
        const stopListeningToEnds = this._router.subscribe("onResolved", () => {
            listener.onEnd();
        });

        return () => {
            stopListeningToStarts();
            stopListeningToEnds();
        };
    }
}
