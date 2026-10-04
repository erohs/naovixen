import type { ComponentPropsWithRef, ReactNode } from "react";

export type CheckboxProps = Omit<ComponentPropsWithRef<"input">, "type" | "children"> & {
    /** The label beside the box. */
    readonly children: ReactNode;
};
