import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';
import { NavigationType } from '../../types';
import { ProfNav } from './ProfNav/ProfNav';

export const NavigationItem: React.FC<NavigationType> = ({
  type,
  title,
  iconSrc,
  subItems,
}) => {
  const renderNavigationItem = (type: string) => {
    switch (type) {
      case 'link':
        return (
          <li className="nav-header__item" title={title}>
            <Link to={Routes.bookings} className="nav-header__inner">
              <span className="visually-hidden">{title}</span>
              {iconSrc && <img src={iconSrc} alt=" icon" />}
            </Link>
          </li>
        );
      case 'node':
        return (
          <li className="nav-header__item" title={title}>
            <div
              className="nav-header__inner profile-nav__wrapper"
              tabIndex={0}
            >
              <span className="visually-hidden">{title}</span>
              <img src={iconSrc} alt="profile icon" />
              {subItems && <ProfNav items={subItems} />}
            </div>
          </li>
        );
      default:
        return null;
    }
  };
  return <>{renderNavigationItem(type)}</>;
};
