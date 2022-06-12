import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { trips } from '../trips';
import { ITrip } from '../types';

type paramsType = {
  tripId: string;
};
export const TripDetailsScreen: React.FC = () => {
  const params: paramsType = useParams();
  const { tripId } = params;
  const [trip, setTrip] = useState<ITrip | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const result = trips.filter((item) => item.id === tripId);
    setTrip(result[0]);
  }, [tripId]);

  const handleCloseModal = () => setShowModal(false);

  return (
    <main className="trip-page">
      <div className="trip">
        <img src={trip?.image} className="trip__img" alt="trip" />
        <div className="trip__content">
          <div className="trip-info">
            <h3 className="trip-info__title">{trip?.title}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration">
                <strong>{trip?.duration}</strong> days
              </span>
              <span className="trip-info__level">{trip?.level}</span>
            </div>
          </div>
          <div className="trip__description">{trip?.description}</div>
          <div className="trip-price">
            <span>Price</span>
            <strong className="trip-price__value">{trip?.price} $</strong>
          </div>
          <Button
            text={'Book a trip'}
            className={'trip__button'}
            handleClick={() => setShowModal(!showModal)}
          />
        </div>
      </div>
      {showModal && trip && (
        <Modal handleCloseModal={handleCloseModal} trip={trip} />
      )}
    </main>
  );
};
