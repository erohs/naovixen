import { useEffect, useState, useSyncExternalStore } from "react";
import type { FunctionComponent } from "react";
import { timeoutScheduler } from "@naovixen/components";
import type { IBlogPageProps } from "../../interfaces/IBlogPageProps";
import { PostSearchController } from "../../post-search-controller/PostSearchController";
import { SearchForm } from "./SearchForm.component";

/** Searches as it changes, and takes up whatever the address says once a search lands. */
export const PostSearch: FunctionComponent<IBlogPageProps> = ({ criteria, result, topics, onSearch }) => {
    const [controller] = useState(() => new PostSearchController(onSearch, timeoutScheduler, criteria));
    const state = useSyncExternalStore(controller.subscribe, controller.getState, controller.getState);

    useEffect(() => {
        controller.sync(criteria);
    }, [controller, criteria]);

    return (
        <search>
            <SearchForm controller={controller} state={state} criteria={criteria} result={result} topics={topics} />
        </search>
    );
};
