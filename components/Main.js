import React, { useReducer, useState } from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import Search from '../components/Search';

import styles from '../styles/Main.module.scss';
import { numberWithCommas, transformData } from '../utils';
import FilterDropDown from './FilterDropDown';
import SortDropDown from './SortDropDown';

export const SearchAndFiltersContext = React.createContext();

const initialState = { query: '', type: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, query: action.value, type: 'search' };
    case 'FILTER':
      return { ...state, query: action.value, type: 'filter' };
    case 'SORT':
      return { ...state, query: action.value, type: 'sort' };
    default:
      return state;
  }
};

export default function Main({ countries }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [limit, setLimit] = useState(8);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { query, type } = state;

  const filteredData =
    type === 'sort'
      ? transformData.sort(countries, type, query)
      : transformData.filter(countries, type, query);

  const firstPageList = filteredData.slice(0, limit);

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
            setSelectedValue,
            selectedValue,
            setLimit,
            dispatch,
            query,
          }}
        >
          <Search />
          <div className={styles.dropDown}>
            <SortDropDown />
            <FilterDropDown />
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
      <button
        type='button'
        onClick={handleClick}
        // disabled={searchValue !== ''}
        className={styles.moreCountries}
      >
        More countries...
      </button>
    </>
  );
}
