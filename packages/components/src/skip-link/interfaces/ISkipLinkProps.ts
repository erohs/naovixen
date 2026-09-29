export interface ISkipLinkProps {
  /** The id of the element to jump to, usually the page's `<main>`, without the `#`. */
  readonly targetId: string;
  readonly label?: string | undefined;
}
