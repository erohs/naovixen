import type { ChangeEvent, FunctionComponent } from "react";
import { TextField } from "@naovixen/components";
import { translate } from "../../../../translate/Translate.const";
import { searchFieldName } from "./constants/SearchFieldName.const";
import type { ISearchFieldsProps } from "./interfaces/ISearchFieldsProps";
import { TopicFilter } from "./TopicFilter.component";

/** With no topics yet, there is nothing to filter by, so only the search field shows. */
export const SearchFields: FunctionComponent<ISearchFieldsProps> = ({
    state,
    topics,
    onQueryChange,
    onToggleTopic,
}) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onQueryChange(event.target.value);
    };

    return (
        <div className="nv-post-search__fields">
            <TextField
                label={translate("blog.search")}
                type="search"
                name={searchFieldName}
                value={state.query}
                onChange={onChange}
                autoComplete="off"
                className="nv-post-search__query"
            />
            {topics.length > 0 && <TopicFilter topics={topics} selected={state.topics} onToggle={onToggleTopic} />}
        </div>
    );
};
