import type { FunctionComponent, MouseEvent } from "react";
import { Button, ButtonVariant, closeIcon, FormattedMessage, VisuallyHidden } from "@naovixen/components";
import { translate } from "../../../../translate/Translate.const";
import { focusNextChip } from "./functions/FocusNextChip.function";
import type { ISelectedTopicsProps } from "./interfaces/ISelectedTopicsProps";

/** Each chip's name starts with its topic, as shown, so voice control can say what it sees. */
export const SelectedTopics: FunctionComponent<ISelectedTopicsProps> = ({ topics, onRemove }) => {
    const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
        focusNextChip(event.currentTarget);
        onRemove(event.currentTarget.value);
    };

    return (
        <ul aria-label={translate("blog.selectedTopics")} className="nv-post-search__chips">
            {topics.map((topic) => (
                <li key={topic}>
                    <Button variant={ButtonVariant.Chip} value={topic} onClick={onClick}>
                        <FormattedMessage
                            message={translate("blog.removeTopic", { topic })}
                            elements={{ hidden: (children) => <VisuallyHidden>{children}</VisuallyHidden> }}
                        />
                        <Button.Icon source={closeIcon} />
                    </Button>
                </li>
            ))}
        </ul>
    );
};
