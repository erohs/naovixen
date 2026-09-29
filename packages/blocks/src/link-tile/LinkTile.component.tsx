import type { FunctionComponent } from 'react';

import { Anchor } from '../anchor/Anchor.component';
import { LinkDestination } from '../enums/LinkDestination';
import { Icon } from '../icon/Icon.component';
import { trailingIconByDestination } from './constants/TrailingIconByDestination.const';
import type { ILinkTileProps } from './interfaces/ILinkTileProps';

/** A whole row that is one link, named by its label and detail. */
export const LinkTile: FunctionComponent<ILinkTileProps> = ({
  href,
  destination = LinkDestination.Page,
  label,
  detail,
  icon,
}) => (
  <Anchor href={href} destination={destination} className="nx-link-tile">
    <span className="nx-link-tile__disc">
      <Icon name={icon} />
    </span>
    <span className="nx-link-tile__text">
      <span className="nx-link-tile__label">{label}</span>{' '}
      <span className="nx-link-tile__detail">{detail}</span>
    </span>
    <span className="nx-link-tile__trailing">
      <Icon name={trailingIconByDestination[destination]} />
    </span>
  </Anchor>
);
