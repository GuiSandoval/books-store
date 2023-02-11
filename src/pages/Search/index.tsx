import React, { useEffect } from 'react'
import { useSearch } from '../../contexts/SearchContext';

function Search() {
  const queryParams = new URLSearchParams(window.location.search);
  const { searchValue } = useSearch();

  console.log('searchValue')
  console.log(searchValue)


  return (
    <div>Search</div>
  )
}

export { Search }