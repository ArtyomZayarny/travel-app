import React from 'react';

type ProfNavItemProps = {
  children: string | React.ReactNode;
};
export const ProfNavItem: React.FC<ProfNavItemProps> = ({ children }) => {
  return <li className="profile-nav__item">{children}</li>;
};
