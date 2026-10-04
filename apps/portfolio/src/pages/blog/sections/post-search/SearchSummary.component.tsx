import { useEffect, useRef, useState } from "react";
import type { FunctionComponent } from "react";
import { LiveRegion, Text, TextVariant, timeoutScheduler } from "@naovixen/components";
import { LiveAnnouncer } from "@naovixen/utilities";
import { ClearFilters } from "./ClearFilters.component";
import { describeResults } from "./functions/DescribeResults.function";
import type { ISearchSummaryProps } from "./interfaces/ISearchSummaryProps";

/** Each new set of results is read out once it arrives; the first, already on the page, is not. */
export const SearchSummary: FunctionComponent<ISearchSummaryProps> = ({ criteria, result, canClear, onClear }) => {
    const [announcer] = useState(() => new LiveAnnouncer(timeoutScheduler));
    const message = describeResults(result, criteria);
    const announcedMessageRef = useRef(message);

    useEffect(() => {
        if (message !== announcedMessageRef.current) {
            announcedMessageRef.current = message;
            announcer.announce(message);
        }
    }, [announcer, message]);

    return (
        <div className="nv-post-search__summary">
            <Text variant={TextVariant.Meta}>{message}</Text>
            {canClear && <ClearFilters onClear={onClear} />}
            <LiveRegion announcer={announcer} />
        </div>
    );
};
