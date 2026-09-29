import type { IShowcase } from '../interfaces/IShowcase';
import { HandDrawnRule } from './HandDrawnRule.component';

export const handDrawnRuleShowcase: IShowcase = {
  name: 'HandDrawnRule',
  examples: [{ name: 'Default', render: () => <HandDrawnRule /> }],
};
