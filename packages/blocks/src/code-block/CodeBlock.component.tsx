import { useId } from 'react';
import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { CodeBlockCaption } from '../code-block-caption/CodeBlockCaption.component';
import type { ICodeBlockProps } from './interfaces/ICodeBlockProps';

/** Long lines scroll sideways. The code is a focusable region, so a keyboard can scroll it. */
export const CodeBlock: FunctionComponent<ICodeBlockProps> = ({
    code,
    language,
    filename,
    className,
    ...figureProps
}) => {
    const captionId = useId();

    return (
        <figure {...figureProps} className={joinClassNames('nx-code-block', className)}>
            <CodeBlockCaption id={captionId} language={language} filename={filename} />
            <pre
                className="nx-code-block__code"
                role="region"
                aria-labelledby={captionId}
                tabIndex={0}
            >
                <code>{code}</code>
            </pre>
        </figure>
    );
};
