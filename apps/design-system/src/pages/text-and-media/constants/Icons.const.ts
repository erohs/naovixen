import * as components from "@naovixen/components";

/** Every icon the package exports, so a new one appears here without being listed. */
export const icons = Object.entries(components).flatMap(([name, source]) =>
    name.endsWith("Icon") && typeof source === "string" ? [{ name, source }] : [],
);
