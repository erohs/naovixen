import type { MessageKey } from "../../../types/MessageKey";

export interface IRole {
    readonly title: MessageKey;
    readonly dates: MessageKey;
    readonly summary: MessageKey;
}
