import type {
    PortableTextReactComponents,
    PortableTextTypeComponentProps,
} from '@portabletext/react';
import { Callout, CodeBlock, Figure } from '@naovixen/blocks';
import { Text } from '@naovixen/components';

import type { ICalloutBlockValue } from '../interfaces/ICalloutBlockValue';
import type { ICodeBlockValue } from '../interfaces/ICodeBlockValue';
import type { IFigureBlockValue } from '../interfaces/IFigureBlockValue';

export const blogContentTypes: PortableTextReactComponents['types'] = {
    callout: ({ value }: PortableTextTypeComponentProps<ICalloutBlockValue>) => (
        <Callout kind={value.kind} heading={value.title}>
            <Text>{value.text}</Text>
        </Callout>
    ),
    code: ({ value }: PortableTextTypeComponentProps<ICodeBlockValue>) => (
        <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    ),
    figure: ({ value }: PortableTextTypeComponentProps<IFigureBlockValue>) => (
        <Figure image={value.image} caption={value.caption} shape={value.shape} />
    ),
};
