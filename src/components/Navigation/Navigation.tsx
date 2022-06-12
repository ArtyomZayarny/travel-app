import React from 'react';
import { navigationList } from '../../constants';
import { NavigationItem } from './NavigationItem';

export const Navigation: React.FC = () => {
  return (
    <nav className="header__nav">
      <ul className="nav-header__list">
        {navigationList.map((item) => (
          <NavigationItem
            type={item.type}
            title={item.title}
            iconSrc={item.iconSrc}
            subItems={item.subItems}
          />
        ))}
      </ul>
    </nav>
  );
};
