import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../constants';
import { UserNav } from '../../../types';
import { ProfNavItem } from './ProfNavItem';

type ProfNavProps = {
  items: UserNav[];
};
export const ProfNav: React.FC<ProfNavProps> = ({ items }) => {
  const renderProfNavList = (item: UserNav) => {
    switch (item.type) {
      case 'text':
        return <ProfNavItem>{item.value}</ProfNavItem>;
      case 'button':
        return (
          <ProfNavItem>
            <Link to={Routes.signIn} className="profile-nav__button button">
              {item.value}
            </Link>
          </ProfNavItem>
        );
      default:
        return null;
    }
  };
  return (
    <ul className="profile-nav__list">
      {items.map((item) => renderProfNavList(item))}
    </ul>
  );
};
