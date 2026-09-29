import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/formatting';

import type { ICodeBlockProps } from './interfaces/ICodeBlockProps';

/** Long lines wrap rather than scroll, so there is no scroll area to reach by keyboard. */
export const CodeBlock: FunctionComponent<ICodeBlockProps> = ({
    code,
    language,
    filename,
    className,
    ...figureProps
}) => (
    <figure {...figureProps} className={joinClassNames('nx-code-block', className)}>
        <figcaption className="nx-code-block__caption">
            {filename && <span className="nx-code-block__filename">{filename}</span>}
            <span className="nx-code-block__language">{language}</span>
        </figcaption>
        <pre className="nx-code-block__code">
            <code>{code}</code>
        </pre>
    </figure>
);
