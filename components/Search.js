import React, { useContext } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { SearchAndFiltersContext } from './Main';

import s from '../styles/Search.module.scss';

export default function Search() {
  const { setSearchValue, setSelectedValue, dispatch, query } =
    useContext(SearchAndFiltersContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    dispatch({ type: 'SEARCH', value });
    setSelectedValue('');
  };

  return (
    <form className={s.container}>
      <input
        className={s.input}
        type='search'
        placeholder='Search...'
        value={query}
        onChange={handleChange}
      />
      <MagnifyingGlassIcon className={s.icon} />
    </form>
  );
}

/* error

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
} */
