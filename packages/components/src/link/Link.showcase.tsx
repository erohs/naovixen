import { IconName } from '../enums/IconName';
import { LinkDestination } from '../enums/LinkDestination';
import type { IShowcase } from '../interfaces/IShowcase';
import { Link } from './Link.component';

export const linkShowcase: IShowcase = {
  name: 'Link',
  examples: [
    { name: 'Page', render: () => <Link href="/">Home</Link> },
    {
      name: 'Current page',
      render: () => (
        <Link href="/" isCurrent>
          Home
        </Link>
      ),
    },
    {
      name: 'With a trailing arrow',
      render: () => (
        <Link href="/" trailingIcon={IconName.ArrowRight}>
          All projects
        </Link>
      ),
    },
    {
      name: 'With a leading arrow',
      render: () => (
        <Link href="/" leadingIcon={IconName.ArrowLeft}>
          Back
        </Link>
      ),
    },
    {
      name: 'Another site',
      render: () => (
        <Link href="https://example.com" destination={LinkDestination.External}>
          Example
        </Link>
      ),
    },
  ],
};
