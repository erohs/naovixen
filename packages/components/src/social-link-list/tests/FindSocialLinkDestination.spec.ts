import { describe, expect, test } from 'vitest';

import { LinkDestination } from '../../enums/LinkDestination';
import { findSocialLinkDestination } from '../functions/FindSocialLinkDestination.function';

describe('Using findSocialLinkDestination', () => {
  describe('when the link is an email address', () => {
    test('then it should be an email link', () => {
      expect(findSocialLinkDestination('mailto:hello@example.com')).toBe(LinkDestination.Email);
    });
  });

  describe('when the link is a web address', () => {
    test('then it should be an external link', () => {
      expect(findSocialLinkDestination('https://example.com')).toBe(LinkDestination.External);
    });
  });
});
