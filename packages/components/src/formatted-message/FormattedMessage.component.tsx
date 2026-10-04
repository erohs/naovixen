import type { FunctionComponent } from "react";
import { parseMessageMarkup } from "@naovixen/utilities";
import { defaultMessageElements } from "./constants/DefaultMessageElements.const";
import { renderMessageNodes } from "./functions/RenderMessageNodes.function";
import type { IFormattedMessageProps } from "./interfaces/IFormattedMessageProps";

/**
 * A translated message whose wording keeps its markup, so a translator can move the bold words or the
 * link: `"Email <email>{{address}}</email> and I'll reply"`. Only `<strong>`, `<em>` and the tags in
 * `elements` become elements, built as React nodes; no HTML is ever inserted.
 */
export const FormattedMessage: FunctionComponent<IFormattedMessageProps> = ({ message, elements }) => {
    const allElements = { ...defaultMessageElements, ...elements };

    return <>{renderMessageNodes(parseMessageMarkup(message, new Set(Object.keys(allElements))), allElements)}</>;
};
