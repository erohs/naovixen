import type { IProject, IProjectRepository, IProjectSummary } from '@naovixen/cms';

import { getProjectBySlugOnServer } from './constants/GetProjectBySlugOnServer.const';
import { listProjectsOnServer } from './constants/ListProjectsOnServer.const';

/** Reads through server functions, like ServerFunctionBlogRepository. */
export class ServerFunctionProjectRepository implements IProjectRepository {
    public listProjects(): Promise<readonly IProjectSummary[]> {
        return listProjectsOnServer();
    }

    public getProjectBySlug(slug: string): Promise<IProject | undefined> {
        return getProjectBySlugOnServer({ data: slug });
    }
}
