import type { INavigationProgressListener } from "./INavigationProgressListener";

export interface INavigationProgress {
    /** Returns a function that stops listening. */
    subscribe(listener: INavigationProgressListener): () => void;
}
