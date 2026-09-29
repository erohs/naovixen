import { LinkDestination } from '../../enums/LinkDestination';

/** An email address opens the mail app in place; every other profile is another site. */
export function findSocialLinkDestination(url: string): LinkDestination {
  return url.startsWith('mailto:') ? LinkDestination.Email : LinkDestination.External;
}
