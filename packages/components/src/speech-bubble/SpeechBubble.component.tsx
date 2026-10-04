import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { SpeechBubbleProps } from "./types/SpeechBubbleProps";

/** The tail is drawn by the stylesheet, so it never reaches the accessibility tree. */
export const SpeechBubble: FunctionComponent<SpeechBubbleProps> = ({ className, children, ...paragraphProps }) => (
    <p {...paragraphProps} className={joinClassNames("nv-speech-bubble", className)}>
        {children}
    </p>
);
