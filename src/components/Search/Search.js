import React from 'react';
import './Search.css';

const Search = ({ tagSearchChange, searchChange }) => {
  return (
    <div className='search-bar-container'>
      <input
        className='search-bar'
        type='search'
        placeholder='Search by Name'
        onChange={searchChange} />

      <input
        className='search-bar tag'
        type='search'
        placeholder='Search by Tag'
        onChange={tagSearchChange} />
    </div>
  )
}

export default Search;