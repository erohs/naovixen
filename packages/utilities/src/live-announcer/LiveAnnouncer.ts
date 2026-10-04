import { messageLifetimeInMilliseconds } from "./constants/MessageLifetimeInMilliseconds.const";
import { writeDelayInMilliseconds } from "./constants/WriteDelayInMilliseconds.const";
import type { ILiveRegion } from "./interfaces/ILiveRegion";
import type { IScheduler } from "./interfaces/IScheduler";

/**
 * Reads messages out through a live region. Each message empties the region first and is written a
 * moment later, so a repeated message is read again and a burst is read once, as its last message.
 * Announcing before a region is connected does nothing, because nobody is listening yet.
 */
export class LiveAnnouncer {
    private readonly _scheduler: IScheduler;
    private _region: ILiveRegion | undefined;
    private _cancelPending: (() => void) | undefined;

    public constructor(scheduler: IScheduler) {
        this._scheduler = scheduler;
    }

    public readonly connect = (region: ILiveRegion): (() => void) => {
        this._region = region;

        return () => {
            this._cancel();
            this._region = undefined;
        };
    };

    public readonly announce = (message: string): void => {
        this._cancel();
        this._region?.clear();
        this._cancelPending = this._scheduler.schedule(() => {
            this._write(message);
        }, writeDelayInMilliseconds);
    };

    private _write(message: string): void {
        this._region?.write(message);
        this._cancelPending = this._scheduler.schedule(() => {
            this._region?.clear();
        }, messageLifetimeInMilliseconds);
    }

    private _cancel(): void {
        this._cancelPending?.();
        this._cancelPending = undefined;
    }
}
