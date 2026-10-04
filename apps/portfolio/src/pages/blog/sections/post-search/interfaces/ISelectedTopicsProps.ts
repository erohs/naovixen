export interface ISelectedTopicsProps {
    readonly topics: readonly string[];
    readonly onRemove: (topic: string) => void;
}
