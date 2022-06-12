import React, { useState } from 'react';
import { bookingsData } from '../bookings';
import { BookingsList } from '../components/Bookings';

export const BookingsScreen: React.FC = () => {
  const [bookings, setBookings] = useState(bookingsData);

  const handleDeleteBooking = (id: string) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <BookingsList
        bookings={bookings}
        handleDeleteBooking={handleDeleteBooking}
      />
    </main>
  );
};
