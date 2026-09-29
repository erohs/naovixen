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

describe('Using NavigationAnnouncer', () => {
    let pageChangeSource: FakePageChangeSource;
    let focusMainContent: () => void;
    let announcer: NavigationAnnouncer;

    beforeEach(() => {
        pageChangeSource = new FakePageChangeSource();
        focusMainContent = vi.fn();
        const page: IAnnouncedPage = { readTitle: () => 'About — Naomi Shore', focusMainContent };
        announcer = new NavigationAnnouncer(pageChangeSource, page);
    });

    describe('when it is first read', () => {
        test('then it should have nothing to announce', () => {
            expect(announcer.getState()).toBe('');
        });
    });

    describe('given a subscriber', () => {
        let listener: () => void;

        beforeEach(() => {
            listener = vi.fn();
            announcer.subscribe(listener);
        });

        describe('when the page changes', () => {
            beforeEach(() => {
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

        describe('and the subscriber stops listening', () => {
            test('then it should stop listening for page changes', () => {
                announcer.subscribe(listener)();

                expect(pageChangeSource.listeners.size).toBe(0);
            });
        });
    });
});
