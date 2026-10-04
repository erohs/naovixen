import { createFileRoute } from "@tanstack/react-router";
import { clearSession } from "@tanstack/react-start/server";
import { createPreviewSessionConfig } from "../../../features/preview/functions/CreatePreviewSessionConfig.function";
import { createRedirectResponse } from "../../../features/preview/functions/CreateRedirectResponse.function";

export const Route = createFileRoute("/api/preview/disable")({
    server: {
        handlers: {
            /* eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Start */
            GET: async () => {
                const config = createPreviewSessionConfig();

                if (config !== undefined) {
                    await clearSession(config);
                }

                return createRedirectResponse("/");
            },
        },
    },
});
