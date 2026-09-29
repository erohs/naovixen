import { isNotFound, rootRouteId } from '@tanstack/react-router';

interface IRenderedMatch {
    readonly routeId: string;
    readonly error: unknown;
}

/**
 * An unknown path matches nothing below the root. A loader's `notFound()` is caught by the
 * root's not-found boundary and recorded as that match's error.
 */
export function isNotFoundPage(matches: readonly IRenderedMatch[]): boolean {
    const hasMatchedNothing = matches.every((match) => match.routeId === rootRouteId);

    return hasMatchedNothing || matches.some((match) => isNotFound(match.error));
}
