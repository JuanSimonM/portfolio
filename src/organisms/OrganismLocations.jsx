import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import { getLocations } from "../API";

function OrganismLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const locationsData = await getLocations();
        console.log("Locations data:", locationsData); // Check the API response
        setLocations(locationsData);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }

    fetchLocations();
  }, []);

  return (
    <div className="organismCardsContainer">
      {locations.map((location) => (
        <div key={location.id}>
          <Cards title={location.name} />
        </div>
      ))}
    </div>
  );
}

export default OrganismLocations;
