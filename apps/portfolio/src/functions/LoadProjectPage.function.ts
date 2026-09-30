import { notFound } from '@tanstack/react-router';
import type { IProjectRepository } from '@naovixen/cms';

import type { IProjectPageData } from '../interfaces/IProjectPageData';
import { findNextProject } from './FindNextProject.function';

/** Throws the router's not-found for an unknown slug, which renders the 404 with a 404 status. */
export async function loadProjectPage(
    projectRepository: IProjectRepository,
    slug: string,
): Promise<IProjectPageData> {
    const [project, projects] = await Promise.all([
        projectRepository.getProjectBySlug(slug),
        projectRepository.listProjects(),
    ]);

    if (project === undefined) {
        /* eslint-disable-next-line @typescript-eslint/only-throw-error -- the router's own signal */
        throw notFound();
    }

    return { project, nextProject: findNextProject(projects, slug) };
}
