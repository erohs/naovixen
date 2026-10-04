import type { ComponentPropsWithRef } from "react";
import type { LiveAnnouncer } from "@naovixen/utilities";
import type { LiveRegionRole } from "../enums/LiveRegionRole";

export interface ILiveRegionProps extends Omit<ComponentPropsWithRef<"div">, "children" | "role"> {
    /** What reads through this region. Call its `announce` to say something. */
    readonly announcer: LiveAnnouncer;
    /** Defaults to a polite status. */
    readonly role?: LiveRegionRole | undefined;
}
