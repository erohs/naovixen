import type { MessageElements } from "../types/MessageElements";

export const defaultMessageElements: MessageElements = {
    strong: (children) => <strong>{children}</strong>,
    em: (children) => <em>{children}</em>,
};
