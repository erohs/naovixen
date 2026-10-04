import { beforeEach, describe, expect, test, vi } from "vitest";
import type { IPageChangeSource } from "../interfaces/IPageChangeSource";
import { NavigationFocuser } from "../NavigationFocuser";

class FakePageChangeSource implements IPageChangeSource {
    public readonly listeners = new Set<() => void>();

    public subscribe(listener: () => void): () => void {
        this.listeners.add(listener);

        return () => this.listeners.delete(listener);
    }

    public changePage(): void {
        this.listeners.forEach((listener) => {
            listener();
        });
    }
}

describe("Using NavigationFocuser, given it has started, when the page changes", () => {
    let focusHeading: () => void;

    beforeEach(() => {
        const pageChangeSource = new FakePageChangeSource();
        focusHeading = vi.fn();
        new NavigationFocuser(pageChangeSource, { focusHeading }).start();
        pageChangeSource.changePage();
    });

    test("then it should move focus to the new page's heading", () => {
        expect(focusHeading).toHaveBeenCalledOnce();
    });
});

describe("Using NavigationFocuser, given it has started, when it stops", () => {
    test("then it should stop listening for page changes", () => {
        const pageChangeSource = new FakePageChangeSource();
        const stop = new NavigationFocuser(pageChangeSource, { focusHeading: vi.fn() }).start();

        stop();

        expect(pageChangeSource.listeners.size).toBe(0);
    });
});
