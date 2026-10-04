import { useId } from "react";
import type { FunctionComponent } from "react";
import { Button } from "../button/Button.component";
import { DisclosurePanel } from "./DisclosurePanel.component";
import type { IDisclosureProps } from "./interfaces/IDisclosureProps";

/** Controlled: it asks for changes through `onOpenChange`. Opens in the flow and traps nothing. */
export const Disclosure: FunctionComponent<IDisclosureProps> = ({
    label,
    isOpen,
    onOpenChange,
    className,
    children,
}) => {
    const panelId = useId();

    const onClick = (): void => {
        onOpenChange(!isOpen);
    };

    const onDismiss = (): void => {
        onOpenChange(false);
    };

    return (
        <div className={className}>
            <Button aria-expanded={isOpen} aria-controls={panelId} onClick={onClick}>
                {label}
            </Button>
            <DisclosurePanel id={panelId} isOpen={isOpen} onDismiss={onDismiss}>
                {children}
            </DisclosurePanel>
        </div>
    );
};
