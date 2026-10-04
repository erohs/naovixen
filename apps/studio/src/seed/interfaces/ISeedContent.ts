import type { ISeedPost } from "./ISeedPost";
import type { ISeedPrivacyNotice } from "./ISeedPrivacyNotice";
import type { ISeedProject } from "./ISeedProject";

/** The fixture file's shape. See `seed/content.example.json`. */
export interface ISeedContent {
    readonly posts: readonly ISeedPost[];
    readonly projects: readonly ISeedProject[];
    readonly privacyNotice: ISeedPrivacyNotice;
}
