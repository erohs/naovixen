export interface IIconDrawing {
  /** Path data on a 24 by 24 grid. */
  readonly paths: readonly string[];
  /** Logos are filled shapes; everything else is a 2-unit outline. */
  readonly isFilled: boolean;
}
