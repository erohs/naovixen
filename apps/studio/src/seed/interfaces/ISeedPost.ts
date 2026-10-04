import type { SeedBlock } from "../types/SeedBlock";

export interface ISeedPost {
    readonly slug: string;
    readonly title: string;
    readonly excerpt: string;
    /** An ISO date, such as 2026-09-18. */
    readonly publishedAt: string;
    /** Tag titles. A tag is created for each one the first time it appears. */
    readonly tags: readonly string[];
    readonly body: readonly SeedBlock[];
}
