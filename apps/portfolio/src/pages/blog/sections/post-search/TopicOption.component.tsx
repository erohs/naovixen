import type { FunctionComponent } from "react";
import { Checkbox, FormattedMessage } from "@naovixen/components";
import { translate } from "../../../../translate/Translate.const";
import type { ITopicOptionProps } from "./interfaces/ITopicOptionProps";

export const TopicOption: FunctionComponent<ITopicOptionProps> = ({ topic, isSelected, onToggle }) => {
    const onChange = (): void => {
        onToggle(topic.title);
    };

    return (
        <Checkbox name="topics" value={topic.title} checked={isSelected} onChange={onChange}>
            <FormattedMessage
                message={translate("blog.topicOption", { topic: topic.title, postCount: topic.postCount })}
                elements={{ count: (children) => <span className="nv-post-search__topic-count">{children}</span> }}
            />
        </Checkbox>
    );
};
