import type { FunctionComponent } from "react";
import { dismissOnEscape } from "../dismiss-on-escape/DismissOnEscape.function";
import { focusController } from "../focus-controller/FocusController.function";
import type { IDisclosurePanelProps } from "./interfaces/IDisclosurePanelProps";

/** Escape inside it asks to close and puts focus back on its button, which would be lost with the panel. */
export const DisclosurePanel: FunctionComponent<IDisclosurePanelProps> = ({ id, isOpen, onDismiss, children }) => {
    const listenForEscape = (panel: HTMLDivElement | null): (() => void) | undefined =>
        panel === null
            ? undefined
            : dismissOnEscape(panel, () => {
                  onDismiss();
                  focusController(panel);
              });

    return (
        <div ref={listenForEscape} id={id} hidden={!isOpen}>
            {children}
        </div>
    );
};
