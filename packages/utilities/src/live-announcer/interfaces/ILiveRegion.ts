/** Somewhere a screen reader is already listening, such as an element with `role="status"`. */
export interface ILiveRegion {
    write(message: string): void;
    clear(): void;
}
