import type { AnyRouter } from '@tanstack/react-router';

import type { IPageChangeSource } from '../navigation-announcer/interfaces/IPageChangeSource';

/** `fromLocation` is missing on the first load, which has nothing to announce. */
export class RouterPageChangeSource implements IPageChangeSource {
    private readonly _router: Pick<AnyRouter, 'subscribe'>;

    public constructor(router: Pick<AnyRouter, 'subscribe'>) {
        this._router = router;
    }

    public subscribe(listener: () => void): () => void {
        return this._router.subscribe('onRendered', (event) => {
            if (event.fromLocation !== undefined && event.pathChanged) {
                listener();
            }
        });
    }
}
