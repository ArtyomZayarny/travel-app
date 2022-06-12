import React from 'react';
import { ITrip } from '../../types';
import { Loader } from '../Loader';
import { Trip } from './Trip';

type TripListProp = {
  filteredTrips: ITrip[];
};
export const TripsList: React.FC<TripListProp> = ({ filteredTrips }) => {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {filteredTrips.map((trip: ITrip) => (
          <Trip trip={trip} />
        ))}
      </ul>
    </section>
  );
};
