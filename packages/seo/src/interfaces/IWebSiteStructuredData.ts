export interface IWebSiteStructuredData {
    readonly '@context': string;
    readonly '@type': 'WebSite';
    readonly name: string;
    readonly url: string;
    readonly inLanguage: string;
}
