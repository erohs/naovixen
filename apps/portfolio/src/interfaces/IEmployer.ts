import type { IRole } from './IRole';

export interface IEmployer {
    readonly name: string;
    readonly place: string;
    readonly description: string;
    readonly dates: string;
    /** Newest first. */
    readonly roles: readonly IRole[];
}
