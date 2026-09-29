import { SpeechBubble } from '@naovixen/blocks';
import { MotionLines } from '@naovixen/brand';
import { Cluster } from '@naovixen/layout';

import type { IShowcase } from '../../interfaces/IShowcase';

export const motionLinesShowcase: IShowcase = {
    name: 'MotionLines',
    examples: [
        { name: 'Default', render: () => <MotionLines /> },
        {
            name: 'Beside a speech bubble',
            render: () => (
                <Cluster>
                    <SpeechBubble>say hello!</SpeechBubble>
                    <MotionLines />
                </Cluster>
            ),
        },
    ],
};
