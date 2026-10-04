import type { ILinkButtonProps } from "../interfaces/ILinkButtonProps";

export type SkipLinkProps = Omit<ILinkButtonProps, "variant" | "onClick">;
