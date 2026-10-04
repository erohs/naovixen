import type { FunctionComponent, SyntheticEvent } from "react";
import type { ISearchFormProps } from "./interfaces/ISearchFormProps";
import { SearchFields } from "./SearchFields.component";
import { SearchSummary } from "./SearchSummary.component";
import { SelectedTopics } from "./SelectedTopics.component";

/** Without JavaScript, Enter sends the words to the same address, which searches on the server. */
export const SearchForm: FunctionComponent<ISearchFormProps> = ({ controller, state, criteria, result, topics }) => {
    const onSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        controller.searchNow();
    };

    return (
        <form method="get" action="/blog" onSubmit={onSubmit} className="nv-post-search__form">
            <SearchFields
                state={state}
                topics={topics}
                onQueryChange={controller.setQuery}
                onToggleTopic={controller.toggleTopic}
            />
            {state.topics.length > 0 && <SelectedTopics topics={state.topics} onRemove={controller.toggleTopic} />}
            <SearchSummary
                criteria={criteria}
                result={result}
                canClear={state.query !== "" || state.topics.length > 0}
                onClear={controller.clear}
            />
        </form>
    );
};
