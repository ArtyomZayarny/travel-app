import React from 'react';
import { IBooking } from '../../types';
import { BookingItem } from './BookingItem';

type BookingsListProps = {
  bookings: IBooking[];
  handleDeleteBooking: (id: string) => void;
};
export const BookingsList: React.FC<BookingsListProps> = ({
  bookings,
  handleDeleteBooking,
}) => {
  return (
    <ul className="bookings__list">
      {bookings.map((booking: IBooking) => (
        <BookingItem
          booking={booking}
          handleDeleteBooking={handleDeleteBooking}
        />
      ))}
    </ul>
  );
};
