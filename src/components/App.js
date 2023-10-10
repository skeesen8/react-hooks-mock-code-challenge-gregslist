import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]);
  const listingDatabase = "http://localhost:6001/listings";

  useEffect(() => {
    fetch(listingDatabase)
    .then(response => response.json())
    .then(data => setAllListings(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer allListings={allListings} />
    </div>
  );
}

export default App;
