import type { FunctionComponent } from "react";
import { useState } from "react";
import { Button, LiveRegion, timeoutScheduler } from "@naovixen/components";
import { LiveAnnouncer } from "@naovixen/utilities";
import { translate } from "../../translate/Translate.const";

export const LiveRegionDemo: FunctionComponent = () => {
    const [announcer] = useState(() => new LiveAnnouncer(timeoutScheduler));

    const onClick = (): void => {
        announcer.announce(translate("content.liveRegionMessage"));
    };

    return (
        <>
            <Button onClick={onClick}>{translate("content.liveRegionButton")}</Button>
            <LiveRegion announcer={announcer} />
        </>
    );
};
