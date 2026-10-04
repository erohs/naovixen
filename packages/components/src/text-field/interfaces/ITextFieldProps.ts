import type { ComponentPropsWithRef } from "react";

export interface ITextFieldProps extends Omit<ComponentPropsWithRef<"input">, "children"> {
    /** Shown above the field, and its accessible name. */
    readonly label: string;
}
