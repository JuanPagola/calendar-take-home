import React, { useState, useEffect } from "react";
import { ListingCard } from "./components/ListingCard";
import { ListingInfo } from "./utils/Types";

const App = () => {
  const [data, setData] = useState<ListingInfo[]>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("./api/saved-listings")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch listings. Please try again.");
        }
        return res.json();
      })
      .then(setData)
      .catch(() => setError("An error has occurred!"));
  }, []);

  return (
    <div className="calendar-container">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        data?.map((info, index) => <ListingCard info={info} key={index} />)
      )}
    </div>
  );
};

export default App;
