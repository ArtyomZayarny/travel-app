import React from 'react';
import { NavLink } from 'react-router-dom';
import heartIcon from '../../assets/heart.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from
        <NavLink
          className="footer__link"
          to={{ pathname: 'https://binary-studio.com' }}
          target="_blank"
        >
          binary studio
        </NavLink>{' '}
        with
        <img className="footer__icon" src={heartIcon} alt="heart icon" />
      </span>
    </footer>
  );
};
