import React from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation';
import { isForbiddenRoutes } from './helpers';

export const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        {!isForbiddenRoutes(location.pathname) && <Navigation />}
      </div>
    </header>
  );
};
