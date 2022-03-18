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

// font-family: Lato;
// font-style: normal;
// font-weight: bold;
// font-size: 96px;
// line-height: 75px;
// margin-top: 17.5%;
// margin-left: 150px;