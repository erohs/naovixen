import type { ReactNode } from "react";

export interface IDisclosurePanelProps {
    readonly id: string;
    readonly isOpen: boolean;
    /** Called when Escape is pressed with focus inside the panel. */
    readonly onDismiss: () => void;
    readonly children: ReactNode;
}
