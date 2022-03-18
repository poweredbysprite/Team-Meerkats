import '../../App.css';
import React from "react";
import SearchBar from "../SearchBar.js";
import BookData from "../../Data.json";

function SearchActivities() {
  return (
    <>
      <SearchBar placeholder="Enter an Activity Name..." data={BookData} />
    </>
  )
}

export default SearchActivities