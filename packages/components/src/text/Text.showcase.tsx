import type { IShowcase } from '../interfaces/IShowcase';
import { TextVariant } from './enums/TextVariant';
import { Text } from './Text.component';

export const textShowcase: IShowcase = {
  name: 'Text',
  examples: [
    {
      name: 'Lead',
      render: () => <Text variant={TextVariant.Lead}>An example opening paragraph.</Text>,
    },
    { name: 'Body', render: () => <Text>An example paragraph of body copy.</Text> },
    {
      name: 'Small',
      render: () => <Text variant={TextVariant.Small}>An example caption.</Text>,
    },
    {
      name: 'Meta, inline',
      render: () => (
        <Text variant={TextVariant.Meta} as="span">
          1 January 2026
        </Text>
      ),
    },
  ],
};
