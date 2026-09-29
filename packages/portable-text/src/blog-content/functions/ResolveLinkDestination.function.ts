import { LinkDestination } from '../../enums/LinkDestination';

const webAddress = /^https?:\/\//i;
const emailAddress = /^mailto:/i;

/** Full web addresses open another site, `mailto:` the mail app, and paths this site. */
export function resolveLinkDestination(href: string): LinkDestination {
  if (emailAddress.test(href)) {
    return LinkDestination.Email;
  }

  return webAddress.test(href) ? LinkDestination.External : LinkDestination.Page;
}
