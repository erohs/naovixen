import type { MessageElements } from "../types/MessageElements";

export interface IFormattedMessageProps {
    /** A translated message, already interpolated. */
    readonly message: string;
    /** Tags beyond `<strong>` and `<em>` that the message may use. */
    readonly elements?: MessageElements | undefined;
}
