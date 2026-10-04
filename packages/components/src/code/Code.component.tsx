import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { CodeProps } from "./types/CodeProps";

/** Code inside a sentence. For a block of code, see CodeBlock. */
export const Code: FunctionComponent<CodeProps> = ({ className, children, ...codeProps }) => (
    <code {...codeProps} className={joinClassNames("nv-code", className)}>
        {children}
    </code>
);
