import { defaultLocale } from "@naovixen/utilities";

/** "CSS or Testing", as a post matches any one of the topics. */
export const topicListFormat = new Intl.ListFormat(defaultLocale, { type: "disjunction" });
