import { Card } from '@naovixen/blocks';
import { Text } from '@naovixen/components';
import { Grid } from '@naovixen/layout';

import type { IShowcase } from '../../interfaces/IShowcase';

const cellNames = ['One', 'Two', 'Three', 'Four'];

export const gridShowcase: IShowcase = {
    name: 'Grid',
    examples: [
        {
            name: 'As many columns as fit',
            render: () => (
                <Grid as="ul">
                    {cellNames.map((cellName) => (
                        <li key={cellName}>
                            <Card>
                                <Text>{cellName}</Text>
                            </Card>
                        </li>
                    ))}
                </Grid>
            ),
        },
    ],
};
