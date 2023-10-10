import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({allListings}) {

  const listings = allListings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} />
  })

  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
