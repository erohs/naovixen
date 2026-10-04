import type { FunctionComponent } from "react";
import type { IDesignSystemPageProps } from "./IDesignSystemPageProps";

export interface IDesignSystemPage {
    /** The page's fragment, such as `tokens`. */
    readonly id: string;
    readonly title: string;
    readonly component: FunctionComponent<IDesignSystemPageProps>;
}
