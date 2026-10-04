export interface IPageChangeSource {
    /**
     * Calls the listener once a client-side navigation to another page has rendered. Never on
     * the first load, nor when only the hash or query changes. Returns a function that stops.
     */
    subscribe(listener: () => void): () => void;
}
