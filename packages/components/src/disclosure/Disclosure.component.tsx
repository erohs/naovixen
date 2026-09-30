import type { FunctionComponent } from 'react';
import { Button } from '../button/Button.component';

import { useDisclosure } from './functions/UseDisclosure.hook';
import type { IDisclosureProps } from './interfaces/IDisclosureProps';

/** Controlled: it asks for changes through `onOpenChange`. Opens in the flow, traps nothing. */
export const Disclosure: FunctionComponent<IDisclosureProps> = ({
    label,
    isOpen,
    onOpenChange,
    children,
    className,
    buttonClassName,
    panelClassName,
}) => {
    const { rootRef, buttonProps, panelProps } = useDisclosure(isOpen, onOpenChange);

    return (
        <div ref={rootRef} className={className}>
            <Button {...buttonProps} className={buttonClassName}>
                {label}
            </Button>
            <div {...panelProps} className={panelClassName}>
                {children}
            </div>
        </div>
    );
};
