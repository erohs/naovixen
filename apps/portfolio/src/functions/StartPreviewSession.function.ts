import { useSession } from '@tanstack/react-start/server';
import type { SessionConfig } from '@tanstack/react-start/server';

import type { IPreviewSessionData } from '../interfaces/IPreviewSessionData';

export async function startPreviewSession(config: SessionConfig): Promise<void> {
    const session = await useSession<IPreviewSessionData>(config);

    await session.update({ isPreview: true });
}
