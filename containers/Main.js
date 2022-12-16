import React, { useReducer } from 'react';

import Search from '../components/Search';
import Container from './Container';
import NewFilters from './Filters';
import CardsContainer from './CardsContainer';

import { SearchAndFiltersContext } from '../context/context';
import useFiltersState from '../hooks/useFiltersState';

export default function Main({ countries }) {
  const { searchValue, filterValue, sortValue, dispatch } =
    useFiltersState();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: 'SEARCH', value: value.toLowerCase() });
    dispatch({ type: 'RESET' });
  };

  return (
    <SearchAndFiltersContext.Provider
      value={{
        sortValue,
        searchValue,
        filterValue,
        dispatch,
      }}
    >
      <Container classKey='filters'>
        <Search value={searchValue} onChange={handleChange} />

        <NewFilters />
      </Container>

      <CardsContainer countries={countries} />
    </SearchAndFiltersContext.Provider>
  );
}
