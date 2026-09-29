import { IconName } from '../enums/IconName';
import type { IShowcase } from '../interfaces/IShowcase';
import { Icon } from './Icon.component';

export const iconShowcase: IShowcase = {
  name: 'Icon',
  examples: Object.values(IconName).map((name) => ({
    name,
    render: () => <Icon name={name} />,
  })),
};
