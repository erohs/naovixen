import type { IImage } from './IImage';

export interface IProjectSummary {
    readonly slug: string;
    readonly title: string;
    readonly summary: string;
    readonly stack: readonly string[];
    readonly isFeatured: boolean;
    readonly screenshot?: IImage | undefined;
}
