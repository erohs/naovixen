import type { ILiveRegion } from "@naovixen/utilities";

export class ElementLiveRegion implements ILiveRegion {
    private readonly _element: HTMLElement;

    public constructor(element: HTMLElement) {
        this._element = element;
    }

    public write(message: string): void {
        this._element.textContent = message;
    }

    public clear(): void {
        this._element.textContent = "";
    }
}
