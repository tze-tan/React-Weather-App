import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-component" className="search-component">
        <input
          type="text"
          className="search-input"
          id="search-input"
          placeholder="Enter a city"
          required
        />
        <input type="submit" id="submit" className="submit" value="Search" />
      </form>
    </div>
  );
}
