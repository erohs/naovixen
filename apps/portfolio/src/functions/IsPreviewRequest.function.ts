import { getSession } from '@tanstack/react-start/server';

import type { IPreviewSessionData } from '../interfaces/IPreviewSessionData';
import { createPreviewSessionConfig } from './CreatePreviewSessionConfig.function';

/** True only for a request carrying a preview cookie this server sealed and has not expired. */
export async function isPreviewRequest(): Promise<boolean> {
    const config = createPreviewSessionConfig();

    if (config === undefined) {
        return false;
    }

    const session = await getSession<IPreviewSessionData>(config);

    return session.data.isPreview === true;
}
