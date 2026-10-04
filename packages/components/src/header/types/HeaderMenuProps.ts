import type { IHeaderProps } from "../interfaces/IHeaderProps";

export type HeaderMenuProps = Pick<IHeaderProps, "items" | "currentHref" | "menuFooter">;
