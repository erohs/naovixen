import type { SeedBlock } from "../types/SeedBlock";

export interface ISeedPrivacyNotice {
    readonly title: string;
    readonly intro: string;
    /** An ISO date, such as 2026-10-04. */
    readonly lastUpdated: string;
    readonly body: readonly SeedBlock[];
}
