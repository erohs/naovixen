import { seedBlockConverters } from "../constants/SeedBlockConverters.const";
import type { PortableNode } from "../types/PortableNode";
import type { SeedBlock } from "../types/SeedBlock";

/** Keys follow each block's place, so seeding the same fixture twice writes the same body. */
export const toBody = (blocks: readonly SeedBlock[]): readonly PortableNode[] =>
    blocks.flatMap((block, index) => {
        const convert = seedBlockConverters[block.type] as (block: SeedBlock, key: string) => readonly PortableNode[];

        return convert(block, `b${String(index)}`);
    });
