import type { FunctionComponent } from "react";
import { translate } from "../../../../translate/Translate.const";
import type { ITopicFilterProps } from "./interfaces/ITopicFilterProps";
import { TopicOption } from "./TopicOption.component";

export const TopicOptions: FunctionComponent<ITopicFilterProps> = ({ topics, selected, onToggle }) => (
    <fieldset className="nv-post-search__topic-panel">
        <legend className="nv-post-search__hint">{translate("blog.topicsHint")}</legend>
        <ul className="nv-post-search__topic-options">
            {topics.map((topic) => (
                <li key={topic.title}>
                    <TopicOption topic={topic} isSelected={selected.includes(topic.title)} onToggle={onToggle} />
                </li>
            ))}
        </ul>
    </fieldset>
);
