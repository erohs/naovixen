import type { SeedBlock } from "../types/SeedBlock";

export interface ISeedProject {
    readonly slug: string;
    readonly title: string;
    /** Projects are listed from 1 upwards. */
    readonly position: number;
    readonly isFeatured: boolean;
    readonly summary: string;
    readonly stack: readonly string[];
    readonly body: readonly SeedBlock[];
}
