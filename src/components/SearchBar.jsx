import React from "react";

const SearchBar = () => {
  return (
    <div id="form-wrapper">
      <button className="go-button">
        Search 
      </button>
      <span className="nav-list">
        <span className="current-selection"></span>
        <select id="dropdown">
          <option value="books-and-ebooks">Books & eBooks</option>
          <option value="audio-books">Audio Books</option>
          <option value="dvds">DVDs</option>
          <option value="other-resources">Other Resources</option>
          <option value="random">Random</option>
        </select>
      </span>
      <div className="in-wrap">
        <input type="text" name="query" id="search-box" />
      </div>
    </div>
  );
};

export default SearchBar;
