import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { Disclosure } from '@naovixen/blocks';
import { Text } from '@naovixen/components';

import type { IDisclosureDemoProps } from './interfaces/IDisclosureDemoProps';

/** Disclosure leaves its state to the caller, so the demo holds it. */
export const DisclosureDemo: FunctionComponent<IDisclosureDemoProps> = ({ isInitiallyOpen }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <Disclosure label="More details" isOpen={isOpen} onOpenChange={setIsOpen}>
            <Text>The panel shows while the disclosure is open.</Text>
        </Disclosure>
    );
};
