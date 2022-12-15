import React, { useState } from 'react';

import styles from '../styles/Main.module.scss';

import Search from './Search';
import Filters from './Filters';
import CardsContainer from './CardsContainer';

import { SearchAndFiltersContext } from '../context/context';
import useFiltersState from '../hooks/useFiltersState';

const filters = [
  {
    id: '1',
    initialValue: 'Reset',
    action: 'SORT',
    dropDownName: 'Sort',
  },
  {
    id: '2',
    initialValue: 'All',
    action: 'FILTER',
    dropDownName: 'Filter By Region',
  },
];

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
      <div className={styles.filters}>
        <Search value={searchValue} onChange={handleChange} />
        <div className={styles.dropDown}>
          {filters.map(
            ({ id, initialValue, action, dropDownName }) => (
              <Filters
                key={id}
                initialValue={initialValue}
                action={action}
                dropDownName={dropDownName}
              />
            )
          )}
        </div>
      </div>
      <CardsContainer countries={result} />
    </SearchAndFiltersContext.Provider>
  );
}
