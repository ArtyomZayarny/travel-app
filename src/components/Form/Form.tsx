import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../constants';
import { FormType } from '../../types';
import { Button } from '../Button';
import { Input } from './Input';

export const Form: React.FC<FormType> = ({ type }) => {
  return (
    <>
      <form className="sign-up-form" autoComplete="off">
        <h2 className="sign-up-form__title">{type}</h2>
        {type === 'Sign Up' && (
          <Input type="text" label="Full name" name="fullName" />
        )}
        <Input type="email" label="Email" name="email" />
        <Input
          type="password"
          label="Password"
          name="password"
          autoComplete="new-password"
          minLength={3}
          maxLength={20}
        />
        <Button type="submit" text={type} />
      </form>
      <span>
        Already have an account?
        <NavLink
          to={type === 'Sign Up' ? Routes.signIn : Routes.signUp}
          className="sign-up-form__link"
        >
          {type === 'Sign Up' ? 'Sign In' : 'Sign Up'}
        </NavLink>
      </span>
    </>
  );
};
