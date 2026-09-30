import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/** A list of cards, one to a list item, in as many equal columns as fit. */
export const CardGrid: FunctionComponent<ComponentPropsWithRef<'ul'>> = ({
    className,
    ...listProps
}) => <ul {...listProps} className={joinClassNames('nv-card-grid', className)} />;
