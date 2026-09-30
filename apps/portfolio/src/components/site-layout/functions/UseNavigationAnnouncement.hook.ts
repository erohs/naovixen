import { useState, useSyncExternalStore } from 'react';
import { useRouter } from '@tanstack/react-router';

import { DocumentAnnouncedPage } from '../../../services/document-announced-page/DocumentAnnouncedPage';
import { NavigationAnnouncer } from '../../../services/navigation-announcer/NavigationAnnouncer';
import { RouterPageChangeSource } from '../../../services/router-page-change-source/RouterPageChangeSource';

function getNoAnnouncement(): string {
    return '';
}

/** What the live region should say after the latest client-side navigation. */
export function useNavigationAnnouncement(): string {
    const router = useRouter();
    const [announcer] = useState(
        () =>
            new NavigationAnnouncer(
                new RouterPageChangeSource(router),
                new DocumentAnnouncedPage(),
            ),
    );

    return useSyncExternalStore(announcer.subscribe, announcer.getState, getNoAnnouncement);
}
