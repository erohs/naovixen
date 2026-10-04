import type { IProjectSummary } from "@naovixen/cms";

/**
 * The project before the given one, wrapping to the last. Nothing when there are fewer than three,
 * where it would be the same project as the next.
 */
export const findPreviousProject = (
    projects: readonly IProjectSummary[],
    slug: string,
): IProjectSummary | undefined => {
    const index = projects.findIndex((project) => project.slug === slug);

    if (index === -1 || projects.length < 3) {
        return undefined;
    }

    return projects[(index - 1 + projects.length) % projects.length];
};
