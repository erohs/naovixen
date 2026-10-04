import type { ITopic } from "@naovixen/cms";

export interface ITopicOptionProps {
    readonly topic: ITopic;
    readonly isSelected: boolean;
    readonly onToggle: (topic: string) => void;
}
