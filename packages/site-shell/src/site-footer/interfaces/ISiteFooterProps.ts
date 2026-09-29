import type { ISiteFooterDirectoryProps } from '../../site-footer-directory/interfaces/ISiteFooterDirectoryProps';
import type { ISiteFooterLegalProps } from '../../site-footer-legal/interfaces/ISiteFooterLegalProps';

export interface ISiteFooterProps extends ISiteFooterDirectoryProps, ISiteFooterLegalProps {
    readonly className?: string | undefined;
}
