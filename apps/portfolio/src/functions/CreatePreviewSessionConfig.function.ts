import type { SessionConfig } from '@tanstack/react-start/server';

/** An hour: long enough to review a draft, short enough that a forgotten preview lapses. */
const previewLengthInSeconds = 60 * 60;

/**
 * `undefined` when no secret is configured, which turns preview off rather than failing.
 * `SameSite=None` so the cookie also reaches the site inside the Studio's preview frame.
 */
export function createPreviewSessionConfig(): SessionConfig | undefined {
    const password = process.env.PREVIEW_SESSION_SECRET;

    if (password === undefined || password === '') {
        return undefined;
    }

    return {
        password,
        name: 'nv-preview',
        maxAge: previewLengthInSeconds,
        sessionHeader: false,
        cookie: { httpOnly: true, secure: true, sameSite: 'none', path: '/' },
    };
}
