import type { IImage } from './IImage';

export interface IProject {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly tldr: string;
  readonly problem: string;
  readonly role: string;
  readonly timeline: string;
  readonly tags: readonly string[];
  readonly stack: readonly string[];
  readonly screenshot?: IImage;
}
