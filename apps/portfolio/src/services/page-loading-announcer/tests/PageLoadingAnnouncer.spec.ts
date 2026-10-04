import type { IScheduler } from "@naovixen/utilities";
import type { Mock } from "vitest";
import { beforeEach, describe, expect, test, vi } from "vitest";
import type { INavigationProgress } from "../interfaces/INavigationProgress";
import type { INavigationProgressListener } from "../interfaces/INavigationProgressListener";
import { PageLoadingAnnouncer } from "../PageLoadingAnnouncer";

class FakeNavigationProgress implements INavigationProgress {
    public listener: INavigationProgressListener | undefined;

    public subscribe(listener: INavigationProgressListener): () => void {
        this.listener = listener;

        return () => {
            this.listener = undefined;
        };
    }
}

class FakeScheduler implements IScheduler {
    public pending: { readonly callback: () => void; readonly delayInMilliseconds: number } | undefined;

    public schedule(callback: () => void, delayInMilliseconds: number): () => void {
        this.pending = { callback, delayInMilliseconds };

        return () => {
            this.pending = undefined;
        };
    }

    public runPending(): void {
        this.pending?.callback();
    }
}

interface IStartedAnnouncer {
    readonly navigationProgress: FakeNavigationProgress;
    readonly scheduler: FakeScheduler;
    readonly announce: Mock<(message: string) => void>;
    readonly stop: () => void;
}

const startAnnouncer = (): IStartedAnnouncer => {
    const navigationProgress = new FakeNavigationProgress();
    const scheduler = new FakeScheduler();
    const announce = vi.fn<(message: string) => void>();
    const stop = new PageLoadingAnnouncer(navigationProgress, scheduler, { announce }, "Loading page").start();

    return { navigationProgress, scheduler, announce, stop };
};

describe("Using PageLoadingAnnouncer, given a navigation has started, when it is still loading after the delay", () => {
    let started: IStartedAnnouncer;

    beforeEach(() => {
        started = startAnnouncer();
        started.navigationProgress.listener?.onStart();
        started.scheduler.runPending();
    });

    test("then it should announce that the page is loading", () => {
        expect(started.announce).toHaveBeenCalledWith("Loading page");
    });
});

describe("Using PageLoadingAnnouncer, when a navigation starts", () => {
    let started: IStartedAnnouncer;

    beforeEach(() => {
        started = startAnnouncer();
        started.navigationProgress.listener?.onStart();
    });

    test("then it should wait a second before announcing", () => {
        expect(started.scheduler.pending?.delayInMilliseconds).toBe(1000);
    });

    test("then it should not announce yet", () => {
        expect(started.announce).not.toHaveBeenCalled();
    });
});

describe("Using PageLoadingAnnouncer, given a navigation has started, when it ends before the delay", () => {
    test("then it should announce nothing", () => {
        const started = startAnnouncer();
        started.navigationProgress.listener?.onStart();

        started.navigationProgress.listener?.onEnd();
        started.scheduler.runPending();

        expect(started.announce).not.toHaveBeenCalled();
    });
});

describe("Using PageLoadingAnnouncer, given a navigation has started, when it stops", () => {
    let started: IStartedAnnouncer;

    beforeEach(() => {
        started = startAnnouncer();
        started.navigationProgress.listener?.onStart();
        started.stop();
    });

    test("then it should stop listening for navigations", () => {
        expect(started.navigationProgress.listener).toBeUndefined();
    });

    test("then it should cancel the pending announcement", () => {
        expect(started.scheduler.pending).toBeUndefined();
    });
});
