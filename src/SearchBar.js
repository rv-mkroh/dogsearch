import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <div className="searchbar">
      <input type="text" value={props.searchTerm} onChange={(e)=>props.handleChange(e)} />
      <button>Find</button>
    </div>
  )
}

export default SearchBar;

SearchBar.PropTypes = {
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func
};