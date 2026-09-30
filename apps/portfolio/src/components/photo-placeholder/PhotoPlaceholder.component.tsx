import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { IPhotoPlaceholderProps } from './interfaces/IPhotoPlaceholderProps';

/**
 * Stands in for a portrait until there is one. Drawn with CSS rather than an image file, so its
 * stripes follow the theme.
 */
export const PhotoPlaceholder: FunctionComponent<IPhotoPlaceholderProps> = ({
    description,
    className,
}) => (
    <div
        role="img"
        aria-label={description}
        className={joinClassNames('nx-photo-placeholder', className)}
    >
        <span className="nx-photo-placeholder__label" aria-hidden="true">
            Photo
        </span>
    </div>
);
