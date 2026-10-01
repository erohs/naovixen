import { useCallback, useState } from 'react';

/**
 * Open state that belongs to one path: following a link changes the path and closes it. The path
 * it was opened on is forgotten as soon as the path changes, during render rather than in an
 * effect, so coming back to that path later does not open it again.
 */
export function useOpenOnPath(currentPath: string): [boolean, (isOpen: boolean) => void] {
    const [openedOnPath, setOpenedOnPath] = useState<string | undefined>(undefined);

    if (openedOnPath !== undefined && openedOnPath !== currentPath) {
        setOpenedOnPath(undefined);
    }

    const onOpenChange = useCallback(
        (isOpen: boolean): void => {
            setOpenedOnPath(isOpen ? currentPath : undefined);
        },
        [currentPath],
    );

    return [openedOnPath === currentPath, onOpenChange];
}
