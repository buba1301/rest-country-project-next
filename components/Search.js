import React, { useContext } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { SearchAndFiltersContext } from './Main';

import s from '../styles/Search.module.scss';

export default function Search() {
  const { searchValue, setSearchValue, dispatch } = useContext(
    SearchAndFiltersContext
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    dispatch({ type: 'SEARCH', value: value.toLowerCase() });
  };

  return (
    <form className={s.container}>
      <input
        className={s.input}
        type='search'
        placeholder='Search...'
        value={searchValue}
        onChange={handleChange}
      />
      <MagnifyingGlassIcon className={s.icon} />
    </form>
  );
}
