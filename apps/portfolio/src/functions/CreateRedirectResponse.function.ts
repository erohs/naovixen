/**
 * Built by hand rather than with `Response.redirect`, whose headers are immutable: the server
 * adds the session cookie to this response after the handler returns it.
 */
export function createRedirectResponse(path: string): Response {
    return new Response(null, { status: 307, headers: { Location: path } });
}
