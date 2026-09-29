import { classNamePrefix } from '../constants/ClassNamePrefix.const';

export function buildBlockClassName(blockName: string): string {
  return `${classNamePrefix}${blockName}`;
}
