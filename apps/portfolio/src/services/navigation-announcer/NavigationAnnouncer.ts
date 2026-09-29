import type { IAnnouncedPage } from './interfaces/IAnnouncedPage';
import type { IPageChangeSource } from './interfaces/IPageChangeSource';

/**
 * After each client-side navigation, moves focus to the new page's main content and sets the
 * message to its title, for a live region to read out. Listens only while it has subscribers.
 */
export class NavigationAnnouncer {
    private readonly _pageChangeSource: IPageChangeSource;
    private readonly _page: IAnnouncedPage;
    private readonly _listeners = new Set<() => void>();
    private _stopListeningToPageChanges: (() => void) | undefined;
    private _message = '';

    public constructor(pageChangeSource: IPageChangeSource, page: IAnnouncedPage) {
        this._pageChangeSource = pageChangeSource;
        this._page = page;
    }

    public readonly getState = (): string => this._message;

    public readonly subscribe = (listener: () => void): (() => void) => {
        this._listeners.add(listener);
        this._stopListeningToPageChanges ??= this._pageChangeSource.subscribe(this._onPageChange);

        return () => {
            this._removeListener(listener);
        };
    };

    private readonly _onPageChange = (): void => {
        this._page.focusMainContent();
        this._message = this._page.readTitle();
        this._listeners.forEach((listener) => {
            listener();
        });
    };

    private _removeListener(listener: () => void): void {
        this._listeners.delete(listener);

        if (this._listeners.size === 0) {
            this._stopListeningToPageChanges?.();
            this._stopListeningToPageChanges = undefined;
        }
    }
}
