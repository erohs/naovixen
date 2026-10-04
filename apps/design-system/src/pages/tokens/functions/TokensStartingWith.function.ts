import { sharedTokens } from "@naovixen/theming";

export const tokensStartingWith = (prefix: string): string[] =>
    Object.keys(sharedTokens).filter((name) => name.startsWith(prefix));
