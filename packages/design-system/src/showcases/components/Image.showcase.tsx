import { Image } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

/** A plain grey rectangle, so the showcase needs no image file. */
const placeholderSource =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"%3E%3Crect width="16" height="9" fill="%23ccc"/%3E%3C/svg%3E';

export const imageShowcase: IShowcase = {
    name: 'Image',
    examples: [
        {
            name: 'Wide',
            render: () => (
                <Image src={placeholderSource} alt="A grey placeholder" width={1600} height={900} />
            ),
        },
    ],
};
