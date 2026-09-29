import { IconName } from '../../enums/IconName';
import { LinkDestination } from '../../enums/LinkDestination';

/** The trailing icon says where the link goes. */
export const trailingIconByDestination: Record<LinkDestination, IconName> = {
  [LinkDestination.Page]: IconName.ArrowRight,
  [LinkDestination.External]: IconName.ExternalLink,
  [LinkDestination.Download]: IconName.Download,
  [LinkDestination.Email]: IconName.ArrowRight,
};
