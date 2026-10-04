import { useId, useState } from "react";
import type { FunctionComponent } from "react";
import { arrowDownIcon, Button, Disclosure } from "@naovixen/components";
import { translate } from "../../../../translate/Translate.const";
import { describeSelectedTopics } from "./functions/DescribeSelectedTopics.function";
import type { ITopicFilterProps } from "./interfaces/ITopicFilterProps";
import { TopicOptions } from "./TopicOptions.component";

/** Opens in the flow beneath its button, and closes on Escape with focus back on the button. */
export const TopicFilter: FunctionComponent<ITopicFilterProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelId = useId();
    const label = (
        <>
            {describeSelectedTopics(props.selected)} <Button.Icon source={arrowDownIcon} />
        </>
    );

    return (
        <div role="group" aria-labelledby={labelId} className="nv-post-search__topics">
            <span id={labelId} className="nv-post-search__label">
                {translate("blog.topics")}
            </span>
            <Disclosure label={label} isOpen={isOpen} onOpenChange={setIsOpen}>
                <TopicOptions {...props} />
            </Disclosure>
        </div>
    );
};
