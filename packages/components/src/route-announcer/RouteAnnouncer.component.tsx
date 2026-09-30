import type { FunctionComponent } from 'react';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';

import type { IRouteAnnouncerProps } from './interfaces/IRouteAnnouncerProps';

/**
 * A polite live region. Render it from the first paint with an empty message: screen readers
 * only announce changes to a region that already exists.
 */
export const RouteAnnouncer: FunctionComponent<IRouteAnnouncerProps> = ({ message }) => (
    <VisuallyHidden role="status" aria-atomic="true">
        {message}
    </VisuallyHidden>
);
