import type { AnyRouter } from "@tanstack/react-router";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { RouterNavigationProgress } from "../RouterNavigationProgress";

interface INavigationEvent {
    readonly fromLocation?: object;
    readonly pathChanged: boolean;
}

interface ISubscribedRouter {
    readonly emit: (eventType: string, event: INavigationEvent) => void;
    readonly onStart: () => void;
    readonly onEnd: () => void;
}

const subscribeToFakeRouter = (): ISubscribedRouter => {
    const listeners = new Map<string, (event: INavigationEvent) => void>();
    const router = {
        subscribe: (eventType: string, listener: (event: INavigationEvent) => void) => {
            listeners.set(eventType, listener);

            return () => listeners.delete(eventType);
        },
    } as unknown as Pick<AnyRouter, "subscribe">;
    const onStart = vi.fn();
    const onEnd = vi.fn();
    new RouterNavigationProgress(router).subscribe({ onStart, onEnd });

    return { emit: (eventType, event) => listeners.get(eventType)?.(event), onStart, onEnd };
};

describe("Using RouterNavigationProgress, when the first page starts loading", () => {
    test("then it should not report a navigation", () => {
        const subscribed = subscribeToFakeRouter();

        subscribed.emit("onBeforeLoad", { pathChanged: true });

        expect(subscribed.onStart).not.toHaveBeenCalled();
    });
});

describe("Using RouterNavigationProgress, when a navigation to another path starts loading", () => {
    test("then it should report the start", () => {
        const subscribed = subscribeToFakeRouter();

        subscribed.emit("onBeforeLoad", { fromLocation: {}, pathChanged: true });

        expect(subscribed.onStart).toHaveBeenCalledOnce();
    });
});

describe("Using RouterNavigationProgress, when a navigation that only changes the hash starts loading", () => {
    test("then it should not report a navigation", () => {
        const subscribed = subscribeToFakeRouter();

        subscribed.emit("onBeforeLoad", { fromLocation: {}, pathChanged: false });

        expect(subscribed.onStart).not.toHaveBeenCalled();
    });
});

describe("Using RouterNavigationProgress, when a navigation resolves", () => {
    let subscribed: ISubscribedRouter;

    beforeEach(() => {
        subscribed = subscribeToFakeRouter();
        subscribed.emit("onResolved", { fromLocation: {}, pathChanged: true });
    });

    test("then it should report the end", () => {
        expect(subscribed.onEnd).toHaveBeenCalledOnce();
    });
});
