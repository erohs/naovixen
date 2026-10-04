import type { MessageNode } from "../types/MessageNode";

export interface IMessageElement {
    readonly tag: string;
    readonly children: readonly MessageNode[];
}
