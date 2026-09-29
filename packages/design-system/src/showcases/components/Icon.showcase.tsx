import {
    arrowDownIcon,
    arrowLeftIcon,
    arrowRightIcon,
    arrowUpIcon,
    blueskyIcon,
    closeIcon,
    downloadIcon,
    externalLinkIcon,
    gitHubIcon,
    graduationCapIcon,
    Icon,
    linkedInIcon,
    mailIcon,
    menuIcon,
    moonIcon,
    sunIcon,
} from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

const iconsByName = {
    arrowDownIcon,
    arrowLeftIcon,
    arrowRightIcon,
    arrowUpIcon,
    blueskyIcon,
    closeIcon,
    downloadIcon,
    externalLinkIcon,
    gitHubIcon,
    graduationCapIcon,
    linkedInIcon,
    mailIcon,
    menuIcon,
    moonIcon,
    sunIcon,
};

export const iconShowcase: IShowcase = {
    name: 'Icon',
    examples: Object.entries(iconsByName).map(([name, source]) => ({
        name,
        render: () => <Icon source={source} />,
    })),
};
