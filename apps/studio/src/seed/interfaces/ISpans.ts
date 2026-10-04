import type { PortableNode } from "../types/PortableNode";

export interface ISpans {
    readonly children: readonly PortableNode[];
    readonly markDefs: readonly PortableNode[];
}
