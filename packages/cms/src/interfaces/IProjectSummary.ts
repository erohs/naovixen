import type { IImage } from './IImage';

export interface IProjectSummary {
    readonly slug: string;
    readonly title: string;
    readonly summary: string;
    readonly tags: readonly string[];
    readonly isFeatured: boolean;
    readonly screenshot?: IImage | undefined;
}
