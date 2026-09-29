export interface IBlogPostingStructuredData {
    readonly '@context': string;
    readonly '@type': 'BlogPosting';
    readonly headline: string;
    readonly description: string;
    readonly datePublished: string;
    readonly url: string;
    readonly inLanguage: string;
    readonly keywords: readonly string[];
    readonly author: {
        readonly '@type': 'Person';
        readonly name: string;
        readonly url: string;
    };
}
