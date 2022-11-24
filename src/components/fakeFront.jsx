import React, { useState } from "react";
// full filters: ["assault","violence","bneStore","bneHome","bneOther","robStore","robStreet","robOfCar","robFromCar"]
// ["fall","summer","spring","winter"] or ["dhdjhds"], if theres only one unrecognized element, it sends it all
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
        season filters
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
