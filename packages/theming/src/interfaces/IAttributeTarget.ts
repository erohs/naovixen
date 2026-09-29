/** An element whose attributes can be set. `document.documentElement` satisfies it. */
export interface IAttributeTarget {
    setAttribute(name: string, value: string): void;
}
