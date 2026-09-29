import type { ISocialLink } from './ISocialLink';

export interface IPerson {
    readonly name: string;
    readonly jobTitle: string;
    readonly socialLinks: readonly ISocialLink[];
}
