export interface IPersonStructuredData {
    readonly '@context': string;
    readonly '@type': 'Person';
    readonly name: string;
    readonly jobTitle: string;
    readonly url: string;
    readonly sameAs: readonly string[];
}
