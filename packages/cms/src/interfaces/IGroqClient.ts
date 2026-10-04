/** The one method the repositories call. A `SanityClient` satisfies it. */
export interface IGroqClient {
    fetch<Result>(query: string, params: Readonly<Record<string, string | readonly string[]>>): Promise<Result>;
}
