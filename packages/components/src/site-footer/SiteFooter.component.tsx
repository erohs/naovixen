import type { FunctionComponent } from 'react';

import { NavigationList } from '../navigation-list/NavigationList.component';
import { SiteFooterColumn } from '../site-footer-column/SiteFooterColumn.component';
import { SiteFooterLegal } from '../site-footer-legal/SiteFooterLegal.component';
import { SocialLinkList } from '../social-link-list/SocialLinkList.component';
import { Wordmark } from '../wordmark/Wordmark.component';
import type { ISiteFooterProps } from './interfaces/ISiteFooterProps';

export const SiteFooter: FunctionComponent<ISiteFooterProps> = (props) => (
  <footer className="nx-site-footer">
    {props.mascot && (
      <div className="nx-site-footer__mascot" aria-hidden="true">
        {props.mascot}
      </div>
    )}
    <div className="nx-container nx-stack nx-site-footer__content">
      <div className="nx-grid">
        <div className="nx-stack">
          <Wordmark />
          <p className="nx-site-footer__blurb">{props.blurb}</p>
        </div>
        <SiteFooterColumn heading="site">
          <NavigationList items={props.navigationItems} currentPath={props.currentPath} />
        </SiteFooterColumn>
        <SiteFooterColumn heading="elsewhere">
          <SocialLinkList links={props.socialLinks} />
        </SiteFooterColumn>
      </div>
      <SiteFooterLegal {...props} />
    </div>
  </footer>
);
