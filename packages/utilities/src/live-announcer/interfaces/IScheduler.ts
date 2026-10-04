export interface IScheduler {
    /** Runs `callback` once after `delayInMilliseconds`, and returns a function that cancels it. */
    schedule(callback: () => void, delayInMilliseconds: number): () => void;
}
