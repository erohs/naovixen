import { useState } from 'react';

/**
 * Open state that belongs to one path. It remembers the path it was opened on rather than a
 * flag, so following a link changes the path and closes it without an effect.
 */
export function useOpenOnPath(currentPath: string): [boolean, (isOpen: boolean) => void] {
    const [openedOnPath, setOpenedOnPath] = useState<string | undefined>(undefined);

    const onOpenChange = (isOpen: boolean): void => {
        setOpenedOnPath(isOpen ? currentPath : undefined);
    };

    return [openedOnPath === currentPath, onOpenChange];
}
