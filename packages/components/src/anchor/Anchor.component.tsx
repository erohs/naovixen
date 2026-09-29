import type { FunctionComponent } from 'react';

import { DownloadAnchor } from '../download-anchor/DownloadAnchor.component';
import { EmailAnchor } from '../email-anchor/EmailAnchor.component';
import { LinkDestination } from '../enums/LinkDestination';
import { ExternalAnchor } from '../external-anchor/ExternalAnchor.component';
import { PageAnchor } from '../page-anchor/PageAnchor.component';
import type { IAnchorProps } from './interfaces/IAnchorProps';

/** Every link goes through here: pages through the router, the rest as plain anchors. */
export const Anchor: FunctionComponent<IAnchorProps> = (props) => {
  switch (props.destination ?? LinkDestination.Page) {
    case LinkDestination.Page:
      return <PageAnchor {...props} />;
    case LinkDestination.External:
      return <ExternalAnchor {...props} />;
    case LinkDestination.Download:
      return <DownloadAnchor {...props} />;
    case LinkDestination.Email:
      return <EmailAnchor {...props} />;
  }
};
