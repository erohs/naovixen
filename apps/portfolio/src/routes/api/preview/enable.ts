import { createFileRoute } from "@tanstack/react-router";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { createPreviewSessionConfig } from "../../../features/preview/functions/CreatePreviewSessionConfig.function";
import { createRedirectResponse } from "../../../features/preview/functions/CreateRedirectResponse.function";
import { createSanityClient } from "../../../features/sanity/functions/CreateSanityClient.function";
import { startPreviewSession } from "../../../features/preview/functions/StartPreviewSession.function";
import { toLocalPath } from "../../../features/preview/functions/ToLocalPath.function";

/**
 * The Studio's preview frame opens this with a one-time secret it has just written to the
 * dataset. Only a request carrying that secret, checked with the read token, starts a preview.
 */
export const Route = createFileRoute("/api/preview/enable")({
    server: {
        handlers: {
            /* eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Start */
            GET: async ({ request }) => {
                const config = createPreviewSessionConfig();

                if (config === undefined) {
                    return new Response("Preview is not set up.", { status: 404 });
                }

                const result = await validatePreviewUrl(createSanityClient(true), request.url);

                if (!result.isValid) {
                    return new Response("This preview link is not valid.", { status: 401 });
                }

                await startPreviewSession(config);

                return createRedirectResponse(toLocalPath(result.redirectTo));
            },
        },
    },
});
