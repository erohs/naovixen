import type { IProject, IProjectSummary } from "@naovixen/cms";

export interface IProjectPageData {
    readonly project: IProject;
    /** Offered as the previous read, wrapping round to the last. Missing with fewer than three. */
    readonly previousProject: IProjectSummary | undefined;
    /** Offered as the next read, wrapping round to the first. Missing when it is the only one. */
    readonly nextProject: IProjectSummary | undefined;
}
