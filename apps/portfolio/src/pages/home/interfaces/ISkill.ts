import type { MessageKey } from "../../../types/MessageKey";

export interface ISkill {
    readonly name: MessageKey;
    /** An icon source for the tool's logo, such as `typeScriptIcon`. */
    readonly logo: string;
}
