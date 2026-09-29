import { IconName } from '../../enums/IconName';
import type { IIconDrawing } from '../interfaces/IIconDrawing';

/**
 * Outlines from Lucide (ISC, and MIT for those derived from Feather: see
 * LICENSE-LUCIDE.txt), with circles and rectangles rewritten as paths. GitHub and LinkedIn
 * come from lucide-static 0.544.0, the last release with brand icons. Bluesky is from
 * Simple Icons (CC0).
 */
export const iconDrawings: Readonly<Record<IconName, IIconDrawing>> = {
  [IconName.ArrowDown]: { isFilled: false, paths: ['M12 5v14', 'm19 12-7 7-7-7'] },
  [IconName.ArrowLeft]: { isFilled: false, paths: ['m12 19-7-7 7-7', 'M19 12H5'] },
  [IconName.ArrowRight]: { isFilled: false, paths: ['M5 12h14', 'm12 5 7 7-7 7'] },
  [IconName.ArrowUp]: { isFilled: false, paths: ['m5 12 7-7 7 7', 'M12 19V5'] },
  [IconName.Bluesky]: {
    isFilled: true,
    paths: [
      'M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026',
    ],
  },
  [IconName.Close]: { isFilled: false, paths: ['M18 6 6 18', 'm6 6 12 12'] },
  [IconName.Download]: {
    isFilled: false,
    paths: ['M12 15V3', 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'm7 10 5 5 5-5'],
  },
  [IconName.ExternalLink]: {
    isFilled: false,
    paths: ['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'],
  },
  [IconName.GitHub]: {
    isFilled: false,
    paths: [
      'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
      'M9 18c-4.51 2-5-2-7-2',
    ],
  },
  [IconName.GraduationCap]: {
    isFilled: false,
    paths: [
      'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z',
      'M22 10v6',
      'M6 12.5V16a6 3 0 0 0 12 0v-3.5',
    ],
  },
  [IconName.LinkedIn]: {
    isFilled: false,
    paths: [
      'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      'M2 9h4v12H2z',
      'M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
    ],
  },
  [IconName.Mail]: {
    isFilled: false,
    paths: [
      'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7',
      'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    ],
  },
  [IconName.Menu]: { isFilled: false, paths: ['M4 5h16', 'M4 12h16', 'M4 19h16'] },
  [IconName.Moon]: {
    isFilled: false,
    paths: [
      'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
    ],
  },
  [IconName.Sun]: {
    isFilled: false,
    paths: [
      'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
      'M12 2v2',
      'M12 20v2',
      'm4.93 4.93 1.41 1.41',
      'm17.66 17.66 1.41 1.41',
      'M2 12h2',
      'M20 12h2',
      'm6.34 17.66-1.41 1.41',
      'm19.07 4.93-1.41 1.41',
    ],
  },
};
