import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  className,
  handleClick,
}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={handleClick}>
      {text}
    </button>
  );
};
