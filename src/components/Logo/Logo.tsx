import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => (
  <Link to="/" className="header__logo">
    Travel App
  </Link>
);
