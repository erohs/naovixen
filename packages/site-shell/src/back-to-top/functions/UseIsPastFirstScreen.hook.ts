import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void): () => void {
    window.addEventListener('scroll', onChange, { passive: true });
    window.addEventListener('resize', onChange);

    return () => {
        window.removeEventListener('scroll', onChange);
        window.removeEventListener('resize', onChange);
    };
}

function isPastFirstScreen(): boolean {
    return window.scrollY >= window.innerHeight;
}

function isAtTopOnTheServer(): boolean {
    return false;
}

/** True once the page has scrolled a full screen's height down. The server assumes the top. */
export function useIsPastFirstScreen(): boolean {
    return useSyncExternalStore(subscribe, isPastFirstScreen, isAtTopOnTheServer);
}
