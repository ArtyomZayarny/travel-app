import React from 'react';
import { InputProps } from '../../types';

export const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  autoComplete,
  minLength,
  maxLength,
  handleChange,
  min,
}) => {
  return (
    <label className="trip-popup__input input">
      <span className="input__heading">{label}</span>
      <input
        value={value}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange}
        min={min}
      />
    </label>
  );
};
