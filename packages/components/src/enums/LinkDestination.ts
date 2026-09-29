export enum LinkDestination {
  /** A page on this site, followed through the router. */
  Page = 'page',
  /** Another site, opened in a new tab. */
  External = 'external',
  /** A file to save, such as a CV. */
  Download = 'download',
  /** A `mailto:` address, handed to the mail app in place. */
  Email = 'email',
}
