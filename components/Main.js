import React, { useState } from 'react';

import Search from './Search';
import Container from './Container';
import NewFilters from './Filters';
import CardsContainer from './CardsContainer';

import { SearchAndFiltersContext } from '../context/context';
import useFiltersState from '../hooks/useFiltersState';

export default function Main({ countries }) {
  const [searchValue, setSearchValue] = useState('');

  const { type, result, sortValue, dispatch } =
    useFiltersState(countries);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    dispatch({ type: 'SEARCH', value: value.toLowerCase() });
  };

  return (
    <SearchAndFiltersContext.Provider
      value={{
        sortValue,
        searchValue,
        setSearchValue,
        dispatch,
        type,
      }}
    >
      <Container classKey='filters'>
        <Search value={searchValue} onChange={handleChange} />

        <NewFilters />
      </Container>

      <CardsContainer countries={result} />
    </SearchAndFiltersContext.Provider>
  );
}
