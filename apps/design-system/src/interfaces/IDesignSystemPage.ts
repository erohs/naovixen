import type { FunctionComponent } from 'react';

export interface IDesignSystemPage {
    /** The page's fragment, such as `tokens`. */
    readonly id: string;
    readonly title: string;
    readonly component: FunctionComponent;
}
