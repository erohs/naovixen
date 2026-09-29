import { ButtonVariant } from '../enums/ButtonVariant';
import { IconName } from '../enums/IconName';
import { LinkDestination } from '../enums/LinkDestination';
import type { IShowcase } from '../interfaces/IShowcase';
import { ButtonLink } from './ButtonLink.component';

export const buttonLinkShowcase: IShowcase = {
  name: 'ButtonLink',
  examples: [
    {
      name: 'Primary, to a page',
      render: () => (
        <ButtonLink href="/" variant={ButtonVariant.Primary} icon={IconName.ArrowRight}>
          See the work
        </ButtonLink>
      ),
    },
    {
      name: 'Secondary, to another site',
      render: () => (
        <ButtonLink
          href="https://example.com"
          destination={LinkDestination.External}
          icon={IconName.ExternalLink}
        >
          Live demo
        </ButtonLink>
      ),
    },
  ],
};
