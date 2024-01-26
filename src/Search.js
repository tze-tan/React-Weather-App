import React from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-component" className="search-component">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              className="search-input"
              placeholder="Enter a city"
              required
            />
          </div>
          <div className="col-2">
            <input type="submit" className="submit" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}
