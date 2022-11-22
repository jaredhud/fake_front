import React, { useState } from "react";

const Filters = () => {
  const [crimeFilters, setCrimeFilters] = useState([]);
  const [timeFilters, setTimeFilters] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const filterPacket = {
      crimeFilters,
      timeFilters,
    };

    console.log(JSON.stringify(filterPacket));
    const response = await fetch("/api/crimeData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterPacket),
    });
    const newMapData = await response.json();
    console.log(newMapData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        crime filters
        <input
          onChange={(event) => setCrimeFilters(event.target.value)}
          value={crimeFilters}
        />
      </label>
      <label>
        summer
        <input
          onChange={(event) => setTimeFilters(event.target.value)}
          value={timeFilters}
        />
      </label>
      <button type="submit">Get Map Data</button>
    </form>
  );
};

export default Filters;
