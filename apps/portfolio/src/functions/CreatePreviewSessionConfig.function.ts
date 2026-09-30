import type { SessionConfig } from '@tanstack/react-start/server';

/** An hour: long enough to review a draft, short enough that a forgotten preview lapses. */
const previewLengthInSeconds = 60 * 60;

/**
 * `undefined` unless both the cookie secret and the read token are configured, which turns
 * preview off rather than failing.
 * `SameSite=None` and partitioned, so the cookie reaches the site inside the Studio's preview
 * frame, and only there.
 */
export function createPreviewSessionConfig(): SessionConfig | undefined {
    const password = process.env.PREVIEW_SESSION_SECRET;
    const token = process.env.SANITY_API_READ_TOKEN;

    if (password === undefined || password === '' || token === undefined || token === '') {
        return undefined;
    }

    return {
        password,
        name: 'nv-preview',
        maxAge: previewLengthInSeconds,
        sessionHeader: false,
        cookie: { httpOnly: true, secure: true, sameSite: 'none', partitioned: true, path: '/' },
    };
}
