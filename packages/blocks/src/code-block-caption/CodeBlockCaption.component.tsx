import type { FunctionComponent } from 'react';

import type { ICodeBlockCaptionProps } from './interfaces/ICodeBlockCaptionProps';

/** The space keeps the filename and language apart when the caption names the code region. */
export const CodeBlockCaption: FunctionComponent<ICodeBlockCaptionProps> = ({
    id,
    language,
    filename,
}) => (
    <figcaption id={id} className="nx-code-block__caption">
        {filename && (
            <>
                <span className="nx-code-block__filename">{filename}</span>{' '}
            </>
        )}
        <span className="nx-code-block__language">{language}</span>
    </figcaption>
);
