import { Code, Link } from "@naovixen/components";
import type { IRichContentMarks } from "../interfaces/IRichContentMarks";

export const richContentMarks: IRichContentMarks = {
    code: ({ children }) => <Code>{children}</Code>,
    link: ({ value, children }) => (value ? <Link href={value.href}>{children}</Link> : children),
};
