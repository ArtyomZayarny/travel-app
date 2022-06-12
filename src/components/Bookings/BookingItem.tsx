import React from 'react';
import { IBooking } from '../../types';

type BookingItemProps = {
  booking: IBooking;
  handleDeleteBooking: (id: string) => void;
};
export const BookingItem: React.FC<BookingItemProps> = ({
  booking,
  handleDeleteBooking,
}) => {
  const date = new Date(booking.date).toISOString().split('T')[0];
  const formattedDate = `${date.split('-')[2]}-${date.split('-')[1]}-${
    date.split('-')[0]
  }`;
  return (
    <li className="booking">
      <h3 className="booking__title">{booking.trip.title}</h3>
      <span>{booking.guests} guests</span>
      <span>{formattedDate}</span>
      <span>{booking.totalPrice} $</span>
      <button
        className="booking__cancel"
        title="Cancel booking"
        onClick={() => {
          handleDeleteBooking(booking.id);
        }}
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};
