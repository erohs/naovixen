export interface ICodeBlockProps {
  readonly code: string;
  /** Shown as written, such as "TypeScript". */
  readonly language: string;
  readonly filename?: string | undefined;
}
