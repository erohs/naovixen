import type { IButtonProps } from "../../button/interfaces/IButtonProps";

export interface IHeaderMenuButtonProps extends Omit<IButtonProps, "children"> {
    readonly label: string;
}
