import '../../App.css';
import React from "react";
import SearchBar from "../SearchBar.js";
import BookData from "../../Data.json";

function SearchActivities() {

  return (
    <>
      <h1>Search Activity</h1>
      <SearchBar placeholder="Enter an Activity Name..." data={BookData} />
    </>
  )
}

export default SearchActivities