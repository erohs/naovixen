import { useCallback } from "react";
import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import { LiveRegionRole } from "./enums/LiveRegionRole";
import { ElementLiveRegion } from "./ElementLiveRegion";
import type { ILiveRegionProps } from "./interfaces/ILiveRegionProps";

/**
 * Where an announcer's messages are read from, hidden from sight. Render it beside the thing it speaks
 * for, from the first paint and empty: screen readers only hear changes to a region they already know.
 * Inside a modal dialog it must be inside the dialog, as everything outside is inert. The ref callback
 * is stable, so a re-render never reconnects the region and drops a pending message.
 */
export const LiveRegion: FunctionComponent<ILiveRegionProps> = ({
    announcer,
    role = LiveRegionRole.Status,
    className,
    ...divProps
}) => {
    const connect = useCallback(
        (element: HTMLDivElement | null) =>
            element === null ? undefined : announcer.connect(new ElementLiveRegion(element)),
        [announcer],
    );

    return <div {...divProps} ref={connect} role={role} className={joinClassNames("nv-visually-hidden", className)} />;
};
