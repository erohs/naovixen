import type { ImageUrlBuilder } from '@sanity/image-url';

import type {
    ProjectBySlugQueryResult,
    ProjectSummariesQueryResult,
} from '../generated/SanityTypes';
import type { IGroqClient } from '../interfaces/IGroqClient';
import type { IProject } from '../interfaces/IProject';
import type { IProjectRepository } from '../interfaces/IProjectRepository';
import type { IProjectSummary } from '../interfaces/IProjectSummary';
import { projectBySlugQuery } from './constants/ProjectBySlugQuery.const';
import { projectSummariesQuery } from './constants/ProjectSummariesQuery.const';
import { toProject } from './functions/ToProject.function';
import { toProjectSummary } from './functions/ToProjectSummary.function';

export class SanityProjectRepository implements IProjectRepository {
    private readonly _client: IGroqClient;
    private readonly _imageUrls: ImageUrlBuilder;

    public constructor(client: IGroqClient, imageUrls: ImageUrlBuilder) {
        this._client = client;
        this._imageUrls = imageUrls;
    }

    public async listProjects(): Promise<readonly IProjectSummary[]> {
        const projects = await this._client.fetch<ProjectSummariesQueryResult>(
            projectSummariesQuery,
            {},
        );

        return projects.map((project) => toProjectSummary(project, this._imageUrls));
    }

    public async getProjectBySlug(slug: string): Promise<IProject | undefined> {
        const project = await this._client.fetch<ProjectBySlugQueryResult>(projectBySlugQuery, {
            slug,
        });

        return project === null ? undefined : toProject(project, this._imageUrls);
    }
}
