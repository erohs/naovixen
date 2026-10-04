import type { FunctionComponent } from "react";
import { Footer } from "@naovixen/components";
import type { ISiteFooterProps } from "./interfaces/ISiteFooterProps";
import { SmallPrint } from "./SmallPrint.component";

export const SiteFooter: FunctionComponent<ISiteFooterProps> = ({ year }) => (
    <Footer smallPrint={<SmallPrint year={year} />} />
);
