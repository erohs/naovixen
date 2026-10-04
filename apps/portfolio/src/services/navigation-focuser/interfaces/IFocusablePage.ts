export interface IFocusablePage {
    /** Moves focus to the page's main heading without scrolling, so scroll restoration still holds. */
    focusHeading(): void;
}
