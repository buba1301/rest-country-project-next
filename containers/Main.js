import React, { useReducer, useState } from 'react';

import Search from '../components/Search';
import Container from './Container';
import NewFilters from './Filters';
import CardsContainer from './CardsContainer';

import { SearchAndFiltersContext } from '../context/context';
import useFiltersState, {
  INITIAL_STATE,
  REDUCER,
} from '../hooks/useFiltersState';

export default function Main({ countries }) {
  // const [searchValue, setSearchValue] = useState('');

  /*const { type, result, sortValue, dispatch } =
    useFiltersState(countries);*/

  const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE);

  const { searchValue, filterValue, sortValue } = state;

  const handleChange = (e) => {
    const { value } = e.target;
    // setSearchValue(value);
    dispatch({ type: 'SEARCH', value: value.toLowerCase() });
    dispatch({ type: 'RESET' });
  };

  return (
    <SearchAndFiltersContext.Provider
      value={{
        sortValue,
        searchValue,
        filterValue,
        // setSearchValue,
        dispatch,
        // type,
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
