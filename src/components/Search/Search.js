import React from 'react';
import './Search.css';

const Search = ({ searchfield, searchChange }) => {
  return (
    <div className='search-bar-container'>
      <input
        className='search-bar'
        type='search'
        placeholder='Search by Name'
        onChange={searchChange} />
    </div>
  )
}

export default Search;