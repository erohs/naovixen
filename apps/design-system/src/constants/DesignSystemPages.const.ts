import type { IDesignSystemPage } from '../interfaces/IDesignSystemPage';
import { BlocksPage } from '../pages/blocks/BlocksPage.component';
import { RichContentPage } from '../pages/rich-content/RichContentPage.component';
import { ComponentsPage } from '../pages/components/ComponentsPage.component';
import { TokensPage } from '../pages/tokens/TokensPage.component';

/** In reading order: the tokens everything is built from, then what is built from them. */
export const designSystemPages: readonly IDesignSystemPage[] = [
    { id: 'tokens', title: 'Tokens', component: TokensPage },
    { id: 'components', title: 'Components', component: ComponentsPage },
    { id: 'blocks', title: 'Blocks', component: BlocksPage },
    { id: 'rich-content', title: 'Rich content', component: RichContentPage },
];
