import type { IAnnouncedPage } from '../navigation-announcer/interfaces/IAnnouncedPage';

/** Browser only. The main content is the element with `id="main"`, which the skip link targets. */
export class DocumentAnnouncedPage implements IAnnouncedPage {
    public readTitle(): string {
        return document.title;
    }

    public focusMainContent(): void {
        document.getElementById('main')?.focus({ preventScroll: true });
    }
}
