/** Reads the request's cookies on the server and `document.cookie` in the browser. */
export interface ICookieStore {
    read(name: string): string | undefined;
    /** The implementation chooses the lifetime, path and SameSite policy. */
    write(name: string, value: string): void;
}
