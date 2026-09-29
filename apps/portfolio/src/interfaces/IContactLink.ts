export interface IContactLink {
    readonly label: string;
    /** Shown under the label, such as a handle. */
    readonly detail: string;
    readonly url: string;
    /** An icon source, such as `gitHubIcon`. */
    readonly icon: string;
}
