import React, { useCallback, useEffect, useState } from 'react';
import { ITrip } from '../../types';
import { Button } from '../Button';
import { Input } from '../Form/Input';

type ModalProps = {
  handleCloseModal: () => void;
  trip: ITrip;
};
export const Modal: React.FC<ModalProps> = ({ handleCloseModal, trip }) => {
  const [price, setPrice] = useState<number>(trip.price);
  const [guests, setGuests] = useState<number>(1);
  const [date, setDate] = useState<string>('');

  const handleChangePrice = useCallback((e: any) => {
    const value = e.target.value;
    if (parseInt(value) !== 0 && parseInt(value) <= 10) {
      setGuests(parseInt(value));
    }
    return null;
  }, []);

  const handleChangeDate = (e: any) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    setPrice(trip.price * guests);
  }, [guests, trip.price]);

  return (
    <div className="modal">
      <div className="trip-popup">
        <button className="trip-popup__close" onClick={handleCloseModal}>
          ×
        </button>
        <form className="trip-popup__form" autoComplete="off">
          <div className="trip-info">
            <h3 className="trip-info__title">{trip.title}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration">
                <strong>{trip.duration}</strong> days
              </span>
              <span className="trip-info__level">{trip.level}</span>
            </div>
          </div>
          <Input
            name="date"
            type="date"
            label="Date"
            value={date}
            min={new Date().toISOString().split('T')[0]}
            handleChange={handleChangeDate}
          />
          <Input
            name="guests"
            type="number"
            minLength={1}
            maxLength={10}
            value={guests}
            label="Number of guests"
            handleChange={handleChangePrice}
          />
          <span className="trip-popup__total">
            Total: <output className="trip-popup__total-value">{price}$</output>
          </span>
          <Button type="submit" text="Book a trip" />
        </form>
      </div>
    </div>
  );
};
