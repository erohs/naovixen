import type { MessageKey } from "../../../types/MessageKey";

export interface IExperienceEntry {
    readonly title: MessageKey;
    readonly organisation: MessageKey;
    readonly dates: MessageKey;
    readonly note: MessageKey;
    /** Marks the entry with this icon instead of a plain dot, as the degree has its cap. */
    readonly icon?: string;
}
