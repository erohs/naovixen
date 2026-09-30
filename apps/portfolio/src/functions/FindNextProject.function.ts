import type { IProjectSummary } from '@naovixen/cms';

/** The project after the given one, wrapping to the first; nothing when there is no other. */
export function findNextProject(
    projects: readonly IProjectSummary[],
    slug: string,
): IProjectSummary | undefined {
    const index = projects.findIndex((project) => project.slug === slug);

    if (index === -1 || projects.length < 2) {
        return undefined;
    }

    return projects[(index + 1) % projects.length];
}
