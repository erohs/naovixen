import type { ITopic } from "@naovixen/cms";

export interface ITopicFilterProps {
    readonly topics: readonly ITopic[];
    readonly selected: readonly string[];
    readonly onToggle: (topic: string) => void;
}
