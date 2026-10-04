import type { ILinkButtonProps } from "../interfaces/ILinkButtonProps";

export type BackToTopProps = Omit<ILinkButtonProps, "variant" | "children" | "onClick" | "ref">;
