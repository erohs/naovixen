import type { PortableNode } from "./PortableNode";
import type { SeedBlock } from "./SeedBlock";

/** One converter for each kind of fixture block, so a new kind cannot be added without one. */
export type SeedBlockConverters = {
    readonly [Type in SeedBlock["type"]]: (
        block: Extract<SeedBlock, { type: Type }>,
        key: string,
    ) => readonly PortableNode[];
};
