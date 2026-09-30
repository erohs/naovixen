import type { IProjectSection } from './IProjectSection';
import type { IProjectSummary } from './IProjectSummary';

export interface IProject extends IProjectSummary {
    readonly tldr: string;
    readonly role: string;
    readonly timeline: string;
    readonly liveUrl?: string | undefined;
    readonly repositoryUrl?: string | undefined;
    /** In reading order; a page numbers them from one. */
    readonly sections: readonly IProjectSection[];
}
