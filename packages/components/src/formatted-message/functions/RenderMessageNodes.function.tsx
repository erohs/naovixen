import { Fragment } from "react";
import type { ReactNode } from "react";
import type { MessageNode } from "@naovixen/utilities";
import type { MessageElements } from "../types/MessageElements";

export const renderMessageNodes = (nodes: readonly MessageNode[], elements: MessageElements): ReactNode[] =>
    nodes.map((node, index) =>
        typeof node === "string" ? (
            node
        ) : (
            // eslint-disable-next-line @eslint-react/no-array-index-key -- a message's parts never reorder
            <Fragment key={index}>{elements[node.tag]?.(renderMessageNodes(node.children, elements))}</Fragment>
        ),
    );
