import type { IHeaderProps } from "./IHeaderProps";

export interface IHeaderMenuPanelProps extends Pick<IHeaderProps, "items" | "currentHref" | "menuFooter"> {
    readonly id: string;
}
