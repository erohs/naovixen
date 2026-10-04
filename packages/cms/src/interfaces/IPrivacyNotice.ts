import type { BodyNode } from "../types/BodyNode";

export interface IPrivacyNotice {
    readonly title: string;
    /** The opening summary, also given to search engines. */
    readonly intro: string;
    /** ISO 8601 date of the last change a reader should know about. */
    readonly lastUpdated: string;
    readonly body: readonly BodyNode[];
}
