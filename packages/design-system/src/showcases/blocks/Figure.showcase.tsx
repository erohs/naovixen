import { Figure, FigureShape } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

/** A plain grey rectangle, so the showcase needs no image file. */
const placeholderSource =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3Crect width="4" height="3" fill="%23ccc"/%3E%3C/svg%3E';

export const figureShowcase: IShowcase = {
    name: 'Figure',
    examples: [
        {
            name: 'Wide, with a caption',
            render: () => (
                <Figure
                    image={{
                        src: placeholderSource,
                        alt: 'A grey placeholder',
                        width: 1600,
                        height: 900,
                    }}
                    caption="A caption sits under the image."
                />
            ),
        },
        {
            name: 'Portrait',
            render: () => (
                <Figure
                    image={{
                        src: placeholderSource,
                        alt: 'A grey placeholder',
                        width: 800,
                        height: 1000,
                    }}
                    shape={FigureShape.Portrait}
                />
            ),
        },
    ],
};
