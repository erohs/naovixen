import type { ICookieStore } from '@naovixen/theming';

import { cookieLifetimeInSeconds } from './constants/CookieLifetimeInSeconds.const';

/** Browser only. Holds preferences, nothing sensitive, so it needs no `Secure` or `HttpOnly`. */
export class DocumentCookieStore implements ICookieStore {
    public read(name: string): string | undefined {
        const prefix = `${name}=`;
        const cookie = document.cookie.split('; ').find((entry) => entry.startsWith(prefix));

        return cookie === undefined ? undefined : decodeURIComponent(cookie.slice(prefix.length));
    }

    public write(name: string, value: string): void {
        const attributes = `path=/; max-age=${String(cookieLifetimeInSeconds)}; SameSite=Lax`;

        document.cookie = `${name}=${encodeURIComponent(value)}; ${attributes}`;
    }
}
