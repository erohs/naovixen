import type { FunctionComponent } from 'react';
import { RichContent } from '@naovixen/rich-content';

import { Example } from '../../components/example/Example.component';
import { exampleRichContentBody } from '../../constants/ExampleRichContentBody.const';

export const RichContentPage: FunctionComponent = () => (
    <Example name="RichContent">
        <RichContent body={exampleRichContentBody} />
    </Example>
);
