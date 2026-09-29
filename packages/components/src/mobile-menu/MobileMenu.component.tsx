import type { FunctionComponent } from 'react';
import { useId } from 'react';

import { ButtonVariant } from '../enums/ButtonVariant';
import { IconName } from '../enums/IconName';
import { buildButtonClassName } from '../functions/BuildButtonClassName.function';
import { Icon } from '../icon/Icon.component';
import type { INavigationListProps } from '../navigation-list/interfaces/INavigationListProps';
import { SiteNavigation } from '../site-navigation/SiteNavigation.component';
import { useMobileMenu } from './functions/UseMobileMenu.hook';

/** A disclosure, not a dialog: the menu opens in the page flow and traps nothing. */
export const MobileMenu: FunctionComponent<INavigationListProps> = ({ items, currentPath }) => {
  const { isOpen, toggle, rootRef, buttonRef } = useMobileMenu(currentPath);
  const menuId = useId();

  return (
    <div ref={rootRef} className="nx-mobile-menu">
      <button
        ref={buttonRef}
        type="button"
        className={buildButtonClassName(ButtonVariant.Secondary)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={toggle}
      >
        <Icon name={isOpen ? IconName.Close : IconName.Menu} />
        Menu
      </button>
      <div id={menuId} className="nx-mobile-menu__menu" hidden={!isOpen}>
        <SiteNavigation items={items} currentPath={currentPath} isStacked />
      </div>
    </div>
  );
};
