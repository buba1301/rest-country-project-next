import React, { useReducer, useState } from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import Search from '../components/Search';
import DropDown from '../components/DropDown';

import styles from '../styles/Main.module.scss';

const initialState = { query: '', type: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, query: action.value, type: 'search' };
    case 'FILTER':
      return { ...state, query: action.value, type: 'filter' };
  }
};

export default function Main({ countries }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { query, type } = state;

  const filteredData = countries.filter((country) => {
    if (!query) {
      return country;
    }
    return type === 'search'
      ? country.name.common.toLowerCase() === query
      : country.region === query;
  });

  const firstPageList = filteredData.slice(0, 8);

  return (
    <>
      <div className={styles.filters}>
        <Search query={query} dispatch={dispatch} />
        <DropDown query={query} dispatch={dispatch} />
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
                  population={population}
                  region={region}
                  capital={capital[0]}
                  flag={flags.svg}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
