export interface ISite {
  readonly name: string;
  /** Scheme and host, such as `https://example.com`. */
  readonly origin: string;
  /** BCP 47, such as `en-GB`. */
  readonly locale: string;
}
