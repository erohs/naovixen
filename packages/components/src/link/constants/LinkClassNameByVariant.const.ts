import { LinkVariant } from '../enums/LinkVariant';

export const linkClassNameByVariant: Readonly<Record<LinkVariant, string | undefined>> = {
    [LinkVariant.Content]: 'nv-link',
    [LinkVariant.Standalone]: 'nv-link nv-link--standalone',
    [LinkVariant.Navigation]: 'nv-link nv-link--navigation',
    [LinkVariant.Unstyled]: undefined,
};
