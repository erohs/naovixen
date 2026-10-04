import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { CheckboxProps } from "./types/CheckboxProps";

/** A checkbox wrapped in its label, so the whole label is a target for the pointer. */
export const Checkbox: FunctionComponent<CheckboxProps> = ({ className, children, ...inputProps }) => (
    <label className={joinClassNames("nv-checkbox", className)}>
        <input {...inputProps} type="checkbox" className="nv-checkbox__input" />
        <span>{children}</span>
    </label>
);
