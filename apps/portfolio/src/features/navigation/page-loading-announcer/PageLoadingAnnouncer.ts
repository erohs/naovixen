import type { IScheduler } from "@naovixen/utilities";
import { loadingAnnouncementDelayInMilliseconds } from "./constants/LoadingAnnouncementDelayInMilliseconds.const";
import type { IAnnouncer } from "./interfaces/IAnnouncer";
import type { INavigationProgress } from "./interfaces/INavigationProgress";

/** Says the page is loading when a client-side navigation keeps the reader waiting, and nothing otherwise. */
export class PageLoadingAnnouncer {
    private readonly _navigationProgress: INavigationProgress;
    private readonly _scheduler: IScheduler;
    private readonly _announcer: IAnnouncer;
    private readonly _message: string;
    private _cancelPending: (() => void) | undefined;

    public constructor(
        navigationProgress: INavigationProgress,
        scheduler: IScheduler,
        announcer: IAnnouncer,
        message: string,
    ) {
        this._navigationProgress = navigationProgress;
        this._scheduler = scheduler;
        this._announcer = announcer;
        this._message = message;
    }

    /** Returns a function that stops. */
    public readonly start = (): (() => void) => {
        const stopListening = this._navigationProgress.subscribe({ onStart: this._onStart, onEnd: this._cancel });

        return () => {
            stopListening();
            this._cancel();
        };
    };

    private readonly _onStart = (): void => {
        this._cancel();
        this._cancelPending = this._scheduler.schedule(() => {
            this._cancelPending = undefined;
            this._announcer.announce(this._message);
        }, loadingAnnouncementDelayInMilliseconds);
    };

    private readonly _cancel = (): void => {
        this._cancelPending?.();
        this._cancelPending = undefined;
    };
}
