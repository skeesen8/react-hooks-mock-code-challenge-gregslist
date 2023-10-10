import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [allListings, setAllListings] = useState([]);
  const listingDatabase = "http://localhost:6001/listings";
  const [filterListings,setFilterListings]=useState("")
  
  useEffect( 
    dataFetcher
    , [])
    
    
    function dataFetcher(){
      fetch(listingDatabase)
        .then(response => response.json())
        .then(data => setAllListings(data))
    }

  function deleteListing(listing){  
    fetch(listingDatabase + "/"+listing.id, {
      method:"DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(()=>dataFetcher())
    console.log(listing)
    }

  function searchListing(searchForm){
    console.log(searchForm)
    setFilterListings(allListings.filter((listing)=>{
      if(listing.description.includes(searchForm))
      {
        return true
      }
    }))
  }

  const displayedListings = (filterListings !== "") ? filterListings : allListings


  return (
    <div className="app">
      <Header searchListing={searchListing}/>
      <ListingsContainer deleteListing={deleteListing} displayedListings={displayedListings} />
    </div>
  );
}

export default App;
