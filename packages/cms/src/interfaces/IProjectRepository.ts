import type { IProject } from './IProject';
import type { IProjectSummary } from './IProjectSummary';

export interface IProjectRepository {
    /** In the order Naomi set. */
    listProjects(): Promise<readonly IProjectSummary[]>;
    /** Resolves to `undefined` when no project has the slug, so a route can 404. */
    getProjectBySlug(slug: string): Promise<IProject | undefined>;
}
