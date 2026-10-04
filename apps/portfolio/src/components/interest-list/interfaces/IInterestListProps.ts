import type { ComponentPropsWithRef } from "react";
import type { MessageKey } from "../../../types/MessageKey";

export interface IInterestListProps extends Omit<ComponentPropsWithRef<"ul">, "children"> {
    readonly interests: readonly MessageKey[];
}
