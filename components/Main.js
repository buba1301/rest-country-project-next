import React, { useState } from 'react';

import styles from '../styles/Main.module.scss';

import Search from '../components/Search';
import Filters from './Filters';
import Button from './Button';
import useFiltersState from '../hooks/useFiltersState';
import CardsContainer from './CardsContainer';

import { transformData } from '../utils';
import { SearchAndFiltersContext } from '../context/context';

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
  const [limit, setLimit] = useState(8);

  const { type, result, sortValue, dispatch } =
    useFiltersState(countries);

  const sortedCountries = transformData.sort(
    result,
    type.toLowerCase(),
    sortValue
  );

  const firstPageList = sortedCountries.slice(0, limit);

  const handleClick = () => {
    setLimit((prevState) => prevState + 8);
  };

  return (
    <>
      <div className={styles.filters}>
        <SearchAndFiltersContext.Provider
          value={{
            searchValue,
            setSearchValue,
            setLimit,
            dispatch,
            type,
          }}
        >
          <Search />
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
        </SearchAndFiltersContext.Provider>
      </div>
      <CardsContainer countriesCards={firstPageList} />
      <Button
        onClick={handleClick}
        text='More countries...'
        size='xl'
      />
    </>
  );
}
