import React,{useState} from "react";

function Search({searchListing}) {

  const [searchForm, setSearchForm] = useState("")

  function handleSearch(e){
    setSearchForm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchListing(searchForm)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchForm}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
