import React from 'react';
type FiltersProps = {
  handleSearch: (search: string) => void;
  handleSelectDuration: (selected: string) => void;
  handleSelectLevel: (selected: string) => void;
};
export const Filters: React.FC<FiltersProps> = ({
  handleSearch,
  handleSelectDuration,
  handleSelectLevel,
}) => {
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            name="search"
            type="search"
            placeholder="search by title"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            name="price"
            onChange={(e) => handleSelectDuration(e.target.value)}
          >
            <option value="">duration</option>
            <option value="0_x_15">&lt; 15 days</option>
            <option value="15_x_30">&lt; 30 days</option>
            <option value="30_x">&ge; 30 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select
            name="level"
            onChange={(e) => handleSelectLevel(e.target.value)}
          >
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};
