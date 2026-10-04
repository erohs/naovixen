import type { CSSProperties } from "react";

/** A token's own value, applied to one property, for a specimen that shows what it does. */
export const specimenStyle = (property: string, token: string): CSSProperties => ({ [property]: `var(${token})` });
