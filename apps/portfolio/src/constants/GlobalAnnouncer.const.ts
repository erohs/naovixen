import { timeoutScheduler } from "@naovixen/components";
import { LiveAnnouncer } from "@naovixen/utilities";

/** Speaks through the one polite live region in the site layout, for messages about the whole page. */
export const globalAnnouncer = new LiveAnnouncer(timeoutScheduler);
