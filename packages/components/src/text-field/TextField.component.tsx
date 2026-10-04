import { useId } from "react";
import type { FunctionComponent } from "react";
import { joinClassNames } from "@naovixen/utilities";
import type { ITextFieldProps } from "./interfaces/ITextFieldProps";

/** A labelled text input, such as a search box. The input takes every other prop, `type` included. */
export const TextField: FunctionComponent<ITextFieldProps> = ({ label, id, className, ...inputProps }) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <div className={joinClassNames("nv-text-field", className)}>
            <label htmlFor={inputId} className="nv-text-field__label">
                {label}
            </label>
            <input {...inputProps} id={inputId} className="nv-text-field__input" />
        </div>
    );
};
