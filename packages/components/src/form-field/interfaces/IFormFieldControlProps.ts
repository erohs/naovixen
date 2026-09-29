/** Spread onto the control, so it is labelled, described and marked invalid correctly. */
export interface IFormFieldControlProps {
    readonly id: string;
    readonly 'aria-describedby': string | undefined;
    readonly 'aria-invalid': true | undefined;
}
