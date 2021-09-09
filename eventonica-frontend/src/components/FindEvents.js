import React, { useState } from 'react'

export default function FindEvents() {
  const [searchDate, setSearchDate] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchEvents = (searchTerm) => {
    return fetch(`http://localhost:3000/events/search/${searchTerm}`)
      .then(res => res.json())
      .then(res => setSearchResults(res));
  };

  const handleSearchFormSubmit = searchFormSubmit => {
    searchFormSubmit.preventDefault();
    const searchTerm = searchDate;
    searchEvents(searchTerm);
  }



  const searchList = searchResults.map((search) =>
    <li key={search.id}>
      Event ID: {search.id}<br/>
      Name: {search.name}<br/>
      Date: {search.date}<br/>
      Description: {search.description}<br/>
      Category: {search.category}<br/><br/>
    </li>
  );

  return (
    <div className="search-management">
      <h2>Events Finder</h2>
      <div className="finder-body">
        <div className="search-result">
          <h3>Search Results</h3>
          <ul id="search-list">
            {searchList}
          </ul>
        </div>
        <div className="search-form">
          <h3>Search by Date/Category</h3>
          <form id="search" action="#" onSubmit={handleSearchFormSubmit}>
            <fieldset>
              <label htmlFor="date-search">Date </label>
              <input 
                type="date" 
                id="date-search"
                value={searchDate}
                onChange={(enterDate) => setSearchDate(enterDate.target.value)} 
              />
            </fieldset>
            <fieldset>
              <label htmlFor="category-search">Category </label>
              <input 
                type="text" 
                id="category-search"
                value={searchCategory}
                onChange={(enterCategory) => setSearchCategory(enterCategory.target.value)} 
              />
            </fieldset>
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  )
}
