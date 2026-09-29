import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    ButtonVariant,
    downloadIcon,
    Icon,
    LinkButton,
} from '@naovixen/components';
import { Cluster, Space } from '@naovixen/layout';

import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { RouterLinkButton } from '../router-link-button/RouterLinkButton.component';

export const AboutActions: FunctionComponent = () => (
    <Cluster gap={Space.BetweenContent}>
        <LinkButton href={placeholderCvPath} download variant={ButtonVariant.Primary}>
            Download CV <Icon source={downloadIcon} />
        </LinkButton>
        <RouterLinkButton to="/contact">
            Get in touch <Icon source={arrowRightIcon} />
        </RouterLinkButton>
    </Cluster>
);
