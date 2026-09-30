/** Renders as CodeBlock. */
export interface ICodeBlock {
    readonly _type: 'code';
    readonly _key: string;
    readonly code: string;
    /** Shown as written, such as "TypeScript". */
    readonly language: string;
    readonly filename?: string | undefined;
}
