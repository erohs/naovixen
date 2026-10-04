export interface ProjectSummary {
    id: string;
    data: { order: number };
}

export const inOrder = <T extends ProjectSummary>(projects: readonly T[]): T[] =>
    projects.toSorted((first, second) => first.data.order - second.data.order);

/**
 * The projects either side of one, from a list in order, wrapping at both ends. With two
 * projects only "next" is offered, since "previous" would lead to the same place.
 */
export const adjacentProjects = <T extends ProjectSummary>(
    projects: readonly T[],
    id: string,
): { previous: T | undefined; next: T | undefined } => {
    const index = projects.findIndex((project) => project.id === id);
    const count = projects.length;
    return {
        previous: count >= 3 ? projects[(index - 1 + count) % count] : undefined,
        next: count >= 2 ? projects[(index + 1) % count] : undefined,
    };
};
