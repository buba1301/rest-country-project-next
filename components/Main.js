import React, { useReducer, useState } from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import Search from '../components/Search';

import styles from '../styles/Main.module.scss';
import { numberWithCommas, transformData } from '../utils';
import Filters from './Filters';
import Button from './Button';

export const SearchAndFiltersContext = React.createContext();

const reducer = (state, { type, value }) => {
  switch (type) {
    case 'SEARCH':
      return {
        ...state,
        type: 'search',
        result: transformData.search(state.countries, value),
      };

    case 'FILTER':
      return {
        ...state,
        type: 'filter',
        result: transformData.filter(
          state.countries,
          type.toLowerCase(),
          value
        ),
      };

    case 'SORT':
      return {
        ...state,
        type: 'sort',
        sortValue: value,
      };

    default:
      return state;
  }
};

export default function Main({ countries }) {
  const [searchValue, setSearchValue] = useState('');
  const [limit, setLimit] = useState(8);

  const [state, dispatch] = useReducer(reducer, {
    type: '',
    sortValue: '',
    countries,
    result: countries,
  });

  const { type, result, sortValue } = state;

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
            <Filters
              initialValue='Reset'
              action='SORT'
              dropDownName='Sort'
            />
            <Filters
              initialValue='All'
              action='FILTER'
              dropDownName='Filter By Region'
            />
          </div>
        </SearchAndFiltersContext.Provider>
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          {firstPageList.map(
            ({ name, population, region, capital, flags, cca3 }) => (
              <Link
                href={`/countries/${cca3.toLowerCase()}`}
                key={name.common}
                className={styles.link}
              >
                <Card
                  name={name.common}
                  population={numberWithCommas(population)}
                  region={region}
                  capital={capital ? capital[0] : 'no capital'}
                  flag={flags.svg}
                />
              </Link>
            )
          )}
        </div>
      </div>
      <Button
        onClick={handleClick}
        text='More countries...'
        size='xl'
      />
    </>
  );
}
