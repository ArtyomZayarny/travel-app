import React from 'react';
import { NavLink } from 'react-router-dom';
import { ITrip } from '../../types';

type TripListProp = {
  trip: ITrip;
};
export const Trip: React.FC<TripListProp> = ({ trip }) => {
  return (
    <li className="trip-card">
      <img src={trip.image} alt="trip" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{trip.title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{trip.duration}</strong> days
            </span>
            <span className="trip-info__level">{trip.level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{trip.price} $</strong>
        </div>
      </div>
      <NavLink to={`/trip/${trip.id}`} className="button">
        Discover a trip
      </NavLink>
    </li>
  );
};
