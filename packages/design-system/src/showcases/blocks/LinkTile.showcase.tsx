import { IconName } from '../enums/IconName';
import { LinkDestination } from '../enums/LinkDestination';
import type { IShowcase } from '../interfaces/IShowcase';
import { LinkTile } from './LinkTile.component';

export const linkTileShowcase: IShowcase = {
  name: 'LinkTile',
  examples: [
    {
      name: 'To a page',
      render: () => (
        <LinkTile href="/" label="Example page" detail="example.com" icon={IconName.Mail} />
      ),
    },
    {
      name: 'To another site',
      render: () => (
        <LinkTile
          href="https://example.com"
          destination={LinkDestination.External}
          label="Example site"
          detail="example.com/example-handle"
          icon={IconName.GitHub}
        />
      ),
    },
    {
      name: 'To a file',
      render: () => (
        <LinkTile
          href="/example.pdf"
          destination={LinkDestination.Download}
          label="Example file"
          detail="PDF"
          icon={IconName.Download}
        />
      ),
    },
  ],
};
