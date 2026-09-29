import type { FunctionComponent } from 'react';
import { arrowDownIcon, ButtonVariant, downloadIcon, Icon, LinkButton } from '@naovixen/components';
import { Cluster, Space } from '@naovixen/layout';

import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';

/** "See my work" points at the experience until Phase 7 brings the projects back. */
export const HeroActions: FunctionComponent = () => (
    <Cluster gap={Space.BetweenContent}>
        <LinkButton href="#experience" variant={ButtonVariant.Primary}>
            See my work <Icon source={arrowDownIcon} />
        </LinkButton>
        <LinkButton href={placeholderCvPath} download>
            Download CV <span className="nx-hero-actions__file-type">PDF</span>
            <Icon source={downloadIcon} />
        </LinkButton>
    </Cluster>
);
