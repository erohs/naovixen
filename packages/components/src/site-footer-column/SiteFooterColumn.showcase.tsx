import type { IShowcase } from '../interfaces/IShowcase';
import { NavigationList } from '../navigation-list/NavigationList.component';
import { SiteFooterColumn } from './SiteFooterColumn.component';

export const siteFooterColumnShowcase: IShowcase = {
  name: 'SiteFooterColumn',
  examples: [
    {
      name: 'With page links',
      render: () => (
        <SiteFooterColumn heading="site">
          <NavigationList
            items={[
              { label: 'Home', path: '/' },
              { label: 'Example section', path: '/example' },
            ]}
            currentPath="/"
          />
        </SiteFooterColumn>
      ),
    },
  ],
};
