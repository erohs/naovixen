/** The page being navigated to, as far as the announcer needs it. */
export interface IAnnouncedPage {
    readTitle(): string;
    /** Moves focus to the main content without scrolling, so scroll restoration still holds. */
    focusMainContent(): void;
}
