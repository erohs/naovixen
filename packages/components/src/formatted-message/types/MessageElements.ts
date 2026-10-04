import type { ReactNode } from "react";

/** How each tag a message may use is rendered, by tag name: `{ email: (children) => <Link …>{children}</Link> }`. */
export type MessageElements = Readonly<Record<string, (children: ReactNode) => ReactNode>>;
