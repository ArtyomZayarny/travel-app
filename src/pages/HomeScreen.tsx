import React, { useEffect, useState } from 'react';
import { inRange } from '../assets/helpers';
import { Filters } from '../components/Filters';
import { Loader } from '../components/Loader';
import { TripsList } from '../components/TripsList/TripsList';
import { trips } from '../trips';
import { ITrip } from '../types';

export const HomeScreen: React.FC = () => {
  const [initialData, setInitialData] = useState<ITrip[] | []>([]);
  const [filteredTrips, setFilteredTrips] = useState<ITrip[] | []>([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = (search: string) => {
    let result = null;
    if (search) {
      const results = filteredTrips.filter((trip) =>
        trip.title.includes(search)
      );
      result = results;
    }
    return result ? setFilteredTrips(result) : setFilteredTrips(trips);
  };

  const handleSelectDuration = (selected: string) => {
    let result = null;
    if (selected) {
      // transform selected from '0_x_15' to [0, 15]
      const [min, max] = selected.split('_x_').map((item) => parseInt(item));
      const results = initialData.filter((trip) =>
        inRange(trip.duration, min, max)
      );
      result = results;
    }
    return result ? setFilteredTrips(result) : setFilteredTrips(initialData);
  };
  const handleSelectLevel = (selected: string) => {
    let result = null;
    if (selected) {
      const results = initialData.filter((trip) => trip.level === selected);
      result = results;
    }
    return result ? setFilteredTrips(result) : setFilteredTrips(initialData);
  };
  useEffect(() => {
    if (initialData.length === 0) {
      setLoading(true);
    }
    if (initialData.length > 0) {
      setLoading(false);
    }
    const delayID = setTimeout(() => {
      setInitialData(trips);
      setFilteredTrips(trips);
    }, 2000);
    return () => {
      clearTimeout(delayID);
    };
  }, [loading, initialData]);
  return (
    <main className={`${loading ? 'centered' : ''}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Filters
            handleSearch={handleSearch}
            handleSelectDuration={handleSelectDuration}
            handleSelectLevel={handleSelectLevel}
          />
          <TripsList filteredTrips={filteredTrips} />
        </>
      )}
    </main>
  );
};
