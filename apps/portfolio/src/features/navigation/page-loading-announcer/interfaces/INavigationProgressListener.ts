export interface INavigationProgressListener {
    /** A client-side navigation to another page has begun. Never on the first load. */
    onStart(): void;
    /** The latest navigation has finished, whether or not it was to another page. */
    onEnd(): void;
}
