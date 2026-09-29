import { describe, expect, test } from 'vitest';

import { LinkDestination } from '../../enums/LinkDestination';
import { resolveLinkDestination } from '../functions/ResolveLinkDestination.function';

describe('Using resolveLinkDestination', () => {
  describe('when the address is a full web address', () => {
    test('then it should be another site', () => {
      expect(resolveLinkDestination('https://example.com')).toBe(LinkDestination.External);
    });
  });

  describe('when the address is a path', () => {
    test('then it should be a page on this site', () => {
      expect(resolveLinkDestination('/blog/example')).toBe(LinkDestination.Page);
    });
  });

  describe('when the address is an email address', () => {
    test('then it should be handed to the mail app', () => {
      expect(resolveLinkDestination('mailto:someone@example.com')).toBe(LinkDestination.Email);
    });
  });
});
