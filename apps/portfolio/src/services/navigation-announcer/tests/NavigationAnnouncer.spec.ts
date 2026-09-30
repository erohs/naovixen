import { beforeEach, describe, expect, test, vi } from 'vitest';

import type { IAnnouncedPage } from '../interfaces/IAnnouncedPage';
import type { IPageChangeSource } from '../interfaces/IPageChangeSource';
import { NavigationAnnouncer } from '../NavigationAnnouncer';

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

function createAnnouncer(
    pageChangeSource: IPageChangeSource,
    focusMainContent: () => void,
): NavigationAnnouncer {
    const page: IAnnouncedPage = { readTitle: () => 'About — Naomi Shore', focusMainContent };

    return new NavigationAnnouncer(pageChangeSource, page);
}

describe('Using NavigationAnnouncer, when it is first read', () => {
    test('then it should have nothing to announce', () => {
        const announcer = createAnnouncer(new FakePageChangeSource(), vi.fn());

        expect(announcer.getState()).toBe('');
    });
});

describe('Using NavigationAnnouncer, given a subscriber, when the page changes', () => {
    let focusMainContent: () => void;
    let listener: () => void;
    let announcer: NavigationAnnouncer;

    beforeEach(() => {
        const pageChangeSource = new FakePageChangeSource();
        focusMainContent = vi.fn();
        listener = vi.fn();
        announcer = createAnnouncer(pageChangeSource, focusMainContent);
        announcer.subscribe(listener);
        pageChangeSource.changePage();
    });

    test('then it should announce the new page title', () => {
        expect(announcer.getState()).toBe('About — Naomi Shore');
    });

    test('then it should move focus to the main content', () => {
        expect(focusMainContent).toHaveBeenCalledOnce();
    });

    test('then it should tell the subscriber', () => {
        expect(listener).toHaveBeenCalledOnce();
    });
});

describe('Using NavigationAnnouncer, given a subscriber, when the subscriber stops listening', () => {
    test('then it should stop listening for page changes', () => {
        const pageChangeSource = new FakePageChangeSource();
        const announcer = createAnnouncer(pageChangeSource, vi.fn());
        const listener = vi.fn();
        announcer.subscribe(listener);

        announcer.subscribe(listener)();

        expect(pageChangeSource.listeners.size).toBe(0);
    });
});
