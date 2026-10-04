import type { IFocusablePage } from "./interfaces/IFocusablePage";
import type { IPageChangeSource } from "./interfaces/IPageChangeSource";

/**
 * After each client-side navigation, moves focus to the new page's heading. A screen reader reads it,
 * and the next Tab starts from the new page rather than from the link that led there.
 */
export class NavigationFocuser {
    private readonly _pageChangeSource: IPageChangeSource;
    private readonly _page: IFocusablePage;

    public constructor(pageChangeSource: IPageChangeSource, page: IFocusablePage) {
        this._pageChangeSource = pageChangeSource;
        this._page = page;
    }

    /** Returns a function that stops. */
    public readonly start = (): (() => void) =>
        this._pageChangeSource.subscribe(() => {
            this._page.focusHeading();
        });
}
